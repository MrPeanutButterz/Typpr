import "./TheTest.css"
import {useState} from "react";

export default function TheTest() {

  const textToType = "As fingers danced across the keys, a symphony of clicks echoed in the quiet room. Words flowed like a river, creating worlds and unraveling mysteries. Each keystroke was a brushstroke, painting thoughts onto the digital canvas. In this silent dance, a story emerged, born from the rhythmic tapping of the keyboard."

  const [parameters, setParameters] = useState({
    started: false,
    completed: false,
    lengthMs: 60000,
    startMs: 0,
    finishMs: 0
  })

  const [onScreen, setOnscreen] = useState({
    original: "",
    onScreenGhost: [],
    onScreenUser: [],

  })


  return (
    <section className="text-area-container">
      <div className="text-field">
{/*
          <span className="text-area-user">
          {text.onScreenUser.map((letter, index) => <span key={index} className={text.classArray[index]}>{letter}</span>)}
          </span>

        <span className="text-area-ghost">
          {text.onScreenGhost.map((letter, index) => <span key={index} className="ghost-character">{letter}</span>)}
          </span>
*/}

        <textarea
          autoFocus
          spellCheck="false"
          className="text-area-input"
          onKeyDown={(e) => {
            //handleUserInput(e)
            //timer(e.timeStamp)
          }}
        ></textarea>
        {/*        <div className="tip-container">
          {tips()}
        </div>*/}
      </div>
    </section>);
};