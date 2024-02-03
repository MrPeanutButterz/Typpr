import Form from "../../components/forms/Form";

export default function Profile() {

  const user = false

  return <>
    {user ? <h1>Profile</h1> : Form()}
  </>
};