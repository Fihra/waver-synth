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

    const value = {
        currentSynth: state.currentSynth,
        buttonActive: state.buttonActive,
        settings: state.settings,
        adsr: state.adsr,
        setSynth,
        setVolume,
        setDelay,
        setDistortion,
        setTremolo,
        setBitcrusher,
        setAttack,
        setDecay,
        setSustain,
        setRelease
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