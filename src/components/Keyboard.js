import React, { useEffect } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import * as Tone from 'tone';
import useSynth from '../context/SynthManagerContext';

const Keyboard = () => {
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('e4');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    const { currentSynth, settings } = useSynth();

    const toneSynth = new Tone.PolySynth();
    toneSynth.set({
        oscillator: {
            type: currentSynth.toLowerCase()
        }
    })  

    const playNote = (note) => {
        const timeNow = Tone.now();
        let savedNote = Tone.Frequency(note, "midi").toNote();
        toneSynth.volume.value = settings.volume;

        const delay = new Tone.Delay(settings.delay).toDestination();
        toneSynth.connect(delay);

        const distortion = new Tone.Distortion(settings.distortion).toDestination();
        toneSynth.connect(distortion);

        // const tremolo = new Tone.Tremolo(10).toDestination();
        // toneSynth.connect(tremolo);

        toneSynth.triggerAttack(savedNote, timeNow).toDestination();
    }

    const stopNote = (note) => {
        const timeNow = Tone.now();
        let savedNote = Tone.Frequency(note, "midi").toNote();
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