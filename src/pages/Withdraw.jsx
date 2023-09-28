import { useState } from "react";
import Swal from 'sweetalert2';
import { Card } from "../components/Card";
import { Balance } from "../components/Balance";
import { consulta, consultaLogin } from '../helpers/consulta'


export const Withdraw = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [retiro, setRetiro] = useState("");
  const [total, setTotal] = useState("");
  const [user, setUser] = useState(consulta());
  const [login, setLogin] = useState(consultaLogin());

  
console.log(login);

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
    if (!validate(retiro, "retiro")) return;
    const user = JSON.parse(localStorage.getItem("user"));
    let total = parseInt(user.balance)- parseInt(retiro);
    if (total<0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puedes tener un salgo negativo',
        footer: `No puedes retirar más de ${user.balance}`
      })
      return;
    }
    user.balance = total;
    localStorage.setItem('user', JSON.stringify(user));
    setUser(consulta());
    setShow(false);
  }

  function clearForm() {
    setRetiro("");
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
      header="Retiro"
      status={status}
      body={
        show ? (
          <>
            Retiro
            <br />
            <input
              type="number"
              className="form-control"
              id="retiro"
              placeholder="Ingresa el monto del retiro"
              value={retiro}
              onChange={(e) => setRetiro(e.currentTarget.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-success mt-3"
              onClick={handleCreate}
              disabled = {retiro == ""}
            >
              Retiro
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-primary" onClick={clearForm}>
              Retirar más
            </button>
          </>
        )
      }
    />
    </div> : 
    <Card
    bgcolor="light"
      txtcolor="color"
      header="Retiro"
      status={status}
      body="Debes hacer login antes de usar esta opción"
    />}

    
 </>
  )
}