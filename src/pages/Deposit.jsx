import { useState } from "react";
import Swal from 'sweetalert2';
import { Card } from "../components/Card";
import { Balance } from "../components/Balance";
import { consulta, consultaLogin } from '../helpers/consulta'


export const Deposit = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [deposit, setDeposit] = useState("");
  const [user, setUser] = useState(consulta());
  const [login, setLogin] = useState(consultaLogin());
  
//console.log(login);

  function validate(field, label) {
    if (!field) {
      setStatus(`Error ${label}`);
      setTimeout(() => setStatus("", 3000));
      return false;
    }
    if(field<0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puedes depositar una cantidad negativa',
        footer: 'Intenta ingresando una cantidad mayor a 0'
      })
      return false;
    }
    // if(){}
    return true;
  }

  function handleCreate() {
    if (!validate(deposit, "deposit")) return;
    const user = JSON.parse(localStorage.getItem("user"));
    let newBalance = parseInt(user.balance)+ parseInt(deposit);
    user.balance = newBalance;
    user.transacciones.push({tipo:"Deposito", value: deposit, fecha: new Date()});
    localStorage.setItem('user', JSON.stringify(user));
    setUser(consulta());
    setShow(false);
  }

  function clearForm() {
    setDeposit("");
    setShow(true);
  }


  return (
    <>
    {login ?    
     <div>
    <Balance user={user}></Balance>
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Deposito"
      status={status}
      body={
        show ? (
          <>
            Deposito
            <br />
            <input
              type="number"
              className="form-control"
              id="deposit"
              placeholder="Ingresa el valor que deseas depositar"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-success mt-3"
              onClick={handleCreate}
              disabled = {deposit == ""}
            >
              Deposito
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Deposito exitoso</h5>
            <button type="submit" className="btn btn-primary" onClick={clearForm}>
              Agregar más
            </button>
          </>
        )
      }
    />
    </div> : 
    <Card
    bgcolor="light"
      txtcolor="color"
      header="Deposit"
      status={status}
      body="Debes hacer login antes de usar esta opción"
    />}

    
 </>
  )
}