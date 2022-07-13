import './App.css';
import { SynthContext } from './context/SynthContext';
import { KnobContext } from './context/KnobContext';
import { useContext, useEffect, useRef } from 'react';
import Button from './components/Button';
import KnobComponent from './components/Knob';
import Keyboard from './components/Keyboard';
import Footer from './components/Footer';
import { SynthManagerProvider } from './context/SynthManagerContext'; 
import * as Tone from 'tone';
import AudioOscilloscope from 'audio-oscilloscope';

const App = () => {
  const synth = useContext(SynthContext);
  const knob = useContext(KnobContext);

  const showKnobs =(knobCollection) => {
    return Object.keys(knobCollection).map((item, i) => {
      return <li><KnobComponent key={i} btnLabel={knobCollection[item].btnLabel}/></li>
    })
  }

  let waveform = new Tone.Analyser('waveform', 1024);

  waveform.connect(Tone.getDestination());

  useEffect(() => {
    let oscilloscope = AudioOscilloscope(document.getElementById('synth-spectrum'), {
      canvasContext: {
        lineWidth: 2,
        fillStyle: '#355242',
        strokeStyle: '#63A0AC'
      }
    });

    oscilloscope.addSource(Tone.getDestination());
    oscilloscope.draw();
  });

  return (
    <div className="App">
        <h1 className="app-name">Waver Synth</h1>
        <SynthManagerProvider>
        <div className="section-one">
          <div className="synth-container">
            <ul>
              {Object.keys(synth).map((s, i) => {
                return <Button key={i} btnLabel={synth[s].btnLabel} />
              })}
            </ul>
          </div>
          <canvas id="synth-spectrum"/>
         </div>
         <div className="section-two">
          <div className="effects-container">
              <ul>
                {showKnobs(knob.effects)}
              </ul>
          </div>
         </div>
         {/* <div className="section-three">
          <div className="adsr-spectrum"></div>
          <div className="adsr-container">
            <ul>
                {showKnobs(knob.adsr)}
            </ul>
          </div>
         </div> */}
         <div className="piano-container">
           <div className="piano-knob"><KnobComponent btnLabel={knob.volume.btnLabel}/></div>
          <Keyboard />
          <div className="piano-knob"><KnobComponent btnLabel={knob.reverb.btnLabel}/></div>
         </div>
         </SynthManagerProvider>
         <Footer /> 
    </div>
  );
}

export default App;
