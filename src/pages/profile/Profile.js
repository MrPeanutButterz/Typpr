import Login from "../../components/form/Login";
import Register from "../../components/form/Register";

export default function Profile() {

  const user = false

  return <>
    {user ? <h1>Profile</h1> : Login()}
  </>
};