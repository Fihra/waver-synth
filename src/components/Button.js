import React, { useContext } from 'react';
// import SynthContext from '../context/SynthContext';

const Button = (props) => {
    return(
        <button >
            <span>{props.btnLabel}</span>
        </button>
    )
}

export default Button;