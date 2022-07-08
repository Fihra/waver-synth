import { createContext, useReducer, useContext } from 'react';
import waveformReducer, {initialState} from '../components/reducers/WaveformReducer';

export const WaveformProvider = ({ children }) => {
    const [state, dispatch] = useReducer(waveformReducer, initialState);

    const updateWaveform = (waveform) => {
        dispatch({
            type: "UPDATE_WAVEFORM",
            payload: {
                waveform: waveform
            }
        })
    }

    const value = {
        updateWaveform,
        waveform: state.currentWaveform
    }

    return <WaveformContext.Provider value={value}>{children}</WaveformContext.Provider>
}

const useWaveform = () => {
    const context = useContext(WaveformContext);
    if(context === undefined){
        throw new Error("WHere is waveform");
    }
    return context;
}

export default useWaveform;

export const WaveformContext = createContext("");