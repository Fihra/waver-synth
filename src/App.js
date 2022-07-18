import './App.css';
import { KnobContext } from './context/KnobContext';
import { useContext, useEffect } from 'react';
import Button from './components/Button';
import OctaveButton from './components/OctaveButton';
import KnobComponent from './components/Knob';
import Keyboard from './components/Keyboard';
import Footer from './components/Footer';
import RecordButton from './components/RecordButton';
import { SynthManagerProvider } from './context/SynthManagerContext'; 
import * as Tone from 'tone';
import AudioOscilloscope from 'audio-oscilloscope';
import useSynth from './context/SynthManagerContext';

const App = () => {
  const knob = useContext(KnobContext);
  const { currentOctaves, currentSynth } = useSynth();

  // const showKnobs =(knobCollection) => {
  //   return Object.keys(knobCollection).map((item, i) => {
  //     return <li><KnobComponent key={i} btnLabel={knobCollection[item].btnLabel}/></li>
  //   })
  // }

  let waveform = new Tone.Analyser('waveform', 1024);

  waveform.connect(Tone.getDestination());

  useEffect(() => {
    let oscilloscope = AudioOscilloscope(document.getElementById('synth-spectrum'), {
      canvas: {
        width: 300,
        height: 50
      },
      canvasContext: {
        lineWidth: 2,
        fillStyle: 'black',
        strokeStyle: '#63A0AC'
      }
    });

    
  oscilloscope.on('drawFrame', function(osc) {
    let ctx = osc.canvasContext;
    ctx.strokeStyle = "#355242";
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
              {Object.keys(currentSynth).map((synth, i) => {
                return <Button key={i} btnLabel={currentSynth[synth]} />
              })}
            </ul>
          </div>
          <canvas id="synth-spectrum"/>
         </div>
         {/* <div className="section-two">
          <div className="effects-container">
              <ul>
                {showKnobs(knob.effects)}
                {showKnobs(knob.eq)}
              </ul>
          </div>
         </div> */}
         <div className="section-three">
          <div className="octaves">
            <ul>
              {Object.keys(currentOctaves).map((num, i) => {
                return <OctaveButton key={i} btnLabel={currentOctaves[num]}/>
              })}
            </ul>
          </div>
         </div>
         {/* <div className="section-four">
          <div className="adsr-spectrum"></div>
          <div className="adsr-container">
            <ul>
                {showKnobs(knob.adsr)}
            </ul>
          </div>
         </div> */}
         <div className="piano-container">
           <div className="piano-knob"><KnobComponent btnLabel={knob.volume.btnLabel}/></div>
           <div className="keyboard-holder">
          <Keyboard />
          </div>
          {/* <div className="piano-knob"><KnobComponent btnLabel={knob.reverb.btnLabel}/></div> */}
          <div className="record-container"><RecordButton/></div>
         </div>
         </SynthManagerProvider>
         <Footer /> 
    </div>
  );
}

export default App;
