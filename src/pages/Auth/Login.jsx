import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/index"
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import { getFormInput } from "../../utils/getFormInput";
import { loginService } from "../../services/index";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { setUserState } = useAuth();

  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorAlert, setErrorAlert] = useState("display-none");

  const guestCredentials = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const submitLoginForm = (event) => {
    event.preventDefault();
    loginService(loginCredentials, setUserState, navigate, setErrorAlert);
  };

  return <section className="login flex-col-center">
    <h2 className="form-title">Sign in</h2>
    <form onSubmit={submitLoginForm} className="login-form flex-column">
      <div className="input-field-wrapper flex-column">
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => getFormInput(event, setLoginCredentials)}
          id="email"
          className="form-input"
          name="email"
          type="email"
          placeholder="user@example.com"
          value={loginCredentials.email}
          required
        />
      </div>
      <div className="input-field-wrapper flex-column">
        <label htmlFor="password">Password</label>
        <div className="input-box flex-row">
          <input
            onChange={(event) => getFormInput(event, setLoginCredentials)}
            id="password"
            className="form-input"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={loginCredentials.password}
            required
          />
          {!showPassword ? (
            <AiFillEye
              size={25}
              className="align-center"
              onClick={() => {
                setShowPassword(true);
              }}
            />
          ) : (
            <AiOutlineEyeInvisible
              size={25}
              className="align-center"
              onClick={() => {
                setShowPassword(false);
              }}
            />
          )}
        </div>
      </div>
      <div
        type="submit"
        className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-primary"
      >
        <span className="material-icons btn-icon"> east </span>
        <button className="icon-btn icon-btn-logout">Sign in</button>
      </div>
    </form>
    <div
      onClick={() => {
        setLoginCredentials({ email: "adarshbalika@gmail.com", password: "adarshbalika" });
        loginService(guestCredentials, setUserState, navigate, setErrorAlert)
        setShowPassword(false)
      }
      }
      className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-secondary"
    >
      <span className="material-icons btn-icon"> east </span>
      <button className="icon-btn icon-btn-logout">Sign in as a Guest</button>
    </div>
    <p className="msg">
      Don't have an account?{" "}
      <Link to="/signup" className="link-to-option">
        Signup here
      </Link>
    </p>
    {/* alert for unsuccessful login */}
    <div className={errorAlert}>
      <span className="material-icons-round alert-icon danger-icon">
        {" "}
        dangerous{" "}
      </span>
      <p className="alert-msg">Your email is not registered</p>
      <span
        onClick={() => setErrorAlert("display-none")}
        className="material-icons ml-auto"
      >
        {" "}
        close{" "}
      </span>
    </div>
  </section>;
};
