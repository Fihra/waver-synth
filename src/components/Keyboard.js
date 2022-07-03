import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

const Keyboard = () => {
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('e4');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    return(
        <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={(midiNumber) => {
                console.log(midiNumber)
            }}
            stopNote={(midiNumber) => {
                console.log(midiNumber)
            }}
            width={1000}
            keyboardShortcuts={keyboardShortcuts}
        />
    )
}

export default Keyboard;