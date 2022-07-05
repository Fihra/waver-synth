import { createContext, useReducer, useContext } from 'react';
import synthManagerReducer, { initialState } from '../components/reducers/SynthManagerReducer';

export const SynthManagerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(synthManagerReducer, initialState);

    const setSynth = (synthName) => {
        console.log("Previous state before change: ", state.currentSynth);
        dispatch({
            type: "SET_SYNTH",
            payload: {
                currentSynth: synthName,
            }
        });
    };

    const value = {
        currentSynth: state.currentSynth,
        buttonActive: state.buttonActive,
        setSynth
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