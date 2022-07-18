import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

const RecordButton = () => {
    const [ recording, setRecording ] = useState(false);
    const [ countdown, setCountdown] = useState(10);

    const recorder = new Tone.Recorder();
    const destination = Tone.getDestination();
    destination.connect(recorder);

    const tick = () => {
        if(countdown === 0){
            setCountdown(10);
        } else {
            setCountdown(countdown - 1);
        } 
    }

    const timer = () =>{
        if(recording) {
            const timerId = setInterval(() => tick(), 1000);
            return () => clearInterval(timerId);
        }
    }

    useEffect(() => {
        timer();
    },);

    const handleRecording =() => {
        if(recording === false){
            setRecording(true);
            recorder.start();
            returnURL();  
        }
    }

    const returnURL = () => {
        setTimeout(async () => {
            const recording = await recorder.stop();
            const url = URL.createObjectURL(recording);
            const anchor = document.createElement("a");
            anchor.download = "waver-synth-recording.ogg";
            anchor.href = url;
            anchor.click();
            setRecording(false);
        }, 11000);

    }

    return(
        <div className="record-button">
        <button id="rec-button" className={recording ? "recording-active" : ""} onClick={handleRecording}>
            <span>REC</span>
        </button>
        <h3>Recording time left: <span>{countdown}</span></h3>
        </div>
    )
}

export default RecordButton;