import { Card } from "../components/Card";


export const Balance = ({user}) => {

  //const [user, setUser] = useState(info);

  //console.log(user)
  

  return (
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Balance"
      title="Este es el balance de tu cuenta"
      text="Info"
      body={
        <>
          {user && <p>Nombre: {user.name}</p>}
          {user && <p>Balance: ${user.balance}</p>}
        </>
      }
    />
  );
};
