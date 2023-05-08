import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { RiInboxFill, RiSpam2Fill } from "react-icons/ri";
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
          <RiInboxFill /> Inbox
        </NavLink>
        <NavLink style={getActiveStyles} className="link" to={"/spam"}>
          <RiSpam2Fill /> Spam
        </NavLink>
        <NavLink style={getActiveStyles} className="link" to={"/trash"}>
          <FaTrashAlt /> Trash
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavigation;
