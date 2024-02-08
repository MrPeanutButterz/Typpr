import {useState} from "react";

export default function Register() {

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })


  function handleSubmit(e) {
    e.preventDefault()
    console.log(newUser.name + " : " + newUser.email + " : " + newUser.password)
  }

  return <>
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          name="name"
          value={newUser.name ?? ""}
          onChange={e => setNewUser({...newUser, name: e.target.value})}
          className="input-field"
          placeholder="Name"
          autoComplete="name"
        />
      </label>
      <label htmlFor="email">
        <input
          type="text"
          id="email"
          name="email"
          value={newUser.email ?? ""}
          onChange={e => setNewUser({...newUser, email: e.target.value})}
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
          value={newUser.password ?? ""}
          onChange={e => setNewUser({...newUser, password: e.target.value})}
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