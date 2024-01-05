
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import { Card } from "../components/Card";
import { Balance } from "../components/Balance";
import { consulta, consultaLogin } from "../helpers/consulta";
import { consultarBalance, cambiarBalance, envio } from "../helpers/db";


const token = localStorage.getItem("token");

export const Transfer = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [retiro, setRetiro] = useState("");
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState("");
  const [user, setUser] = useState("");
  const [usuarioActual, setUsuarioActual] = useState(consulta());
  const [login, setLogin] = useState(consultaLogin());

  useEffect(() => {
    async function info() {
      const resp = await consultarBalance(token);
      const usuario = await consulta();
      usuario.balance = resp.balance;
      setUser(usuario);
    }
    info();
  }, []);

  function validate(field, label) {
    if (!field) {
      setStatus(`Error ${label}`);
      setTimeout(() => setStatus("", 3000));
      return false;
    }
    if (field < 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puedes depositar una cantidad negativa",
        footer: "Intenta ingresando una cantidad mayor a 0",
      });
      return false;
    }
    // if(){}
    return true;
  }

  

  async function handleCreate() {
 
    if (!validate(retiro, "retiro")) return;
    if (!validate(email, "email")) return;
    //const user = JSON.parse(localStorage.getItem("user"));
    let total = parseInt(user.balance) - parseInt(retiro);
    if (total < 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puedes tener un salgo negativo",
        footer: `No puedes enviar más de ${user.balance}`,
      });
      return;
    }

    if (email == usuarioActual.email ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puedes hacer envíos a tu propia cuenta",
      });
      return;
    }

     const respuestaEnvio = await envio(email, retiro, usuarioActual.email, token);
     
     if(respuestaEnvio.status != 'Ok' ){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Revisa el correo de la transferencia",
      });
      return;
     }

      const tipo = `Transferencia a ${email}`;
      let newBalance = parseInt(user.balance) - parseInt(retiro);
      cambiarBalance(token, newBalance, tipo, parseInt(retiro))
      const resp = await consultarBalance(token);
      setUser(resp);
      setShow(false);
  }

  function clearForm() {
    setRetiro("");
    setShow(true);
  }

  return (
    <>
      {login ? (
        <div>
          <Balance user={user}></Balance>
          <Card
            bgcolor="light"
            txtcolor="color"
            header="Transferencias"
            status={status}
            body={
              show ? (
                <>
                  Transferencia
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresa el email de la cuenta destino"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    required
                  />
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    id="retiro"
                    placeholder="Ingresa el monto de la transferencia"
                    value={retiro}
                    onChange={(e) => setRetiro(e.currentTarget.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-success mt-3"
                    onClick={handleCreate}
                    disabled={retiro == ""}
                  >
                    Transferir
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <h5>Envío exitoso</h5>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={clearForm}
                  >
                    Transferir más
                  </button>
                </>
              )
            }
          />
        </div>
      ) : (
        <Card
          bgcolor="light"
          txtcolor="color"
          header="Transferir"
          status={status}
          body="Debes hacer login antes de usar esta opción"
        />
      )}
    </>
  );
};
