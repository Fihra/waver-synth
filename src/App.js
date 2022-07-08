import './App.css';
import { SynthContext } from './context/SynthContext';
import { KnobContext } from './context/KnobContext';
import { useContext } from 'react';
import Button from './components/Button';
import KnobComponent from './components/Knob';
import Keyboard from './components/Keyboard';
import Footer from './components/Footer';
import { SynthManagerProvider } from './context/SynthManagerContext';
import { useRef } from 'react';

const App = () => {
  const synth = useContext(SynthContext);
  const knob = useContext(KnobContext);

  const showKnobs =(knobCollection) => {
    return Object.keys(knobCollection).map((item, i) => {
      return <li><KnobComponent key={i} btnLabel={knobCollection[item].btnLabel}/></li>
    })
  }

  const canvasRef = useRef(null);

  const draw = () => {
    console.log("here")
  }

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
          <canvas className="synth-spectrum" ref={canvasRef} onClick={(e) => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            draw();
          }}/>
         </div>
         <div className="section-two">
          <div className="effects-container">
              <ul>
                {showKnobs(knob.effects)}
              </ul>
          </div>
         </div>
         <div className="section-three">
          <div className="adsr-spectrum"></div>
          <div className="adsr-container">
            <ul>
                {showKnobs(knob.adsr)}
            </ul>
          </div>
         </div>
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
