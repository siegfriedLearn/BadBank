import { Card } from "../components/Card";


export const Balance = ({user}) => {

  //const [user, setUser] = useState(info);
  

  return (
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Balance"
      title="This is your account balance"
      text="Info"
      body={
        <>
          {user && <p>Name: {user.name}</p>}
          {user && <p>Balance: {user.balance}</p>}
        </>
      }
    />
  );
};
