import { useState } from "react";
import { Balance } from "../components/Balance";
import { Card } from "../components/Card";
import { consulta, consultaLogin } from "../helpers/consulta";

export const BalancePage = () => {
  const [user] = useState(consulta());
  const [login] = useState(consultaLogin());

  return <>{login ? <Balance user={user}></Balance> 
  :
  
  <Card
  bgcolor="light"
    txtcolor="color"
    header="Deposit"
    status={status}
    body="Debes hacer login antes de usar esta opción"
  />}</>;
};
