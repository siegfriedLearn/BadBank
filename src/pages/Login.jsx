import { useState } from "react";
import Swal from "sweetalert2";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Card } from "../components/Card";
import { consultaLogin } from "../helpers/consulta";
import { createToken } from "../helpers/jwt";
import { writeUserData } from "../helpers/db";
import { consultarBalance } from '../helpers/db'


export const Login = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(consultaLogin());
  

  function validate(field, label) {
    if (!field) {
      setStatus(`Error ${label}`);
      setTimeout(() => setStatus("", 3000));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `El campo ${label} es obligatorio`,
        footer: "Completa el formulario e intenta nuevamente",
      });
      return false;
    }
    return true;
  }

  function handleLogin(event) {
    event.preventDefault(); //console.log(name, email, password);
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        

        const token = await createToken(user.uid);
        
        localStorage.setItem('token', token);
        const { displayName, email } = user
        const infoUser = {
          name: displayName,
          email
        }
        localStorage.setItem("user", JSON.stringify(infoUser));
      setLogin(consultaLogin());
      Swal.fire(
        "Muy bien!",
        "Te has logeado correctamente!",
        "Serás redirigido a la página de Balance"
      );
      //console.log(consultaLogin());
      setTimeout(() => {
        window.location.href = "/";
      }, 1300);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Datos incorrectos`,
          footer: "Revisa tu correo o tu contraseña e intentalo nuevamente",
        });
      });
  }

    const handleGoogle = async() => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
       signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          //console.log(credential)
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          //console.log(user)
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          const t = await createToken(user.uid);
        
        localStorage.setItem('token', t);
        setLogin(consultaLogin());
        const { displayName, email } = user
        const infoUser = {
          name: displayName,
          email
        }
        localStorage.setItem("user", JSON.stringify(infoUser));

        /* consultar si el usuario ya existe para no sobreescribir la info en la bd */ 
        const resp = await consultarBalance(t);
        if(resp.status==='No data available'){
          writeUserData(user.uid, 100);
        }
        
          Swal.fire(
            "Muy bien!",
            "Te has logeado correctamente!",
            "Serás redirigido a la página de Balance"
          );
          setTimeout(() => {
            window.location.href = "/";
          }, 1300);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }

  return (
    <>
      {!login ? (
        <Card
          bgcolor="light"
          txtcolor="color"
          header="Login"
          status={status}
          body={
            (
              <>
              <form onSubmit={(event) => handleLogin(event)}>
                {email ? (
                  <>Correo</>
                ) : (
                  <div style={{ color: "purple" }}>
                    Debes completar el correo
                  </div>
                )}
                <br />
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ingresa el correo"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
                <br />
                {password.length > 7 ? (
                  <>Contraseña</>
                ) : (
                  <div style={{ color: "purple" }}>
                    Tu contraseña debe contener al menos 8 caracteres
                  </div>
                )}
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Ingresa la contraseña password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-success mt-3"
                  //onClick={handleLogin}
                  disabled={email == "" || password.length < 8}
                >
                  Ingresar
                </button>
                <br />
              </form>

              <button
                  type="submit"
                  className="btn btn-success mt-3"
                  onClick={handleGoogle}
                  
                >Google</button>
              </>
              
            )
          }
        />
      ) : (
        <Card
          bgcolor="light"
          txtcolor="color"
          header="Login"
          status={status}
          body={
            <>
              <p>Ingreso correcto</p>
              <p>Puedes acceder a cualquiera de nuestras funcionalidades</p>
            </>
          }
        />
      )}
    </>
  );
};
