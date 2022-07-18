import React, { useState, useEffect } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import * as Tone from 'tone';
import useSynth from '../context/SynthManagerContext';

const Keyboard = () => {
    const [ keyboardSize, setKeyboardSize ] = useState(700);
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('e4');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    const { currentSynth, settings, adsr, eq, currentOctaves } = useSynth();

    let toneSynth = new Tone.PolySynth({
        maxPolyphony: 32,
        voice: Tone.Synth
    });
    // const delay = new Tone.PingPongDelay({
    //     delayTime: settings.delay,
    //     maxDelay: 1
    // }).toDestination();
    // toneSynth.connect(delay);

    const changeSynth = () => {
        let mainSynth = currentSynth.filter(synth => {
            if(synth.isActive){
                return synth;
            }
        })
        switch(mainSynth[0].synth){
            case "Sine":
                return "sine";
            case "Triangle":
                return "triangle";
            case "Square":
                return "square";
            case "Sawtooth":
                return "sawtooth";
            default:
                return "sine";
        }
    }

    const handleResize = () => {
        if(window.innerWidth < 360){
            console.log("here");
            setKeyboardSize(200);
        } else if(window.innerWidth < 500){
            console.log("or here")
            setKeyboardSize(350);
        } else if(window.innerWidth < 1000){
            setKeyboardSize(500);
        } 
        else {
            setKeyboardSize(700);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false)
    }, []);


    const resetSynth = () => {
        toneSynth = new Tone.PolySynth();
        toneSynth.set({
        oscillator: {
            type: currentSynth.toLowerCase()
        },
        }) 
    }

    window.addEventListener('keydown', (e) => {
        if(e.code === "Escape"){
            toneSynth.releaseAll();
            toneSynth.dispose();
            resetSynth();
            if(toneSynth.disposed()){
                resetSynth();
            } 
        }
    })

    const changeOctave = () => {
        let outputOctave = currentOctaves.filter(oct => {
            if(oct.isActive){
                return oct;
            }
        })
        switch(outputOctave[0].num){
            case 1:
                return -24;
            case 2:
                return -12;
            case 3:
                return 0;
            case 4:
                return 12;
            case 5:
                return 24;
            default:
                return 0;
        }
    }

    const playNote = (note) => {
        const timeNow = Tone.now();
        let savedNote = Tone.Frequency(note + changeOctave(), "midi").toNote();
        toneSynth.volume.value = settings.volume;
        toneSynth.volume.linearRampToValueAtTime(settings.volume);

        toneSynth.set({
            oscillator: {
                type: changeSynth()
            },
        })  

        toneSynth.triggerAttack(savedNote, timeNow).toDestination();
    }

    const stopNote = (note) => {
        const timeNow = Tone.now();
        let savedNote = Tone.Frequency(note + changeOctave(), "midi").toNote();
        toneSynth.triggerRelease(savedNote, timeNow + 0.1);
    }

    console.log(window.innerWidth);

    return(
        <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={(note) => {
                playNote(note);
            }}
            stopNote={(note) => {
                stopNote(note);
            }}
            width={keyboardSize}
            keyboardShortcuts={keyboardShortcuts}
        />
    )
}

export default Keyboard;