import React, { useState, useEffect } from 'react';
import Knob from 'react-simple-knob';
import useSynth from '../context/SynthManagerContext';

const KnobComponent = (prop) => {
    const [value, setvalue ] = useState(0);
    const style = {
        height: "80px",
        width: "170px",
        fontFamily: "Arima",
        color: "#355242",
        fontWeight: "bold",
        fontSize: 35
    }

    const { setVolume, setDelay, setDistortion, setTremolo, setBitcrusher, setAttack, setDecay, setSustain, setRelease, settings } = useSynth();

    const fixedDecimalNum = (value) => {
        return Math.floor(value/10 * 0.1).toFixed(2);
    }

    const showValue = (value) => {
        let newValue = (value / 100) * 0.01;
        setvalue(newValue);
        switch(prop.btnLabel){
            case "Volume":
                let cap;
                
                if(value - 60 > -10) {
                    cap = -10;
                } else {
                    cap = value - 60;
                }
                console.log(cap);
                setVolume(cap);
                // setVolume(value -60);
                break;
            case "Delay":
                setDelay(Math.floor(value / 10));
                break;
            case "Distortion":
                setDistortion((Math.floor(value /10) * 0.1).toFixed(2));
                break;
            case "Tremolo":
                console.log(Math.floor(value / 10));
                setTremolo(Math.floor(value / 10));
                break;
            case "Bitcrusher":
                let crushVal = Math.floor(value/10);
                let checkBit = crushVal <= 1 ? 1 : crushVal;
                setBitcrusher(checkBit);
                break;
            case "Attack":
                console.log("Attack: ", newValue);
                setAttack(newValue);
                break;
            case "Decay":
                setDecay(newValue);
                break;
            case "Sustain":
                setSustain(newValue);
                break;
            case "Release":
                setRelease(newValue);
                break;
            default:
                break;
        }
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
        <Knob name={prop.btnLabel} defaultPercentage={0} onChange={showValue} bg="white" fg="#355242" transform={p => parseInt(p * 100, 10)} mouseSpeed={5} style={style} /> 
        {prop.btnLabel === "Reverb" ? showReverbKnob() : null}
    </div>
    )
}

export default KnobComponent;