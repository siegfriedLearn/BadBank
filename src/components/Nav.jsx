import { useState } from "react";
import { Link, redirect } from "react-router-dom";

import { consulta, consultaLogin } from "../helpers/consulta";

export const Nav = () => {
  const [user] = useState(consulta());
  const [login, setLogin] = useState(consultaLogin());

  function handleLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLogin(consultaLogin());
    window.location.href = "#/login";
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
              className="nav-link sombra"
              // aria-current="page"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="nav-link sombra"
              aria-current="page"
              to={"/createaccount"}
            >
              Crear cuenta
            </Link>
            <Link className="nav-link sombra" aria-current="page" to={"/login"}>
              Inicar sesión
            </Link>
            <Link
              className="nav-link sombra"
              aria-current="page"
              to={"/deposit"}
            >
              Depositar
            </Link>
            <Link
              className="nav-link sombra"
              aria-current="page"
              to={"/withdraw"}
            >
              Retirar
            </Link>
            {/* <Link
              className="nav-link"
              aria-current="page"
              to={"/BadBank/balance"}
            >
              Balance
            </Link> */}
            <Link
              className="nav-link sombra"
              aria-current="page"
              to={"/alldata"}
            >
              Información de cuenta
            </Link>
          </div>
        </div>
        {login ? (
          <div>
            {user.name}
            <a className="nav-link sombra" type="submit" onClick={handleLogout}>
              Logout
            </a>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
