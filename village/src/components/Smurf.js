import React from "react";
import Prop from "prop-types";
import styled from "styled-components";

const StyledSmurf = styled.section`
  background: #fafbfc;
  color: #3a3a3a;
  text-align: center;
  max-width: 800px;
  margin: 20px 0;
  padding: 5px;
  border: 1px solid #002a32;
  border-radius: 3px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
  }

  p {
    font-family: monospace;
    padding: 5px 0;
  }
`;

const Smurf = ({ name, height, age }) => (
  <StyledSmurf>
    <h3>{name}</h3>
    <p>{height} tall</p>
    <p>{age} smurf years old</p>
  </StyledSmurf>
);

Smurf.propTypes = {
  name: Prop.string.isRequired,
  height: Prop.string.isRequired,
  age: Prop.number.isRequired
};

export default Smurf;
