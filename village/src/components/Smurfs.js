import React from "react";
import Prop from "prop-types";
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
        <Smurf
          name={smurf.name}
          id={smurf.id}
          age={smurf.age}
          height={smurf.height}
          key={smurf.id}
        />
      ))}
    </ul>
  </StyledSmurfs>
);

Smurfs.propTypes = {
  smurfs: Prop.arrayOf(Prop.object).isRequired
};

export default Smurfs;
