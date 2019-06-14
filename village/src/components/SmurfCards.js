import React from "react";
import { Route } from "react-router-dom";
import Prop from "prop-types";

import Smurf from "./Smurf";

export default function SmurfCard({ smurfs }) {
  const smurfCards = smurfs.map(smurf => (
    <Route
      path={`/smurf/${smurf.id}`}
      render={props => (
        <Smurf
          {...props}
          name={smurf.name}
          id={smurf.id}
          age={smurf.age}
          height={smurf.height}
        />
      )}
    />
  ));

  return (
    <React.Fragment>
      {smurfCards}
    </React.Fragment>
  );
}

SmurfCard.propTypes = {
  smurfs: Prop.arrayOf(Prop.object).isRequired
};
