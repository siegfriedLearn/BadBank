import { useState } from "react";
import { Formik, Field, Form } from 'formik';
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
    const user = {name, email, password, balance: 100};
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
      header="Create Account"
      status={status}
      body={
        show ? (
          <form onSubmit={handleCreate}>
            { name ? <>Name</> :<div style={{color:"purple"}}>Debes completar el campo nombre</div>}
            <br />
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />
            <br />
            { email ? <>Email</> :<div style={{color:"purple"}}>Debes completar el correo</div>}
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
            { password.length > 7 ? <>Password</> :<div style={{color:"purple"}}>Tu contraseña debe contener al menos 8 caracteres</div>}
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
              //onClick={handleCreate}
              disabled = {name == "" || email == "" || password.length < 7}
            >
              Create Account
            </button>
            <br />
          </form>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-primary" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
};
