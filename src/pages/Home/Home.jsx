import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
export const Home = () => {
  const navigate = useNavigate()
  const { userState: { loginStatus } } = useAuth()
  return (
    <section className="hero flex-row justify-center flex-wrap">
      <img className="hero-banner" src="assets/banner.png" />
      <div className="hero-desc align-center flex-column">
        <p className="desc-heading">Pencil</p>
        <div className="flex-column desc-subtext-wrapper">
          <p className="desc-subtext">Pencil is a fully-functional note taking app</p>
          <p className="desc-subtext">Keep a track of your tasks and level up your note-taking with Pencil</p>
        </div>
        <button onClick={() => {
          if (!loginStatus) {
            navigate("/signup")
          } else {
            navigate("/notes")
          }
        }} className="btn-join">{loginStatus ? "Go to notes" : "Join now"}</button>
      </div>
    </section>
  );
};
