import React, { useState } from "react";
import User from "./User";
import { useUser } from "../../context/AuthProvider";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const UsersList = ({ removeUser }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h3 style={{ textAlign: "center", padding: "20px" }}>Users List</h3>
      {isEditing && (
        <div className="edit-container">
          <form action="" onSubmit={""}>
            <div>
              <div>
                <label htmlFor="">name:</label>
                <input type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="text" name="" id="password" />
              </div>
            </div>
          </form>
        </div>
      )}
      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* tbody */}
        <User removeUser={removeUser} />
      </table>
    </div>
  );
};

export default UsersList;
