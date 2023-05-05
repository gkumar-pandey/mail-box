import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const getActiveStyles = ({ isActive }: any) => ({
    backgroundColor: isActive ? "green" : ""
  });

  return (
    <div className="nav-bar">
      <div className="nav-bar-wrapper">
        <h2>QMail</h2>
      </div>
      <div className="nav-link">
        <NavLink style={getActiveStyles} to={"/"} className={"link"}>
          Inbox
        </NavLink>
        <NavLink style={getActiveStyles} className="link" to={"/spam"}>
          Spam
        </NavLink>
        <NavLink style={getActiveStyles} className="link" to={"/trash"}>
          Trash
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
