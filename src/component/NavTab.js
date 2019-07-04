import React from "react"
import {NavLink} from 'react-router-dom'
const NavTab=props=>{
let activeStyle={
    color: "green",
    fontWeight: "bold",
    backgroundColor:"red",
  };

  let navStyle = {
    margin: "10px"
  };
return(
    <NavLink style={navStyle} activeStyle={activeStyle} to={props.to} >{props.label}</NavLink>
);
};
export default NavTab;