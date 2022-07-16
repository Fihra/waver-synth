import { createContext, useReducer, useContext } from 'react';
import synthManagerReducer, { initialState } from '../components/reducers/SynthManagerReducer';

export const SynthManagerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(synthManagerReducer, initialState);

    const setSynth = (synthName) => {
        dispatch({
            type: "SET_SYNTH",
            payload: {
                currentSynth: synthName,
            }
        });
    };

    const setVolume = (volumeValue) => {
        dispatch({
            type: "SET_VOLUME",
            payload: {
                volume: volumeValue
            }
        })
    }

    const setDelay = (delayValue) => {
        dispatch({
            type: "SET_DELAY",
            payload: {
                delay: delayValue
            }
        })
    }
    
    const setWah = (wahValue) => {
        dispatch({
            type: "SET_WAH",
            payload: {
                wah: wahValue
            }
        })
    }

    const setDistortion = (distortionValue) => {
        dispatch({
            type: "SET_DISTORTION",
            payload: {
                distortion: distortionValue
            }
        })
    }

    const setTremolo = (tremoloValue) => {
        dispatch({
            type: "SET_TREMOLO",
            payload: {
                tremolo: tremoloValue
            }
        })
    }

    const setBitcrusher = (bitcrusherValue) => {
        dispatch({
            type: "SET_BITCRUSHER",
            payload: {
                bitcrusher: bitcrusherValue
            }
        })
    }

    const setAttack = (attackValue) => {
        dispatch({
            type: "SET_ATTACK",
            payload: {
                attack: attackValue
            }
        })
    }

    const setDecay = (decayValue) => {
        dispatch({
            type: "SET_DECAY",
            payload: {
                decay: decayValue
            }
        })
    }

    const setSustain = (sustainValue) => {
        dispatch({
            type: "SET_SUSTAIN",
            payload: {
                sustain: sustainValue
            }
        })
    }

    const setRelease = (releaseValue) => {
        dispatch({
            type: "SET_RELEASE",
            payload: {
                release: releaseValue
            }
        })
    }

    const setLowEQ = (lowEQValue) => {
        dispatch({
            type: "SET_LOW_EQ",
            payload: {
                low: lowEQValue
            }
        })
    }

    const setMidEQ = (midEQValue) => {
        dispatch({
            type: "SET_MID_EQ",
            payload: {
                mid: midEQValue
            }
        })
    }

    const setHighEQ = (highEQValue) => {
        dispatch({
            type: "SET_HIGH_EQ",
            payload: {
                high: highEQValue
            }
        })
    }

    const setOctave = (octaveValue) => {
        dispatch({
            type: "SET_OCTAVE",
            payload: {
                octave: octaveValue
            }
        })
    }

    const value = {
        currentSynth: state.currentSynth,
        buttonActive: state.buttonActive,
        settings: state.settings,
        currentOctaves: state.currentOctaves,
        adsr: state.adsr,
        eq: state.eq,
        setSynth,
        setVolume,
        setDelay,
        setWah,
        setDistortion,
        setTremolo,
        setBitcrusher,
        setAttack,
        setDecay,
        setSustain,
        setRelease,
        setLowEQ,
        setMidEQ,
        setHighEQ,
        setOctave,
    }

    return <SynthManagerContext.Provider value={value}>{children}</SynthManagerContext.Provider>
};

const useSynth = () => {
    const context = useContext(SynthManagerContext);

    if(context === undefined) {
        throw new Error("where is synthContext");
    }

    return context;
}

export default useSynth;

export const SynthManagerContext = createContext(initialState);