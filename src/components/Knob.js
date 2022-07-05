import React, { useState } from 'react';
import Knob from 'react-simple-knob';

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

    const showValue = (value) => {
        let newValue = value / 100;
        setvalue(newValue);
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