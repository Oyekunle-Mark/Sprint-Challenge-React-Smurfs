import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  background: #002a32;
  padding: 15px;

  h1 {
    font-family: 'B612 Mono', monospace;
    font-size: 23px;
  }

  div a {
    font-weight: 100;
    margin-left: 20px;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <h1>Smurf Village</h1>

      <div>
        <NavLink to="/" activeClassName="selected">
          Smurfs
        </NavLink>
        <NavLink to="/smurf-form" activeClassName="selected">
          Add Smurf
        </NavLink>
      </div>
    </StyledNav>
  );
}
