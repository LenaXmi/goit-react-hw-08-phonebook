import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => (
  <nav>
    <NavLink to="/" >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
  
     
    >
      My contacts
        </NavLink>
           <NavLink
      to="/add"
  
   
    >
      New contact
    </NavLink>
  </nav>
);

export default Navigation;