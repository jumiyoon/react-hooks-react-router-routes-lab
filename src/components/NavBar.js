import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "hotpink",
    textDecoration: "none",
    color: "white",
  };

  return (
  <div className="navbar">
    <NavLink
      to="/"
      exact
      style={linkStyles}
      activeStyle={{
        background: "lightpink"
      }}
      >
        Home
    </NavLink>
    <NavLink
      to="/movies"
      exact
      style={linkStyles}
      activeStyle={{
        background: "lightpink"
      }}
      >
        Movies
    </NavLink>
    <NavLink
      to="/directors"
      exact
      style={linkStyles}
      activeStyle={{
        background: "lightpink"
      }}
      >
      Directors 
    </NavLink>
    <NavLink
      to="/actors"
      exact
      style={linkStyles}
      activeStyle={{
        background: "lightpink"
      }}
      >
        Actors
    </NavLink>
  </div>
  );
}

export default NavBar;
