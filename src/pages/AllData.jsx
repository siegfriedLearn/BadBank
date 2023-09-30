import { useState } from "react";
import { consulta, consultaLogin } from "../helpers/consulta";
import { Card } from "../components/Card";

export const AllData = () => {
  const [user, setUser] = useState(consulta());
  const [login, setLogin] = useState(consultaLogin());

  return (
    <>
      {login ? (
        <Card
        bgcolor="light"
          txtcolor="color"
          header="Movimientos"
          body={
        
        <div className="d-flex justify-content-center">
        <table className="table table-bordered" /*hidden={hiddenTable}*/>
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Valor</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {user.transacciones.map((transaccion) => (
              
              <tr key={transaccion.fecha}>
                <td>{transaccion.tipo || ""}</td>
                <td>{transaccion.value || ""}</td>
                <td>{transaccion.fecha || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
      />
      ) : (
        <Card
          bgcolor="light"
          txtcolor="color"
          header="Deposit"
          body="Debes hacer login antes de usar esta opción"
        />
      )}
    </>
  );
};
