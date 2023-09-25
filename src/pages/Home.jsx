import { Card } from "../components/Card"


export const Home = () => { 
  
  return (
      <Card
      bgcolor="light"
      txtcolor="color"
      header="Bad Bank Home Page"
      title="Welcome to the Bad Bank"
      text="You can use this bank"
      body={<img src="../public/banco.png" className="card-img-top" alt="" ></img>}
    />
    
  )
}
