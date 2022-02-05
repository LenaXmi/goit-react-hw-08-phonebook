import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {isLoggedIn && (
        <>
          <NavLink to="/contacts">My contacts</NavLink>
          <NavLink to="/add">New contact</NavLink>
        </>
      )}
    </nav>
  );
}
export default Navigation;
