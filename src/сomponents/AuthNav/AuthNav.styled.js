import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;


`
export const Item = styled.li`

`
export const Link = styled(NavLink)`
 font-size: 22px;
    color: #777;
       display: block;
padding:32px 10px;
&.active{
     color:#7B68EE;
}
   &:hover{
       color:#7B68EE;
   
       
   }
`