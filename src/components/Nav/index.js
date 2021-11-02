
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

// function Nav(props) {
//     const tabs = ['About', 'Portfolio', 'Contact'];
//     return (
//       <ul className="nav nav-tabs">
//         {tabs.map(tab => (
//           <li className="nav-item" key={tab}>
//             <a
//               href={'#' + tab.toLowerCase()}
//               onClick={() => props.handlePageChange(tab)}
//               className={
//                 props.currentPage === tab ? 'nav-link active' : 'nav-link'
//               }
//             >
//               {tab}
//             </a>
//           </li>
//         ))}
//       </ul>
//     );
//   }
  
//   export default Nav;



// import React from 'react';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
  
// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />
  
//         <NavMenu>
//           <NavLink to='/About' activeStyle>
//             About
//           </NavLink>
//           <NavLink to='/Portfolio' activeStyle>
//             Portfolio
//           </NavLink>
//           <NavLink to='/Contact' activeStyle>
//             Contact
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };
  
// export default Navbar;


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
                    Sign In
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