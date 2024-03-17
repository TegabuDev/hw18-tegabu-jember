import React, { useState } from "react";
import Button from "../Button";
import { useUser } from "../../context/AuthProvider";

// { user, removeUser, editUser, isEditing, setIsEditing }

const User = ({ removeUser }) => {
  const { users } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td className="td-action">
            <p>
              <Button
                onClick={() => removeUser(user.id)}
                className="btn-danger"
                content="Remove"
              />
            </p>
            <p>
              <Button
                content={isEditing ? "save" : "Edit"}
                onClick={() => setIsEditing(!isEditing)}
                className="btn-edit"
              ></Button>
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default User;

// <tbody>
// {users.map((user, index) => (
//   <User
//     user={user}
//     key={index}
//     // removeUser={removeUser}
//     // editUser={editUser}
//     isEditing={isEditing}
//     setIsEditing={setIsEditing}
//   />
// ))}
// </tbody>
