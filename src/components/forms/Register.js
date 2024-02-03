export default function Register() {

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Shit just happend!")
  }

  return <>
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
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
          placeholder="new password"
          autoComplete="current-password"
        />
      </label>

      <label htmlFor="password">
        <input
          type="password"
          id="repeat-password-field"
          name="password"
          className="input-field"
          placeholder="repeat password"
          autoComplete="repeat-password"
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