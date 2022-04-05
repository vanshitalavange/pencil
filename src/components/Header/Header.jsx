import "./Header.css";
import { Link, NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <header className="flex-row flex-wrap">
      <Link to="/"><div className="header-hero flex-row">
        <img className="hero-logo" src="assets/logo.png" alt="pencil" />
        <h1 className="hero-heading align-center">Pencil</h1>
      </div></Link>
      <div className="nav ml-auto flex-row align-center flex-wrap">
        <NavLink to="/login"><button className="nav-btn btn-login">
          Login
        </button></NavLink>
        <NavLink to="/signup"><button className="nav-btn btn-signup">
          Signup
        </button></NavLink>
      </div>
    </header>
  );
};
