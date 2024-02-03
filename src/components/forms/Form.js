import Login from "./Login";
import Register from "./Register";
import {useState} from "react";

export default function Form() {

  const [knownUser, setKnownUser] = useState(true)

  function switchButton(text) {
    return <>
      <button
        type="button"
        className="create-account-button"
        onClick={() => setKnownUser(!knownUser)}
      >{text}
      </button>
    </>
  }

  return <>
    {knownUser ? Login() : Register()}
    {knownUser ? switchButton("Create account") : switchButton("Login here")}
  </>
};