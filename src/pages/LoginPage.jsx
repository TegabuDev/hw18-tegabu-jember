import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";
import Button from "../components/Button";
import Alert from "../components/Alert";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleLogin, user } = useUser();

  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="login-body-container">
      <div className="back">
        <div className="login-container">
          <h1>Login page</h1>
          <form onSubmit={handleSubmit}>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Alert />
            <Button className="login-btn" content="Login" />
          </form>
          <div className="auth-switch">
            <p>
              Don't have an account?{" "}
              <button onClick={() => navigate("/signup")}>Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
