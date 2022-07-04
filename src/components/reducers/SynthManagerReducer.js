import SYNTHACTIONS from "../actions/SynthActions";

export const initialState = {
    currentSynth: "Sine",
}

const synthManagerReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case SYNTHACTIONS.SET_SYNTH:
            return {
                ...state,
                currentSynth: payload.currentSynth
            }
        default:
            return state;
    }
}

export default synthManagerReducer;