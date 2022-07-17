import React from 'react';
import useSynth from '../context/SynthManagerContext';

const Button = (props) => {
    const { setSynth } = useSynth();
    const { btnLabel } = props;

    const handleChange = () => {
       setSynth(btnLabel.synth);
    }
 
    return(
        <button className={btnLabel.isActive ? "button-active" : "not-active"} onClick={handleChange} value={btnLabel}>
            <span>{btnLabel.synth}</span>
        </button>
    )
}

export default Button;