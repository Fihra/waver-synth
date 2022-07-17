import React from 'react';
import useSynth from '../context/SynthManagerContext';

const Button = (props) => {
    const { setOctave } = useSynth();
    const { btnLabel } = props;

    const handleChange = () => {
        setOctave(btnLabel.num);
    }

    return(
        <button className={btnLabel.isActive ? "button-active" : "not-active"} onClick={handleChange} value={btnLabel}>
            <span>{btnLabel.num}</span>
        </button>
    )
}

export default Button;