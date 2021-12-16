import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { signup, useAuth } from "../../firebase.js"
import { Link } from 'react-router-dom';


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

<body id="main" class="text-center">
    <div class="login-form">
    <form>
      <h1>NutriFit-Health Registration</h1><br />
      <h2>Register Below</h2><br />
      <div class="form-group">
        <input id="username" ref={emailRef} placeholder="Email" />
        <span class="input-icon"><i class="fa fa-envelope"></i></span>
      </div><br />
      <div class="form-group">
      <input id="password" ref={passwordRef} type="password" placeholder="Password" />
      <span class="input-icon"><i class="fa fa-lock"></i></span>
      </div>
      </form><br />
      <button className="login-btn btn bg-success text-light font-welcome-buttons" disabled={ loading || currentUser } onClick={handleSignup}>Register</button><br />
      <br />
      <Link className="btn bg-primary text-light font-welcome-buttons" class="home-btn" to={"/HomePage"}>Back</Link>
    </div>
    </body>
  );
}
