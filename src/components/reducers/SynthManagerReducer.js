import SYNTHACTIONS from "../actions/SynthActions";

export const initialState = {
    currentSynth: "Sine",
    settings: {
        volume: -60,
        reverb: 0
    }
}

const synthManagerReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case SYNTHACTIONS.SET_SYNTH:
            return {
                ...state,
                currentSynth: payload.currentSynth
            }
        case SYNTHACTIONS.SET_VOLUME:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    volume: payload.volume
                }
            }
        default:
            return state;
    }
}

export default synthManagerReducer;