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

    const value = {
        currentSynth: state.currentSynth,
        buttonActive: state.buttonActive,
        settings: state.settings,
        setSynth,
        setVolume,
        setDelay,
        setDistortion,
        setTremolo
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