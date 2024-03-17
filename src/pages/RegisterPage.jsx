import React, { useRef, useEffect } from "react";
import Button from "../components/Button";
import { useUser } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { handleRegister, user } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  const onSubmit = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!username.trim() || !password.trim() || !email.trim()) return;

    const newUser = { username, email, password };

    handleRegister(newUser);
  };

  return (
    <div className="register-body-container">
      <div className="register-container">
        <h1>Sign up</h1>
        <form onSubmit={onSubmit}>
          <input
            id="registerUsername"
            type="text"
            ref={userNameRef}
            placeholder="Username"
            required
          />
          <input
            id="registerEmail"
            type="email"
            ref={emailRef}
            placeholder="Email"
            required
          />
          <input
            id="registerPassword"
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <Button className="register-btn" content="Signup" />
        </form>
        <div className="auth-switch">
          <p>
            Already have an account?
            <button onClick={() => navigate("/login")}>Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
