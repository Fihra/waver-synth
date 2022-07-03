import './App.css';

const App = () => {
  return (
    <div className="App">
        <h1>Waver Synth</h1>
        <div className="synth-container">
          <ul>
            <li>sine</li>
            <li>triangle</li>
            <li>square</li>
            <li>sawtooth</li>
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
