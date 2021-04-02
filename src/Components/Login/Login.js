import React, { useContext, useState } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import Navbar from "../Navbar/Navbar";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
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

  // useContext()
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // PrivateRoute
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // google validation
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignin: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorCode, errorMessage, email);
      });
  };

  // facebook validation
  var facebookprovider = new firebase.auth.FacebookAuthProvider();
  const handleFacebookSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(facebookprovider)
      .then((result) => {
        var user = result.user;
        setUser(user);
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
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

  // when <form> input-field valid let login user
  const handleFormSubmit = (event) => {
    // create new user, using firebase Auth
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          const newUserInformation = { ...user };
          newUserInformation.error = "";
          newUserInformation.success = true;
          setUser(newUserInformation);
          setLoggedInUser(newUserInformation);
          history.replace(from);
          updateUserName(user.name);
        })
        .catch((error) => {
          const newUserInformation = { ...user };
          newUserInformation.error = error.message;
          newUserInformation.success = false;
          setUser(newUserInformation);
        });
    }
    // user login using firebase Auth
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((response) => {
          const newUserInfo = { ...user };
          newUserInfo.error = " ";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          // PrivateRoute
          history.replace(from);
          // console.log("Sign in user info:", response.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    // prevent browser from auto loading
    event.preventDefault();
  };

  // Adding user-name in firebase Auth when new-user create
  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
        console.log("User name updated successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
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
            placeholder="Password"
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
          <button className="button" onClick={handleFacebookSignIn}>
            <img src={facebook} className="facebookImage" /> Continue with
            Facebook
          </button>
          <br />
          <button className="button" onClick={handleGoogleSignIn}>
            <img src={google} className="googleImage" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
