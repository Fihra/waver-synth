import React, { useEffect } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import * as Tone from 'tone';
import useSynth from '../context/SynthManagerContext';
import useWaveform from '../context/WaveformContext';

const Keyboard = () => {
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('e4');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    const { currentSynth, settings, adsr } = useSynth();
    const { currentWaveform } = useWaveform();

    let toneSynth = new Tone.PolySynth();
    toneSynth.set({
        oscillator: {
            type: currentSynth.toLowerCase()
        },
        envelope: {
            attack: adsr.attack,
            decay: adsr.decay,
            sustain: adsr.sustain,
            release: adsr.release
        }
    })  

    const playNote = (note) => {
        const timeNow = Tone.now();
        let savedNote = Tone.Frequency(note, "midi").toNote();
        // toneSynth.volume.value = -60;
        toneSynth.volume.value = settings.volume;

        // let allSettings = Object.keys(settings);
        // for(let i= 1; i < allSettings.length; i++){
        //     console.log(allSettings[i] + settings[allSettings[i]]);
        // }


        // const reverb = new Tone.Reverb();
        // toneSynth.connect(reverb);

        // const compressor = new Tone.Compressor(-60, 3).toDestination();
        // toneSynth.connect(compressor);

        // const delay = new Tone.Delay(settings.delay).toDestination();
        // toneSynth.connect(delay);
        // let distortion;
        // let isConnected = false;

        // if(settings.distortion > 0) {
        //     if(isConnected === false){
        //         distortion = new Tone.Distortion(settings.distortion).toDestination();
        //         toneSynth.connect(distortion);
        //     }
        //     isConnected = true; 
        // } else {
        //     if(distortion){
        //         toneSynth.disconnect(distortion);
        //         distortion.dispose();
        //         isConnected = false;
        //     }
        // }

        // const chorus = new Tone.Chorus(4).toDestination();
        // toneSynth.connect(chorus);

        //TODO: Tremolo is still kinda buggy to use
        // const tremolo = new Tone.Tremolo(settings.tremolo).toDestination();
        // toneSynth.connect(tremolo);

        // const phaser = new Tone.Phaser({
        //     frequency: 10,
        //     octaves: 3,
        //     baseFrequency: 1000
        // }).toDestination();
        // toneSynth.connect(phaser);
        // const crusher = new Tone.BitCrusher(settings.bitcrusher).toDestination();

        // if(settings.crusher === 1){
        //     toneSynth.disconnect(crusher);
        //     toneSynth.context._timeouts.cancel(0);
        //     // toneSynth.releaseAll();
        // } else {
            
        //     toneSynth.connect(crusher);
        // }

        // const testWaveform = new Tone.Waveform().toDestination();
        // toneSynth.connect(testWaveform);
        // console.log(testWaveform);

        toneSynth.triggerAttack(savedNote, timeNow).toDestination();
    }

    const stopNote = (note) => {
        const timeNow = Tone.now();
        let savedNote = Tone.Frequency(note, "midi").toNote();
        toneSynth.triggerRelease(savedNote, timeNow + 0.1);
        toneSynth.releaseAll();
    }

    return(
        <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={(note) => {
                playNote(note);
            }}
            stopNote={(note) => {
                stopNote(note);
            }}
            width={700}
            keyboardShortcuts={keyboardShortcuts}
        />
    )
}

export default Keyboard;