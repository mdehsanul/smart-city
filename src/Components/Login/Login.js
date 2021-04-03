import React, { useContext, useState } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import {
  createUserWithEmailAndPassword,
  handleFacebookSignIn,
  handleGoogleSignIn,
  initializeLoginFramework,
  signInWithEmailAndPassword,
} from "./loginManager";

const Login = () => {
  // useContext()
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // PrivateRoute
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // useState() for firebase
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignin: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    success: false,
    error: "",
  });

  initializeLoginFramework();

  const handleAllFunctionResponse = (response, redirect) => {
    setUser(response);
    setLoggedInUser(response);
    if (redirect) {
      // PrivateRoute
      history.replace(from);
    }
  };

  // google validation using firebase
  const googleSignIn = () => {
    handleGoogleSignIn().then((response) => {
      handleAllFunctionResponse(response, true);
    });
  };

  // facebook validation using fiirebase
  const facebookSignIn = () => {
    handleFacebookSignIn().then((response) => {
      handleAllFunctionResponse(response, true);
    });
  };

  // <form> input-field's validation
  const handleInputFieldChange = (event) => {
    let isInputFieldValid = true;
    if (event.target.name === "email") {
      isInputFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isInputFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (event.target.name === "confirm password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isInputFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isInputFieldValid) {
      const newUserInformation = { ...user };
      newUserInformation[event.target.name] = event.target.value;
      setUser(newUserInformation);
    }
  };

  // when <form> input-field valid
  const handleFormSubmit = (event) => {
    // create new user, using firebase Auth
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (response) => {
          handleAllFunctionResponse(response, true);
          alert("Account Created");
        }
      );
    }
    // user login using firebase Auth
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((response) => {
        handleAllFunctionResponse(response, true);
        alert("user loggedin");
      });
    }
    // prevent browser from auto loading
    event.preventDefault();
  };

  return (
    <div className="login">
      <Navbar></Navbar>
      <div className="form-box">
        <form id="login" className="input-group" onSubmit={handleFormSubmit}>
          <h2>{newUser ? "Create an account " : "Login"}</h2>
          {newUser && (
            <input
              type="text"
              name="name"
              id=""
              onBlur={handleInputFieldChange}
              className="input-field"
              placeholder="Name"
              required
            />
          )}
          <input
            type="text"
            name="email"
            id=""
            onBlur={handleInputFieldChange}
            className="input-field"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            onBlur={handleInputFieldChange}
            className="input-field"
            placeholder="Password(length 7
               and must contain a-z A-Z 0-9)"
            required
          />
          {newUser && (
            <input
              type="password"
              name="confirm password"
              id=""
              onBlur={handleInputFieldChange}
              className="input-field"
              placeholder="Confirm Password"
              required
            />
          )}
          {!newUser && (
            <input
              type="checkbox"
              name="remember me"
              id=""
              className="check-box"
            />
          )}
          {!newUser && <span>Remember Me</span>}
          <input
            type="submit"
            className="submit-btn"
            value={newUser ? "Create an account" : "Login"}
          />
          <p className="haveAccountOrCreate">
            {newUser ? "Already have an account?" : "Don't have an account?"}
            {/* initial work of useState() -> "newUser" and "setNewUser" start from here.... */}
            <span
              name="newUser"
              onClick={() => setNewUser(!newUser)}
              className="signinOrCreateAccount"
            >
              {newUser ? "Login" : "Create an account "}
            </span>
          </p>
        </form>
      </div>
      <div>
        <div className="separator">Or</div>
        <div className="socialButton">
          <button className="button" onClick={facebookSignIn}>
            <img src={facebook} className="facebookImage" /> Continue with
            Facebook
          </button>
          <br />
          <button className="button" onClick={googleSignIn}>
            <img src={google} className="googleImage" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
