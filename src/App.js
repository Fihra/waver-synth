import './App.css';
import { SynthContext } from './context/SynthContext';
import { useContext } from 'react';
import Button from './components/Button';

const App = () => {
  const synth = useContext(SynthContext);
  // console.log(synth);

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
              <li>delay</li>
              <li>distortion</li>
              <li>chorus</li>
              <li>tremolo</li>
              <li>flanger</li>
              <li>phaser</li>
              <li>low-pass filter</li>
              <li>high-pass filter</li>
            </ul>
         </div>
         <div className="adsr-spectrum"></div>
         <div className="adsr-container">
          <ul>
            <li>attack</li>
            <li>decay</li>
            <li>sustain</li>
            <li>release</li>
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
