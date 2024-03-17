import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return <div>ProfilePage</div>;
};

export default ProfilePage;
