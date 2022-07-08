import SYNTHACTIONS from "../actions/SynthActions";

export const initialState = {
    currentSynth: "Sine",
    settings: {
        volume: -60,
        delay: 0,
        distortion: 0,
        tremolo: 0,
        reverb: 0,
        bitcrusher: 1
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
        case SYNTHACTIONS.SET_DELAY:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    delay: payload.delay
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
        default:
            return state;
    }
}

export default synthManagerReducer;