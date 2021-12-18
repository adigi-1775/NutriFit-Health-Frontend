import { useRef, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { signup, useAuth } from "../../firebase.js"
import { Link } from 'react-router-dom';

export default function App(props) {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(()=>{
    props.setbgimage('images/workharder.jpg')
  }, [])
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
    <div class="login-form text-center" id="main"><br />
      <br /><h1 class="text-white">NutriFit-Health Registration</h1><br />
      <h2 class="text-white">Register Below</h2><br />
      <div class="form-group">
        <input id="username" ref={emailRef} placeholder="Email" />
        <span class="input-icon"><i class="fa fa-envelope"></i></span>
      </div><br />
      <div class="form-group">
      <input id="password" ref={passwordRef} type="password" placeholder="Password" />
      <span class="input-icon"><i class="fa fa-lock"></i></span>
      </div>
      <br />
      <button className="login-btn btn bg-success text-light font-welcome-buttons" disabled={ loading || currentUser } onClick={handleSignup}>Register</button><br />
      <br />
      <Link className="btn bg-secondary text-light font-welcome-buttons" to={"/HomePage"}>Back</Link>
    </div>
  );
}
