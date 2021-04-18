import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


// firebase.initializeApp(firebaseConfig);

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
}


export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
        
        const credential = result.credential;
        const token = credential.accessToken;
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        storeAuthToken();
        return signedInUser;
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
}

const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function(error) {
        // Handle error
      });
}