import { useState } from "react";
import Swal from "sweetalert2";
import { Card } from "../components/Card";
import { consulta, consultaLogin } from "../helpers/consulta";

export const Login = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(consulta());
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

  function handleLogin() {
    //event.preventDefault()    //console.log(name, email, password);
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if(user.email === email && user.password == password ){
      // Swal.fire(
      //   'Muy bien!',
      //   'Te has logeado correctamente!',
      //   'success'
      // )
      setUser(consulta());
      localStorage.setItem("login", JSON.stringify('ok'));
      return;
    } else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Datos incorrectos`,
        footer: "Revisa tu correo y tu contraseña",
      });
      
    }
    
    
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
            user ? (
              <form onSubmit={handleLogin}>
                {email ? (
                  <>Email</>
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
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
                <br />
                {password.length > 7 ? (
                  <>Password</>
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
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-success mt-3"
                  disabled={ email == "" || password.length < 8}
                >
                  Login
                </button>
                <br />
              </form>
            ) : (
              <>
                <h5>No se ha creado ningún usuario, por favor registrate antes de hacer login</h5>
              </>
            )
          }
        />
      ) : (
        <Card
          bgcolor="light"
          txtcolor="color"
          header="Deposit"
          status={status}
          body="Login ok"
        />
      )}
    </>
  );
};
