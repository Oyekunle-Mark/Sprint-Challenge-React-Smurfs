import React from "react";
import Prop from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Smurf from "./Smurf";

const StyledSmurfs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Smurfs = ({ smurfs }) => (
  <StyledSmurfs>
    <ul>
      {smurfs.map(smurf => (
        <Link key={smurf.id} to={`/smurf/${smurf.id}`}>
          <Smurf
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
          />
        </Link>
      ))}
    </ul>
  </StyledSmurfs>
);

Smurfs.propTypes = {
  smurfs: Prop.arrayOf(Prop.object).isRequired
};

export default Smurfs;
