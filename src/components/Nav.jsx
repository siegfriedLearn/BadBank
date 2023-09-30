import { useState } from "react";
import { Link, redirect } from "react-router-dom";

import { consulta, consultaLogin } from "../helpers/consulta";

export const Nav = () => {
  const [login, setLogin] = useState(consultaLogin());

  function handleLogout(){
    localStorage.removeItem('login');
    setLogin(consultaLogin());
    window.location.href = "./login";
  }

  return (
    //
    <nav
      className="navbar navbar-expand-lg fw-bolder"
      style={{ background: "#8F7FE8" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link"
              // aria-current="page"
              to={"/BadBank/"}
            >
              Bad Bank
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to={"/BadBank/createaccount"}
            >
              Create Account
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to={"/BadBank/login"}
            >
              Login
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to={"/BadBank/deposit"}
            >
              Deposit
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to={"/BadBank/withdraw"}
            >
              Withdraw
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to={"/BadBank/balance"}
            >
              Balance
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to={"/BadBank/alldata"}
            >
              All Data
            </Link>
          </div>
          
            
          
        </div>
        {/* {login ? <a className="nav-link" type="submit" onClick={ handleLogout }>
              Logout
            </a> : null} */}
      </div>
    </nav>
  );
};
