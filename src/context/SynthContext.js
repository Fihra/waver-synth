import { createContext } from 'react';

const synths = {
    sine: {
        btnLabel: "Sine"
    },
    triangle: {
        btnLabel: "Triangle"
    },
    square: {
        btnLabel: "Square"
    },
    sawtooth: {
        btnLabel: "Sawtooth"
    }

}

export const SynthContext = createContext(synths);