//import { app } from "../Firebase/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export function consulta() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
}

export function consultaLogin() {
  const login = localStorage.getItem("token");
  if (!login) {
    return false;
  }
  return true;
}
