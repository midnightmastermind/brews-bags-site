import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../redux/action-creators";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authentication);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    dispatch(signUp({ email, password }, history));
  };

  return (
    <div className="cover-container">
      <div className="cover-image"></div>
      <div className="cover-box">
        <div className="cover-signup-title">Sign Up for Bags </div>
        <div className="cover-form">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {error !== null ? <div className="error">{error}</div> : null}
          <div className="cover-form-submit">
            <button
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
            <Link to="/">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
