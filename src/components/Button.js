import React, { useContext } from 'react';
// import SynthContext from '../context/SynthContext';

const Button = (props) => {
    return(
        <button>
            {props.btnLabel}
        </button>
    )
}

export default Button;