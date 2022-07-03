import './App.css';
import { SynthContext } from './context/SynthContext';
import { KnobContext } from './context/KnobContext';
import { useContext } from 'react';
import Button from './components/Button';
import KnobComponent from './components/Knob';

const App = () => {
  const synth = useContext(SynthContext);
  const knob = useContext(KnobContext);
  console.log(knob.effects);

  return (
    <div className="App">
        <h1>Waver Synth</h1>
        <div className="synth-container">
          <ul>
            {Object.keys(synth).map(s => {
              return <Button btnLabel={synth[s].btnLabel} />
            })}
          </ul>
        </div>
         <div className="synth-spectrum">
         </div>
         <div className="effects-container">
            <ul>
              {Object.keys(knob.effects).map(effect => {
                return <KnobComponent btnLabel={knob.effects[effect].btnLabel} />
              })}
            </ul>
         </div>
         <div className="adsr-spectrum"></div>
         <div className="adsr-container">
          <ul>
              {Object.keys(knob.adsr).map(env => {
                return <KnobComponent btnLabel={knob.adsr[env].btnLabel} />
              })}
          </ul>
         </div>
         <div className="piano-container">
          <div>volume</div>
          <div className="piano">piano</div>
          <div>reverb</div>
         </div>
    </div>
  );
}

export default App;
