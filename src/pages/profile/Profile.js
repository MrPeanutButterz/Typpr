import Login from "../../components/forms/Login";
import Register from "../../components/forms/Register";

export default function Profile() {

  const user = false

  return <>
    {user ? <h1>Profile</h1> : Login()}
  </>
};