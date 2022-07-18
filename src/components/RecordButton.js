import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

const RecordButton = () => {
    const [ recording, setRecording ] = useState(false);
    const [ countdown, setCountdown] = useState(10);
    const [ urlFile, setUrlFile ] = useState("");

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

    useEffect(() => {
        if(recording) {
            const timerId = setInterval(() => tick(), 1000);
            return () => clearInterval(timerId);
        }
    }, [recording, countdown]);

    const handleRecording =() => {
        if(recording === false){
            setRecording(true);
            recorder.start();
            returnURL();  
        }
        console.log("dont record again")
    }

    const returnURL = () => {
        setTimeout(async () => {
            console.log("heillo")
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
        <p>Recording time left: {countdown}</p>
        </div>
    )
}

export default RecordButton;