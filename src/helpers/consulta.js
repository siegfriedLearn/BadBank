//import { app } from "../Firebase/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";



export function consulta(){
const user = JSON.parse(localStorage.getItem("user"));
return user;
}

export function consultaLogin(){
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/auth.user
    //       const uid = user.uid;
    //       console.log(uid)
    //       return true;
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    //   });

    const login = localStorage.getItem("token");
    if (!login) {
        return false
    }
    return true;
}

