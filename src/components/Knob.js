import React, { useState } from 'react';
import Knob from 'react-simple-knob';

const KnobComponent = (prop) => {
    const [value, setvalue ] = useState(0.5);

    const style = {
        height: "80px",
        width: "170px",
        fontFamily: "Arima",
        color: "black",
        fontSize: 35
    }

    const showValue = (value) => {
        setvalue(Math.round(value * 100)/100);
        // console.log(Math.round(value * 100)/100);
    }

    return(
        <Knob name={prop.btnLabel} defaultPercentage={value} onChange={showValue} bg="white" fg="#355242" mouseSpeed={3} style={style} />
    )
}

export default KnobComponent;