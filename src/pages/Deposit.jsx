import { useContext, useState } from "react";
import { UserContext } from "../main";
import { Card } from "../components/Card";
import { Balance } from "../components/Balance";

export const Deposit = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [deposit, setDeposit] = useState("");
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(`Error ${label}`);
      setTimeout(() => setStatus("", 3000));
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(deposit);
    if (!validate(deposit, "deposit")) return;
    console.log(ctx);
    //ctx.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setDeposit("");
    setShow(true);
  }


  return (
    <>
    <Balance></Balance>
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Deposit"
      status={status}
      body={
        show ? (
          <form>
            Deposit
            <br />
            <input
              type="number"
              className="form-control"
              id="deposit"
              placeholder="Enter deposit"
              value={name}
              onChange={(e) => setDeposit(e.currentTarget.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-success mt-3"
              onClick={handleCreate}
              disabled = {deposit == ""}
            >
              Deposit
            </button>
            <br />
          </form>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-primary" onClick={clearForm}>
              Add more
            </button>
          </>
        )
      }
    />
    </>
  )
}