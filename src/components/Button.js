import React, { useContext } from 'react';
// import SynthContext from '../context/SynthContext';
import useSynth from '../context/SynthManagerContext';

const Button = (props) => {
    const { setSynth } = useSynth();

    const handleChange = () => {
        setSynth(props.btnLabel);
    }
 
    return(
        <button className="" onClick={handleChange} value={props.btnLabel}>
            <span>{props.btnLabel}</span>
        </button>
    )
}

export default Button;