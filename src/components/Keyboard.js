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

    const { currentSynth, settings, adsr, eq, currentOctaves } = useSynth();

    let toneSynth = new Tone.PolySynth({
        maxPolyphony: 32
    });
    // const pingPong = new Tone.PingPongDelay("4n", settings.delay).toDestination();
    // toneSynth.connect(pingPong);

    // const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination();

    // const autoWah = new Tone.AutoWah(5, 6, -40).toDestination();
    // toneSynth.connect(autoWah);

    // const eqNode = new Tone.EQ3({
    //     low: eq.low,
    //     mid: eq.mid,
    //     high: eq.high
    // }).toDestination();
    // toneSynth.connect(eqNode);

    // toneSynth.connect(chorus);

    // const distortion = new Tone.Distortion(0.5).toDestination();
    // toneSynth.connect(distortion);
    

    // const env = new Tone.AmplitudeEnvelope({
    //     attack: 0.2,
    //     decay: 0.2,
    //     sustain: 1.0,
    //     release: 0.8
    // }).toDestination();
    // toneSynth.connect(env);

    // const autoWah = new Tone.AutoWah({
    //     baseFrequency: 100, 
    //     octaves: 5,
    //     sensitivity: -30
    // }).toDestination();
    // toneSynth.connect(autoWah);

    // toneSynth.connect(freqEnv);

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

    const changeSynth = () => {
        let mainSynth = currentSynth.filter(synth => {
            if(synth.isActive){
                return synth;
            }
        })
        console.log(currentSynth);
        console.log(mainSynth);

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

    toneSynth.set({
        oscillator: {
            type: changeSynth()
        }
    })  

    // useEffect(() => {
    //     changeSynth();
    // }, [currentSynth])

    // const reverb = new Tone.Reverb(0.1).toDestination();
    // reverb.set({
    //     decay: settings.reverb
    // })
    // toneSynth.connect(reverb);

    // useEffect(() => {
    //     reverb.set({
    //         decay: settings.reverb
    //     })
    // }, [settings.reverb])

    // reverb.set({
    //     decay: settings.reverb
    // })

    // toneSynth.chain(reverb, Tone.Destination);

    // toneSynth.set({
    //     envelope: {
    //         attack: adsr.attack,
    //         attackCurve: "linear",
    //         decay: adsr.decay,
    //         decayCurve: "exponential",
    //         release: adsr.release,
    //         releaseCurve: "exponential",
    //         sustain: adsr.sustain
    //     }
    // })

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

        
        // autoWah.wet.value = settings.wah;

        // eqNode.low.value = eq.low;
        // eqNode.mid.value = eq.mid;
        // eqNode.high.value = eq.high;


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
        let savedNote = Tone.Frequency(note + changeOctave(), "midi").toNote();
        toneSynth.triggerRelease(savedNote, timeNow + 0.1);
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