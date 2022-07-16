import { createContext } from 'react';

const knobs = {
    effects: {
        delay: {
            btnLabel: "Delay"
        },
        // distortion: {
        //     btnLabel: "Distortion"
        // },
        // bitcrusher: {
        //     btnLabel: "Bitcrusher"
        // },
        // tremolo: {
        //     btnLabel: "Tremolo"
        // },
        // vibrato: {
        //     btnLabel: "Vibrato" 
        // },
        wah: {
            btnLabel: "Wah"
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
    eq: {
        lowEQ: {
            btnLabel: "Low"
        },
        midEQ: {
            btnLabel: "Mid"
        },
        highEQ: {
            btnLabel: "High"
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