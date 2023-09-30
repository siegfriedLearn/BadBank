import { Card } from "../components/Card"


export const Home = () => { 
  
  return (
      <Card
      bgcolor="light"
      txtcolor="color"
      header="Bad Bank"
      title="Bienvenido a Bad Bank"
      text="Una vez registrado te regalamos $100"
      body={<img src="./banco.png" className="card-img-top" alt="" ></img>}
    />
    
  )
}
