import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { login, logout, useAuth } from "/Users/anthonydigiammarino/Desktop/NutriFit-App/NutriFit-Health-Frontend/src/firebase.js"

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
    <div id="main">
      <div>
      <h1>Welcome to NutriFit-Health!</h1>
      </div><br />

      <div><h2>Currently logged in as: { currentUser?.email }</h2> </div><br />

      <div id="fields">
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>

      <Button disabled={ loading || currentUser } onClick={handleLogin}>Log In</Button>
      <Button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</Button>

    </div>
  );
}
