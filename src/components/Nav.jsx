import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Bad Bank
        </Link>
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
              className="nav-link active"
              aria-current="page"
              to={"/createaccount"}
            >
              Create Account
            </Link>
            <Link className="nav-link active" aria-current="page" to={"/login"}>
              Login
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/deposit"}
            >
              Deposit
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/withdraw"}
            >
              Withdraw
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/balance"}
            >
              Balance
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/alldata"}
            >
              All Data
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
