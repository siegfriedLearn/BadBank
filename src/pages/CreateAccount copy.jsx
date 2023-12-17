import { useState } from "react";
import Swal from 'sweetalert2';
import { Card } from "../components/Card";
import { consulta } from '../helpers/consulta'

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
        icon: 'error',
        title: 'Oops...',
        text: `El campo ${label} es obligatorio`,
        footer: 'Completa el formulario e intenta nuevamente'
      })
      return false;
    }
    return true;
  }

  function handleCreate() {
    
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    const user = {name, email, password, balance: 100,transacciones:[]};
    localStorage.setItem('user', JSON.stringify(user));
    setShow(false);
  }

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
          <form onSubmit={handleCreate}>
            { name ? <>Nombre</> :<div style={{color:"purple"}}>Debes completar el campo nombre</div>}
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
            { email ? <>Correo</> :<div style={{color:"purple"}}>Debes completar el campo correo</div>}
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
            { password.length > 7 ? <>Contraseña</> :<div style={{color:"purple"}}>Tu contraseña debe contener al menos 8 caracteres</div>}
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
              disabled = {name == "" || email == "" || password.length < 8}
            >
              Crear Cuenta
            </button>
            <br />
          </form>
        ) : (
          <>
            <h5>Exitoso</h5>
            <button type="submit" className="btn btn-primary" onClick={clearForm}>
              Agregar otra cuenta
            </button>
          </>
        )
      }
    />
  );
};
