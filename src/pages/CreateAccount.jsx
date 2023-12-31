import { useState } from "react";
import Swal from "sweetalert2";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { Card } from "../components/Card";
import { consulta } from "../helpers/consulta";
import { writeUserData } from "../helpers/db";
import { createToken } from "../helpers/jwt";
import { app } from "../Firebase/firebase";
import { consultarBalance } from "../helpers/db";

export const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  // const guardarNombre = async (user) => {
  //   await updateProfile(user, { displayName: name }).catch(
  //     (err) => console.log(err));
  // }

  async function handleCreate() {
    event.preventDefault();
    //console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    const auth = await getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await updateProfile(user, { displayName: name }).catch((err) =>
          console.log(err)
        );
        //guardarNombre(user)

        //localStorage.setItem('user', JSON.stringify(user));
        writeUserData(user.uid, 100);
        // ...
        await setShow(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        //Alertar correo ya registrado
        if (errorCode == "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Este correo ya está en uso`,
            footer: "Por favor utiliza un correo distinto",
          });
        }
      });
  }
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        const t = await createToken(user.uid);

        localStorage.setItem("token", t);
        const { displayName, email } = user;
        const infoUser = {
          name: displayName,
          email,
        };
        localStorage.setItem("user", JSON.stringify(infoUser));

        /* consultar si el usuario ya existe para no sobreescribir la info en la bd */
        const resp = await consultarBalance(t);
        if (resp.status === "No data available") {
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
  };

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Crear Cuenta"
      status={status}
      body={
        show ? (
          <>
            <form onSubmit={handleCreate}>
              {name ? (
                <>Nombre</>
              ) : (
                <div style={{ color: "purple" }}>
                  Debes completar el campo nombre
                </div>
              )}
              <br />
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                required
              />
              <br />
              {email ? (
                <>Correo</>
              ) : (
                <div style={{ color: "purple" }}>
                  Debes completar el campo correo
                </div>
              )}
              <br />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresa tu correo"
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
                placeholder="Ingresar tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-success mt-3"
                //onClick={handleCreate}
                disabled={name == "" || email == "" || password.length < 8}
              >
                Crear Cuenta
              </button>
              <br />
            </form>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleGoogle}
            >
              Ingresa con Google
            </button>
          </>
        ) : (
          <>
            <h5>Exitoso</h5>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={clearForm}
            >
              Agregar otra cuenta
            </button>
          </>
        )
      }
    />
  );
};
