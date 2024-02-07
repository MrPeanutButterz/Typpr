import "./Form.css"
import {useState} from "react";

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })


  function handleSubmit(e) {
    e.preventDefault()
    console.log(user.email + " : " + user.password)

  }

  return <>
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="email">
        <input
          type="text"
          id="email"
          name="email"
          value={user.email ?? ""}
          onChange={e => setUser({...user, email: e.target.value})}
          className="input-field"
          placeholder="Email"
          autoComplete="current-email"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          value={user.password ?? ""}
          onChange={e => setUser({...user, password: e.target.value})}
          className="input-field"
          placeholder="Password"
          autoComplete="current-password"
        />
      </label>

      <button
        type="submit"
        className="form-button"
      >Continue
      </button>
    </form>
  </>
};
