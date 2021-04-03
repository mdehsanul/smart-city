import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

// initialize firebase
export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

// google validation
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = {
        isSignin: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      return signedInUser;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(errorCode, errorMessage, email);
    });
};

// facebook validation
export const handleFacebookSignIn = () => {
  const facebookprovider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(facebookprovider)
    .then((result) => {
      var user = result.user;
      user.success = true;
      return user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// create new user, using firebase Auth
export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      const newUserInformation = result.user;
      newUserInformation.error = "";
      newUserInformation.success = true;
      updateUserName(name);
      return newUserInformation;
    })
    .catch((error) => {
      const newUserInformation = {};
      newUserInformation.error = error.message;
      newUserInformation.success = false;
      return newUserInformation;
    });
};

// user login using firebase Auth
export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      const newUserInfo = response.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
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
