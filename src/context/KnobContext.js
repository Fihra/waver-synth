import { createContext } from 'react';

const knobs = {
    effects: {
        delay: {
            btnLabel: "Delay"
        },
        distortion: {
            btnLabel: "Distortion"
        },
        chorus: {
            btnLabel: "Chorus"
        },
        tremolo: {
            btnLabel: "Tremolo"
        },
        flanger: {
            btnLabel: "Flanger" 
        },
        phaser: {
            btnLabel: "Phaser"
        },
        lowpass: {
            btnLabel: "Low-Pass Filter"
        },
        highpass: {
            btnLabel: "High-Pass Filter"
        }
    },
    adsr: {
        attack: {
            btnLabel: "Attack"
        },
        decay: {
            btnLabel: "Decay"
        },
        sustain: {
            btnLabel: "Sustain"
        },
        release: {
            btnLabel: "Release"
        }
    },
    volume: {
        btnLabel: "Volume"
    },
    reverb: {
        btnLabel: "Reverb",
        dryLabel: "Dry",
        wetLabel: "Wet"
    }
}

export const KnobContext = createContext(knobs);