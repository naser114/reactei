import React from "react";
import NavTab from "./NavTab";

 const NavBar=()=>{
    let stylee={
 backgroundColor:"gray",
 height:"200px",
     };
     return(
     <div style={stylee}>
         <NavTab to="/about" label='About'></NavTab>
         <NavTab to="/projects" label='Projects'></NavTab>
         <NavTab to="/home" label='Home'></NavTab>
     </div>
     )
 }
 export default NavBar;