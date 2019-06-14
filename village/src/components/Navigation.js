import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <h1>Smurf Village</h1>

      <div>
        <NavLink to="/" activeClassName="selected">
          Smurfs
        </NavLink>
        <NavLink to="/smurf-form" activeClassName="selected">
          Add Smurf
        </NavLink>
      </div>
    </nav>
  );
}
