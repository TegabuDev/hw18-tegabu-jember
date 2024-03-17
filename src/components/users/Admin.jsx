import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";
import { useUser } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const removeUser = (userId) => {
    const allUsers = storageService.getUsers();
    const updatedUser = allUsers.filter((user) => user.id !== userId);
    return updatedUser;
  };

  return (
    <div>
      <UsersList removeUser={removeUser} />
    </div>
  );
};

export default Admin;
