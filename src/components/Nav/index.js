
import "./style.css";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
//   NavBtn,
//   NavBtnLink,
} from "./NavbarElements";

import React from "react";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/portfolio" activeStyle>
                    Portfolio
                </NavLink>
                {/* <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn> */}
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;