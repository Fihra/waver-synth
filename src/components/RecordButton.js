import React, { useState } from 'react';
import * as Tone from 'tone';

const RecordButton = () => {
    const [ recording, setRecording ] = useState(false);

    const handleRecording =() => {
        if(recording){
            setRecording(false);
        } else {
            setRecording(true);
        }
    }
    console.log(recording);

    return(
        <div className="record-button">
        <button className={recording ? "recording-active" : ""} onClick={handleRecording}>
            <span>REC</span>
        </button>
        </div>
    )
}

export default RecordButton;