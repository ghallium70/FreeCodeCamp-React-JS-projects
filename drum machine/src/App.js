import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        sounds: {
          "Q": "Heater-1",
          "W": "Heater-2",
          "E": "Heater-3",
          "A": "Heater-4",
          "S": "Heater-6", 
          "D": "Dsc",
          "Z": "Kick_n_Hit",
          "X": "Kick_1",
          "C": "Cev"
        }, 
        key: "",
        volume: 0.5
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.changeVolume = this.changeVolume.bind(this)
  }

  handleClick(e){
    var audio = document.getElementById(e.target.value)
    audio.volume = this.state.volume
    audio.play()
    this.setState(state=>({ 
      sounds: state.sounds,
      key: e.target.value,
      volume: state.volume
    }))
  }

  handleKeyPress(event) {
    const key2 = event.key.toUpperCase()
    var audio = document.getElementById(key2)
    if(this.state.sounds[key2]!==undefined){
      audio.volume = this.state.volume
      audio.play()
      this.setState(state=>({ 
        sounds: state.sounds,
        key: key2,
        volume: state.volume
      }))
    }
  }

  changeVolume(event){
    this.setState(state=>({ 
      sounds: state.sounds,
      key: state.key,
      volume: event.target.valueAsNumber
    }))
  }

  render() 
    {
      let sound_name = this.state.sounds[this.state.key]
      return (
      <div className="App">
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" ></script>
        {document.addEventListener("keydown", this.handleKeyPress)}
        <div id="drum-machine">
          <div id="header">
            <h1>FCC: Drum machine </h1>
          </div>
          <div id="display">
            <div id="buttons">
              <button className="drum-pad" id="Heater-1" value="Q" name="Q" onClick={this.handleClick}>Q
                <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"> </audio>
              </button>
              <button className="drum-pad" id="Heater-2" value="W" name="W" onClick={this.handleClick}>W
                <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"> </audio>
              </button>
              <button className="drum-pad" id="Heater-3" value="E" name="E" onClick={this.handleClick}>E
                <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"> </audio>
              </button>
              <button className="drum-pad" id="Heater-4" value="A" name="A" onClick={this.handleClick}>A
                <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"> </audio>
              </button>
              <button className="drum-pad" id="Heater-6" value="S" name="S" onClick={this.handleClick}>S
                <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"> </audio>
              </button>
              <button className="drum-pad" id="Dsc" value="D" name="D" onClick={this.handleClick}>D
                <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"> </audio>
              </button>
              <button className="drum-pad" id="Kick_n_Hat" value="Z" name="Z" onClick={this.handleClick}>Z
                <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"> </audio>
              </button>
              <button className="drum-pad" id="Kick_1" value="X" name="X" onClick={this.handleClick}>X
                <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"> </audio>
              </button>
              <button className="drum-pad" id="Cev" value="C" name="C" onClick={this.handleClick}>C
                <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"> </audio>
              </button>
            </div>
            <div id="sound-control">
              <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={this.state.volume}
                  onChange={this.changeVolume }
              />
              
              <h3>{`${this.state.volume===0? "muted": Math.floor(this.state.volume*100)}`}</h3>
              <div id="sound-name">
                <h2>{`${sound_name!==undefined?sound_name:"\t"}`}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>);
    }
  }

export default App;
