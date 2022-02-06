import React from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { Nav, List, Item, Link } from "./Navigation.styled";

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Nav>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        {isLoggedIn && (
          <>
            <Item>
              {" "}
              <Link to="/contacts">My contacts</Link>
            </Item>
            <Item>
              <Link to="/add">New contact</Link>
            </Item>
          </>
        )}
      </List>
    </Nav>
  );
}
export default Navigation;
