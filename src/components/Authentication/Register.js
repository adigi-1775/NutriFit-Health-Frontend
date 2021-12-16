import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { signup, useAuth } from "../../firebase.js"

export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
      await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
      // alert("Error!");
    // }
    setLoading(false);
  }

  return (

<body id="main">
    <div class="login-form">
    <form>
      <h1>Register</h1>
      <div>Currently logged in as: { currentUser?.email } </div>
      <div class="form-group">
        <input id="username" ref={emailRef} placeholder="Email" />
        <span class="input-icon"><i class="fa fa-envelope"></i></span>
      </div><br />
      <div class="form-group">
      <input id="password" ref={passwordRef} type="password" placeholder="Password" />
      <span class="input-icon"><i class="fa fa-lock"></i></span>
      </div>
      </form><br />
      <Button  class="login-btn" disabled={ loading || currentUser } onClick={handleSignup}>Register</Button><br />
      <br /><Button class="home-btn" type="submit" onClick="">Back</Button>
    </div>
    </body>
  );
}
