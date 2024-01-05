import { getDatabase, ref, set } from "firebase/database";

import { urlBase } from "../api/api.js";



//Crear registro usuario bd 
export function writeUserData(uid, balance) {
    const db = getDatabase();
    set(ref(db, 'users/' + uid), {
        balance: balance,
        transacciones: []
    });
  }

  export const consultarBalance = async ( token ) => {
    const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": token
        },
      };

     const data = await fetch(`${urlBase}/api/history/balance`, options)
     const resp = await data.json();
    
     console.log(resp)
    return resp;
  };

  export const cambiarBalance = async ( token, balance, tipo, valor ) => {
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": token
        },
        body: JSON.stringify({balance, tipo, valor})
      };

     const data = await fetch(`${urlBase}/api/history/balance`, options)
     const resp = await data.json();
    
     //console.log(resp.history)
    return resp.history;
  };


  export const envio = async ( email, valor, personaQueEnvia, token ) => {
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": token
        },
        body: JSON.stringify({email, valor, personaQueEnvia})
      };
  
     const data = await fetch(`${urlBase}/api/history/transfer`, options)
     const resp = await data.json();
    
     //console.log(resp.history)
    return resp;
  };