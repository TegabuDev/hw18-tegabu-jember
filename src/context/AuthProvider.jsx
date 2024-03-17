import React, { useRef } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { storageService } from "../services/storageService";
import { userService } from "../services/userService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [customAlert, setCustomAlert] = useState(null);

  const timerRef = useRef(null);

  const showAlert = (type) => {
    setCustomAlert({
      text: "user not found",
      type,
    });
  };

  useEffect(() => {
    //clear timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    //start timer after one sec
    timerRef.current = setTimeout(() => {
      setCustomAlert(null);
    }, 2000);
  }, [customAlert]);

  useEffect(() => {
    const existUser = storageService.getLoggedInUser();
    if (existUser) {
      setUser(existUser);
    }
  }, []);

  const handleRegister = (newUser) => {
    const res = userService.createUser(newUser);
    if (!res) return;

    navigate("/login");
  };

  const handleLogin = (username, password) => {
    const user = userService.login(username, password);
    if (!user) {
      // alert("User not found");
      showAlert("danger");
      // navigate("/signup");
    }
    setUser(user);
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
    navigate("/login");
  };

  const users = userService.allUsers();

  const removeUser = (userId) => {
    const updatedUser = users.filter((user) => user.id !== userId);
    return storageService.saveUsers(updatedUser);
  };

  const value = {
    users,
    user,
    removeUser,
    handleLogin,
    handleRegister,
    handleLogout,
    customAlert,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUser = () => useContext(AuthContext);
