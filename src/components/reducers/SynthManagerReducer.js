import SYNTHACTIONS from "../actions/SynthActions";

export const initialState = {
    currentSynth: "square",
}

const synthManagerReducer = (state, action) => {
    const { type, payload } = action;
    // console.log("Current State: ", state.currentSynth)
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