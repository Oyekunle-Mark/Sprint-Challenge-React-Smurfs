import React from "react";
import { Route } from "react-router-dom";
import Prop from "prop-types";

import Smurf from "./Smurf";

export default function SmurfCards({ smurfs, removeSmurf }) {
  const smurfCards = smurfs.map(smurf => (
    <Route
      path={`/smurf/${smurf.id}`}
      render={props => (
        <div>
          <Smurf
            {...props}
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
          />
          <button
            onClick={() => {
              removeSmurf(smurf.id);
              props.history.push("/");
            }}
          >
            Remove Smurf
          </button>
        </div>
      )}
    />
  ));

  return <React.Fragment>{smurfCards}</React.Fragment>;
}

SmurfCards.propTypes = {
  smurfs: Prop.arrayOf(Prop.object).isRequired,
  removeSmurf: Prop.func.isRequired,
  history: Prop.func.isRequired
};
