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

export const handlePasswordSignUp = (name, email, password) => {
  //console.log(name, email, password);
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      let user = userCredential.user;
      updateUsername(name)
      //console.log(user);
      return user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
}

export const passwordSignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const {displayName, email} = userCredential.user;
    const signedInUser = {name: displayName, email};
    //console.log(signedInUser);
    storeAuthToken();
    return signedInUser;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

export const handleSignOut = () => {
  return firebase.auth().signOut()
  .then(response => {
    const signedInUser = {
      name: '',
      email: ''
    };
    sessionStorage.setItem('token', '');
    return signedInUser;
  })
}

const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function(error) {
        // Handle error
      });
}

const updateUsername = (name) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name
  })
  .then(response => {
    console.log("user name updated");
  })
  .catch(error => {
    console.log("There is an error", error);
  })
}