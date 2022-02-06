import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  text-align: center;
`;

export const Link = styled(NavLink)`
  font-size: 22px;
  color: #777;
  display: block;
  padding: 32px 10px;

  &.active {
    color: #7b68ee;
  }
  &:hover {
    color: #7b68ee;
  }
`;
