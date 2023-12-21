import { useState, useEffect } from "react";

import { consultarBalance } from '../helpers/db'
import { consulta, consultaLogin } from "../helpers/consulta";
import { Card } from "../components/Card";

const token = localStorage.getItem("token");

export const AllData = () => {
  const [user] = useState(consulta());
  const [info, setInfo] = useState('');
  const [login] = useState(consultaLogin());


  useEffect(()=>{
    async function info(){
      const resp = await consultarBalance(token);
      setInfo(resp);
    }
    info()
  }, []);

  const {transacciones} = info;
  const newArray = [transacciones]

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
                      <td>{info.balance}</td>
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
                    // newArray.map((transaccion) => (
                      // console.log(transaccion.[])
                      // <tr key={transaccion.fecha}>
                      //   <td>{transaccion.tipo || ""}</td>
                      //   <td>{transaccion.value || ""}</td>
                      //   <td>{transaccion.fecha || ""}</td>
                      // </tr>
                    // ))
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
