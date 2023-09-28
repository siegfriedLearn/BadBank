import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info-subtle">
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
            <Link className="nav-link" aria-current="page" to={"/BadBank/"}>
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
      </div>
    </nav>
  );
};
