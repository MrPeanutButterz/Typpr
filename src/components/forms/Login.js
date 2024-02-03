import "./Form.css"

export default function Login() {

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Shit just happend!")
  }

  return <>
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="email">
        <input
          type="text"
          id="email-field"
          name="email"
          className="input-field"
          placeholder="email"
          autoComplete="current-email"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password-field"
          name="password"
          className="input-field"
          placeholder="password"
          autoComplete="current-password"
        />
      </label>

      <button
        type="submit"
        className="form-button"
      >Login
      </button>
    </form>
  </>
};
