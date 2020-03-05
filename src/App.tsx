import React, { useState, CSSProperties } from 'react';
import PadBank from './components/PadBank'
import './App.css';

const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'whoosh',
  url: './sounds/whoosh.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'camera_sutter',
  url: './sounds/camera_shutter.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'doorbell',
  url: './sounds/doorbell.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'bottle_opening',
  url: './sounds/bottle_opening.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'buzzer',
  url: './sounds/buzzer.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'high_beep',
  url: './sounds/high_beep.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'bah_boom',
  url: './sounds/bah_boom.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'gun_cock',
  url: './sounds/gun_cock.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'lightsaber',
  url: './sounds/lightsaber.mp3'
}];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'frog',
  url: './sounds/frog.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'squeeze_toy',
  url: './sounds/squeeze_toy.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'drumroll',
  url: './sounds/drumroll.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'record_scratch',
  url: './sounds/record_scratch.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'plastic_slide',
  url: './sounds/plastic_slide.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'bell_ding',
  url: './sounds/bell_ding.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'karate_kick',
  url: './sounds/karate_kick.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'horn_screech',
  url: './sounds/horn_screech.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'wiff',
  url: './sounds/wiff.mp3'
}];



const App: React.FC = () => {
  const [power, setPower] = useState<boolean>(true)
  const [display, setDisplay] = useState<string>(String.fromCharCode(160))
  const [currentPadBank, setCurrentPadBank] = useState<Array<Object>>(bankOne)
  const [currentPadBankId, setCurrentPadBankId] = useState<string>('Toon1 Sounds')
  const [sliderVal, setSliderVal] = useState<number>(0.3)

  const powerControl = () => {
    setPower(!power)
    setDisplay(String.fromCharCode(160))
  }

  const selectBank = () => {
    if(power){
      if( currentPadBankId === 'Toon1  Sounds'){
        setCurrentPadBank(bankTwo);
        setDisplay('Toon2 Sounds');
        setCurrentPadBankId('Toon2 Sounds');
      }else{
        setCurrentPadBank(bankOne);
        setDisplay('Toon1 Sounds');
        setCurrentPadBankId('Toon1 Sounds');
      }
    }
  }

  const displayClipName =(name: string) => {
    if(power){
      setDisplay(name)
    }
  }

  const adjustVolume = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setSliderVal(parseInt(e.target.value, 10))
    setDisplay(`Volume: ${Math.round(parseInt(e.target.value, 10) * 100)}`)
  }

  const clearDisplay = () => {
    setDisplay(String.fromCharCode(160))
  }

  const powerSliderRight: CSSProperties = {
      float:'right'
  }

  const powerSliderLeft: CSSProperties = {
    float: 'left'
  }
  const powerSlider = power ?  powerSliderRight : powerSliderLeft
  // const powerSlider = power ?  { float: 'right'} : {float: 'left'}

  const bankSlider = currentPadBank === bankOne ? powerSliderLeft : powerSliderRight

  var HTMLAudioElement: {
    new (): HTMLAudioElement;
    prototype: HTMLAudioElement;
  }

  // Type: {
  //   element: HTMLMediaElement
  // }

  const clips: Array<HTMLMediaElement> = [].slice.call(document.getElementsByClassName('clips'))
  clips.forEach((element, i,  clips) =>{
    element.volume = sliderVal
  })


  return (
    <div id="drum-machine" className="App">
      {/* Keypad */}
      <PadBank 
        power={power}
        updateDisplay={displayClipName}
        clipVolume={sliderVal}
        currentPadBank={currentPadBank}
      />

      {/* header */}
      <div className="logo">
        <div className="inner-logo ">{'FCC' + String.fromCharCode(160)}</div>
        <i className="inner-logo fa fa-free-code-camp" />
      </div>

      {/* container for power button, display text, volume slider, bank button */}
      <div className="controls-container">

        <div className="control">
          <p>Power</p>
          <div onClick={powerControl} className="select">
            <div style={powerSliderRight} className="inner" />
          </div>
        </div>
        <p id="display">
          {display}
        </p>
        <div className="volume-slider">
          <input type="range" min="0" max="1" step="0.01" value={sliderVal} onChange={adjustVolume} />
        </div>
        <div className="control">
          <p>Bank</p>
          <div onClick={selectBank} className="select">
            <div style={bankSlider} className="inner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
