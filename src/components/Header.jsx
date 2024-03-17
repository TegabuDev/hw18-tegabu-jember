import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const Header = () => {
  const { user, handleLogout } = useUser();

  if (!user)
    return (
      <header>
        <h2 className="logo">Students</h2>
      </header>
    );

  return (
    <header>
      <h1>{user.isAdmin ? "Admin" : "Students"}</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile">
              <img src="../../public/user.svg" width="50px" alt="" />
            </NavLink>
          </li>
          <li className="homeLi">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Button
              className="logout-btn"
              onClick={() => handleLogout()}
              content="Logout"
            ></Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

//   <div className="header-container">
//     <div>
//       <h1>Students</h1>
//     </div>
//     <div>
//       <div className="right-header">
//         {loggedInUser ? (
//           <>
//             <div>
//               {/* <h4>welcome: {loggedInUser.username}</h4> */}
//               <img src={loggedInUser.avatar} width="50px" alt="" />
//             </div>
//             <div>
//               <Button
//                 className="logout-btn"
//                 content="Logout"
//                 onClick={() => handleLogout()}
//               />
//             </div>
//           </>
//         ) : null}
//       </div>
//     </div>
//   </div>
