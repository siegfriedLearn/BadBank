import { useState, useEffect } from "react";

import { consultarBalance } from '../helpers/db'
import { consulta, consultaLogin } from "../helpers/consulta";
import { Card } from "../components/Card";

const token = localStorage.getItem("token");

export const AllData = () => {


  const [user, setUser] = useState(consulta());
  const [login] = useState(consultaLogin());

  useEffect(()=>{
    const informacion = async ()=>{

      const resp = await consultarBalance(token);
      const usuario = await consulta();
      usuario.balance = resp.balance;
      usuario.transacciones = resp.transacciones
      setUser(usuario);
      
     }
      informacion()
   }, []);

  //console.log(info)
  return (
    <>
      {login ? (
        <div>
          <Card
            bgcolor="light"
            txtcolor="color"
            header="Información de cuenta"
            body={
              <div className="d-flex justify-content-center">
                <table
                  className="table table-bordered" /*hidden={hiddenTable}*/
                >
                  <tbody>
                    <tr>
                      <td>Nombre: </td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Correo: </td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Balance: </td>
                      <td>{user.balance}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
            
          />
          <Card
            bgcolor="light"
            txtcolor="color"
            header="Movimientos"
            body={
              <div className="d-flex justify-content-center">
                <table
                  className="table table-bordered" /*hidden={hiddenTable}*/
                >
                  <thead>
                    <tr>
                      <th scope="col">Tipo</th>
                      <th scope="col">Valor</th>
                      <th scope="col">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    user.transacciones?.map((transaccion) => (
                      <tr key={transaccion.fecha}>
                        <td>{transaccion.tipo || ""}</td>
                        <td>{transaccion.value || ""}</td>
                        <td>{transaccion.fecha || ""}</td>
                      </tr>
                    ))
                    //JSON.stringify(user.transacciones)
                    }
                  </tbody>
                </table>
              </div>
            }
          />
        </div>
      ) : (
        <Card
          bgcolor="light"
          txtcolor="color"
          header="Histórico"
          body="Debes hacer login antes de usar esta opción"
        />
      )}
    </>
  );
};
