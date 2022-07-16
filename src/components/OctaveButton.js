import React, { useState, useEffect, useContext } from 'react';
import useSynth from '../context/SynthManagerContext';

const Button = (props) => {
    const [ buttonActive, setButtonActive ] = useState("");
    const { currentSynth, setOctave, currentOctave } = useSynth();
    const { btnLabel } = props;

    const handleChange = () => {
        // console.log("change active");
        setOctave(btnLabel.num);
        // if(btnLabel.isActive) {
        //     setOctave(btnLabel);
        // } else {
        //     setOctave(true)
        // }
    }

    console.log();

    useEffect(() => {
        
    }, [] );

    return(
        <button className={btnLabel.isActive === true ? "button-active" : "not-active"} onClick={handleChange} value={btnLabel}>
            <span>{btnLabel.num}</span>
        </button>
    )
}

export default Button;