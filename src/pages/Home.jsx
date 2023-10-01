import { Card } from "../components/Card"
import { consulta, consultaLogin } from '../helpers/consulta'

export const Home = () => { 
  const [user, setUser] = useState(consulta());
  const [login, setLogin] = useState(consultaLogin());

  return (
      <Card
      bgcolor="light"
      txtcolor="color"
      header="Bad Bank"
      title={ login ? `Bienvenido a Bad Bank ${user.name}`: `Bienvenido a Bad Bank` }
      text="Una vez registrado te regalamos $100"
      body={<img src="./banco.png" className="card-img-top" alt="" ></img>}
    />
    
  )
}
