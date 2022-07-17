import SYNTHACTIONS from "../actions/SynthActions";

export const initialState = {
    currentSynth: [
        {synth: "Sine", isActive: false},
        {synth: "Triangle", isActive: true},
        {synth: "Square", isActive: false},
        {synth: "Sawtooth", isActive: false}
    ],
    settings: {
        volume: -60,
        delay: 0,
        wah: 0,
        distortion: 0,
        tremolo: 0,
        reverb: 0.1,
        bitcrusher: 1
    },
    currentOctaves: [
        {num: 1, isActive: false},
        {num: 2, isActive: false},
        {num: 3, isActive: true},
        {num: 4, isActive: false},
        {num: 5, isActive: false}
    ],
    eq: {
        low: 0,
        mid: 0,
        high: 0
    },
    adsr: {
        attack: 0,
        decay: 0,
        sustain: 0,
        release: 0
    }
}

const synthManagerReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case SYNTHACTIONS.SET_SYNTH:
            let newSynths = [...state.currentSynth].map((synth) => {
                if(synth.synth !== payload.currentSynth){
                    synth.isActive = false;
                    return synth;
                } else {
                    synth.isActive = true;
                    return synth;
                }
            })
            return {
                ...state,
                currentSynth: newSynths
            }
        case SYNTHACTIONS.SET_VOLUME:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    volume: payload.volume
                }
            }
        case SYNTHACTIONS.SET_REVERB: {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    reverb: payload.reverb
                }
            }
        }
        case SYNTHACTIONS.SET_DELAY:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    delay: payload.delay
                }
            }
        case SYNTHACTIONS.SET_WAH:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    wah: payload.wah
                }
            }
        case SYNTHACTIONS.SET_DISTORTION:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    distortion: payload.distortion
                }
            }
        case SYNTHACTIONS.SET_TREMOLO:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    tremolo: payload.tremolo
                }
            }
        case SYNTHACTIONS.SET_BITCRUSHER:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    bitcrusher: payload.bitcrusher
                }
            }
        case SYNTHACTIONS.SET_ATTACK:
            return {
                ...state,
                adsr: {
                    ...state.adsr,
                    attack: payload.attack
                }
            }
        case SYNTHACTIONS.SET_DECAY:
            return {
                ...state,
                adsr: {
                    ...state.adsr,
                    decay: payload.decay
                }
            }
        case SYNTHACTIONS.SET_SUSTAIN:
            return {
                ...state,
                adsr: {
                    ...state.adsr,
                    sustain: payload.sustain
                }
            }
        case SYNTHACTIONS.SET_RELEASE:
            return {
                ...state,
                adsr: {
                    ...state.adsr,
                    release: payload.release
                }
            }
        case SYNTHACTIONS.SET_LOW_EQ:
            return {
                ...state,
                eq: {
                    ...state.eq,
                    low: payload.low
                }
            }
        case SYNTHACTIONS.SET_MID_EQ:
            return {
                ...state,
                eq: {
                    ...state.eq,
                    mid: payload.mid
                }
            }
        case SYNTHACTIONS.SET_HIGH_EQ:
            return {
                ...state,
                eq: {
                    ...state.eq,
                    high: payload.high
                }
            }
        case SYNTHACTIONS.SET_OCTAVE:
            let newOctaves = [...state.currentOctaves].map((num) => {
                if(num.num !== payload.octave){
                    num.isActive = false;
                    return num;
                } else {
                    num.isActive = true;
                    return num;
                }
            })
            return {
                ...state,
                currentOctaves: newOctaves
            }
        default:
            return state;
    }
}

export default synthManagerReducer;