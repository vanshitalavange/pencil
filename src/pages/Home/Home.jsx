import "./Home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <section className="hero flex-row justify-center flex-wrap">
      <img className="hero-banner" src="assets/banner.png" />
      <div className="hero-desc align-center flex-column">
        <p className="desc-heading">Pencil</p>
        <div className="flex-column desc-subtext-wrapper">
          <p className="desc-subtext">Pencil is a fully-functional note taking app</p>
          <p className="desc-subtext">Keep a track of your tasks and level up your note-taking with Pencil</p>
        </div>
        <Link to="/signup"><button className="btn-join">Join now</button></Link>
      </div>
    </section>
  );
};
