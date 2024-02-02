import "./Form.css"

export default function Login() {

  function handleSubmit(e) {
    e.preventDefault()
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
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password-field"
          name="password"
          className="input-field"
          placeholder="password"
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