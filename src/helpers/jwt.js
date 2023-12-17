import { urlBase } from "../api/api.js";

export const createToken = async (uid) => {

    const info = {uid}
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
      };

     const data = await fetch(`${urlBase}/api/auth/login`, options)
     const resp = await data.json();
    
    return resp.token;
        
  }