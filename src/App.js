import './App.css';
import { SynthContext } from './context/SynthContext';
import { KnobContext } from './context/KnobContext';
import { useContext } from 'react';
import Button from './components/Button';
import KnobComponent from './components/Knob';
import Keyboard from './components/Keyboard';

const App = () => {
  const synth = useContext(SynthContext);
  const knob = useContext(KnobContext);

  return (
    <div className="App">
        <h1>Waver Synth</h1>
        <div className="synth-container">
          <ul>
            {Object.keys(synth).map((s, i) => {
              return <Button key={i} btnLabel={synth[s].btnLabel} />
            })}
          </ul>
        </div>
         <div className="synth-spectrum">
         </div>
         <div className="effects-container">
            <ul>
              {Object.keys(knob.effects).map((effect, i) => {
                return <KnobComponent key={i} btnLabel={knob.effects[effect].btnLabel} />
              })}
            </ul>
         </div>
         <div className="adsr-spectrum"></div>
         <div className="adsr-container">
          <ul>
              {Object.keys(knob.adsr).map((env, i) => {
                return <KnobComponent key={i} btnLabel={knob.adsr[env].btnLabel} />
              })}
          </ul>
         </div>
         <div className="piano-container">
           <div className="piano-knob"><KnobComponent btnLabel={knob.volume.btnLabel}/></div>
          <Keyboard />
          <div className="piano-knob"><KnobComponent btnLabel={knob.reverb.btnLabel}/></div>
         </div>
    </div>
  );
}

export default App;
