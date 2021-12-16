import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { login, logout, useAuth } from "../../firebase.js"

export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div id="main" class="text-center">
      <div>
      <h1>NutriFit-Health Login/Logout</h1>
      </div><br />

      <div><h2>Currently logged in as: { currentUser?.email }</h2> </div><br />

      <div id="fields">
        <input ref={emailRef} placeholder="Email" /><br />
        <br /><input ref={passwordRef} type="password" placeholder="Password" />
      </div>
      <br />

      <button className="login-btn btn bg-success text-light font-welcome-buttons" disabled={ loading || currentUser } onClick={handleLogin}>Log In</button><br />
      <br /><Button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</Button>

    </div>
  );
}
