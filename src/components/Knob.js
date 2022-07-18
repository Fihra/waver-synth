import React from 'react';
import Knob from 'react-simple-knob';
import TouchKnob from 'react-touch-knob';
import { BrowserView, MobileView } from 'react-device-detect';
import useSynth from '../context/SynthManagerContext';

const KnobComponent = (prop) => {
    const style = {
        height: "80px",
        width: "170px",
        fontFamily: "Arima",
        color: "#355242",
        fontWeight: "bold",
        fontSize: 35
    }

    const { setVolume, setReverb, setDelay, setWah, setDistortion, setTremolo, setBitcrusher, setAttack, setDecay, setSustain, setRelease, setLowEQ, setMidEQ, setHighEQ } = useSynth();

    // const fixedDecimalNum = (value) => {
    //     return Math.floor(value/10 * 0.1).toFixed(2);
    // }

    const showValue = (value) => {
        let newValue = (value / 100) * 0.1;
        switch(prop.btnLabel){
            case "Volume":
                let cap;
                if(value - 60 > -10) {
                    cap = -10;
                } else {
                    cap = value - 60;
                }
                setVolume(cap);
                break;
            case "Reverb":
                let reverbNum;
                if(value/10 <= 0){
                    reverbNum = 0.1;
                } else {
                    reverbNum = value/10;
                }
                setReverb(reverbNum);
                break;
            case "Delay":
                // console.log("delay: ", Math.floor(value / 10) * 0.1);
                setDelay((Math.floor(value / 10) * 0.1).toFixed(2));
                break;
            case "Wah":
                setWah(Math.floor(value/10) * 0.1);
                break;
            case "Distortion":
                setDistortion((Math.floor(value /10) * 0.1).toFixed(2));
                break;
            case "Tremolo":
                // console.log(Math.floor(value / 10));
                setTremolo(Math.floor(value / 10));
                break;
            case "Bitcrusher":
                let crushVal = Math.floor(value/10);
                let checkBit = crushVal <= 1 ? 1 : crushVal;
                setBitcrusher(checkBit);
                break;
            case "Low":
                // console.log("Low: ", (Math.floor(value/10) * 0.01).toFixed(2));
                setLowEQ((Math.floor(value/10) * 0.01).toFixed(2));
                break;
            case "Mid":
                setMidEQ((Math.floor(value/10) * 0.01).toFixed(2));
                break;
            case "High":
                setHighEQ((Math.floor(value/10) * 0.01).toFixed(2));
                break;
            case "Attack":
                // console.log("Attack: ", newValue);
                setAttack(newValue.toFixed(2));
                break;
            case "Decay":
                setDecay(newValue.toFixed(2));
                break;
            case "Sustain":
                setSustain(newValue.toFixed(2));
                break;
            case "Release":
                setRelease(newValue.toFixed(2));
                break;
            default:
                break;
        }
    }

    const handleMobileChange = (value) => {
        switch(prop.btnLabel){
            case "Volume":
                let cap;
                if(value - 60 > -10) {
                    cap = -10;
                } else {
                    cap = value - 60;
                }
                setVolume(cap);
                break;
            default:
                break;
            }
    }

    const handleMobileEnd = (value) => {
        console.log(value);
    }

    const showReverbKnob = () => {
        return (
            <div>
                <span>Dry</span> | <span>Wet</span>
            </div>
        )
    }

    return(
    <div>
        <BrowserView>
        <Knob name={prop.btnLabel} defaultPercentage={0} onChange={showValue} bg="white" fg="#355242" transform={p => parseInt(p * 100, 10)} mouseSpeed={5} style={style} /> 
        </BrowserView>
        <MobileView>
            <TouchKnob name={prop.btnLabel} value={0} min="0" max="100" showNumber={true} onChange={handleMobileChange} onEnd={handleMobileEnd}/>
        </MobileView>
        {prop.btnLabel === "Reverb" ? showReverbKnob() : null}
    </div>
    )
}

export default KnobComponent;