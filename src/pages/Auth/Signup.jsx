import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import { getFormInput } from "../../utils/getFormInput";
import { signupService } from "../../services";
export const Signup = () => {
  const navigate = useNavigate();

  const { setUserState } = useAuth();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [helperMsg, setHelperMsg] = useState("");
  const [newUserDetails, setNewUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isPasswordMatchedChecker = (event) => {
    const confirmPassword = event.target.value;
    if (newUserDetails.password !== "") {
      if (confirmPassword === newUserDetails.password) {
        setHelperMsg("Passwords matched 😃");
        getFormInput(event, setNewUserDetails);
      } else {
        setHelperMsg("Passwords don't match 😞");
      }
    }
  };

  const submitSignupForm = (event) => {
    event.preventDefault();
    if (helperMsg === "Passwords matched 😃") {
      signupService(newUserDetails, navigate, setUserState);
    }
  };

  return (
    <section className="signup flex-col-center">
      <h2 className="form-title">Sign up</h2>
      <form onSubmit={submitSignupForm} className="signup-form flex-column">
        <div className="input-field-wrapper flex-column">
          <label htmlFor="first-name">First Name</label>
          <input
            onChange={(event) => getFormInput(event, setNewUserDetails)}
            id="first-name"
            className="form-input"
            name="firstName"
            type="text"
            placeholder="First Name"
            required
          />
        </div>
        <div className="input-field-wrapper flex-column">
          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={(event) => getFormInput(event, setNewUserDetails)}
            id="last-name"
            className="form-input"
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="input-field-wrapper flex-column">
          <label htmlFor="email">Email</label>
          <input
            onChange={(event) => getFormInput(event, setNewUserDetails)}
            id="email"
            className="form-input"
            name="email"
            type="email"
            placeholder="user@example.com"
            required
          />
        </div>
        <div className="input-field-wrapper flex-column">
          <label htmlFor="password">Password</label>
          <div className="input-box flex-row">
            <input
              onChange={(event) => {
                getFormInput(event, setNewUserDetails);
                setHelperMsg("");
              }}
              id="password"
              className="form-input"
              name="password"
              type={showPassword.password ? "text" : "password"}
              placeholder="Password"
              required
            />
            {!showPassword.password ? (
              <AiFillEye
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword({ ...showPassword, password: true });
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword({ ...showPassword, password: false });
                }}
              />
            )}
          </div>
        </div>
        <div className="input-field-wrapper flex-column">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="input-box flex-row">
            <input
              onChange={isPasswordMatchedChecker}
              id="confirm-password"
              className="form-input"
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Re-enter password"
              required
            />
            {!showPassword.confirmPassword ? (
              <AiFillEye
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword({ ...showPassword, confirmPassword: true });
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword({ ...showPassword, confirmPassword: false });
                }}
              />
            )}
          </div>
        </div>
        <p className="text-centered">{helperMsg}</p>
        <div className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-primary">
          <span className="material-icons btn-icon"> east </span>
          <button type="submit" className="icon-btn icon-btn-logout">
            Sign up
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link-to-option">
            Sign in here
          </Link>
        </p>
      </form>
    </section>
  );
};
