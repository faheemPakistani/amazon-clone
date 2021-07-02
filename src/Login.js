import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://wallpapercave.com/wp/wp7771146.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
          />
          <button type="submit" onClick={signIn} className="login_signinButton">
            Sign In
          </button>
        </form>
        <p>By signing in you are agree to Amazones fake clone conditions</p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
