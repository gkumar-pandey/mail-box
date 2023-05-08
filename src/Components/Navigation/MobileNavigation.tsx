import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  const getActiveStyles = ({ isActive }: any) => ({
    backgroundColor: isActive ? "#f00a4f" : "#fff",
    color: isActive ? "#fff" : "#f00a4f"
  });
  return (
    <div className="mobile-navigation">
      <div className="nav-tab">
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

export default MobileNavigation;
