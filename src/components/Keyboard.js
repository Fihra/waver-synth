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

    let toneSynth = new Tone.PolySynth({
        maxPolyphony: 32
    });

    // let autoFilter = new Tone.Reverb(5).toDestination();
    // console.log(toneSynth);
    

    // useEffect(() => {
    //     toneSynth.releaseAll();
    //     toneSynth.set({
    //         envelope: {
    //             attack: adsr.attack,
    //             decay: adsr.decay,
    //             sustain: adsr.sustain,
    //             release: adsr.release
    //         }

    //     })
    // }, [adsr])

    // let amplitudeEnvelope = new Tone.AmplitudeEnvelope({
    //             attack: adsr.attack,
    //             decay: adsr.decay,
    //             sustain: adsr.sustain,
    //             release: adsr.release   
    // }).toDestination();

    // toneSynth.connect(amplitudeEnvelope);

    toneSynth.set({
        oscillator: {
            type: currentSynth.toLowerCase()
        }
    })  

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

    }

    const playNote = (note) => {
        const timeNow = Tone.now();
        let savedNote = Tone.Frequency(note + 12, "midi").toNote();
        toneSynth.volume.value = settings.volume;
        toneSynth.volume.linearRampToValueAtTime(settings.volume);



        
        // toneSynth.connect(amplitudeEnvelope);

        // toneSynth.connect(autoFilter);

        // toneSynth.set({
        //     envelope: {
        //         attack: adsr.attack,
        //         decay: adsr.decay,
        //         sustain: adsr.sustain,
        //         release: adsr.release
        //     }
        // })
        // autoWah.Q.value = 6;
        // toneSynth.connect(autoWah);


        // if(settings.distortion < 0){
        //     distortion.set({wet:0.1});
        //     toneSynth.disconnect(distortion);
        // } else{
        //     distortion.set({wet: 1.0});
        // }

        // toneSynth.connect(distortion);



        // if(settings.distortion > 0) {
        //     toneSynth.connect(distortion);
        //     distortion.set({wet: 0.1});
        // } else {
        //     distortion.set({
        //         wet: 0
        //     })
        //     toneSynth.disconnect(distortion); 
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

        toneSynth.triggerAttack(savedNote, timeNow).toDestination();
    }

    const stopNote = (note) => {
        const timeNow = Tone.now();
        let savedNote = Tone.Frequency(note + 12, "midi").toNote();
        toneSynth.triggerRelease(savedNote, timeNow + adsr.sustain);
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