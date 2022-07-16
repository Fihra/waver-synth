import React, { useState, useEffect } from 'react';
import useSynth from '../context/SynthManagerContext';

const Button = (props) => {
    const [ buttonActive, setButtonActive ] = useState("");
    const { setSynth, currentSynth } = useSynth();

    const handleChange = () => {
        console.log("change active");
        setButtonActive("active")
        if(buttonActive !== "active") {
            
            setSynth(props.btnLabel);
        } else {
            setButtonActive("");
        }

    }

    useEffect(() => {
        setButtonActive("");
    }, [currentSynth] );
 
    return(
        <button className={buttonActive === "active" ? "button-active" : ""} onClick={handleChange} value={props.btnLabel}>
            <span>{props.btnLabel}</span>
        </button>
    )
}

export default Button;