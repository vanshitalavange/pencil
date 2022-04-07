import "./Header.css";
import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../../contexts";
import { logoutService } from "../../services";
import react from "react";
export const Header = () => {
  const { userState: { loginStatus, firstName }, setUserState } = useAuth()
  return (
    <header className="flex-row flex-wrap">
      <Link to="/"><div className="header-hero flex-row">
        <img className="hero-logo" src="assets/logo.png" alt="pencil" />
        <h1 className="hero-heading align-center">Pencil</h1>
      </div></Link>
      {!loginStatus ? <div className="nav ml-auto flex-row align-center flex-wrap">
        <NavLink to="/login"><button className="nav-btn btn-login">
          Login
        </button></NavLink>
        <NavLink to="/signup"><button className="nav-btn btn-signup">
          Signup
        </button></NavLink>
      </div> : <div className="nav ml-auto flex-row align-center flex-wrap"><p className="user-name">Hi, {firstName === "" ? "Adarsh" : firstName}</p> <button
        onClick={() => logoutService(setUserState)}
        className="btn-logout display-none"
        style={{ display: loginStatus ? "block" : "none" }}
      >
        Logout
      </button>
      </div>}
    </header>
  );
};
