import WAVEFORMACTIONS from "../actions/WaveformActions";

export const initialState = {
    currentWaveform: ""
}

const waveformReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case WAVEFORMACTIONS.UPDATE_WAVEFORM:
            return {
            currentWaveform: payload.waveform
        }
        default:
            return state;

    }
}

export default waveformReducer;