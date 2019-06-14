import React from "react";
import { Route } from "react-router-dom";
import Prop from "prop-types";

import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

export default function SmurfCards({
  smurfs,
  removeSmurf,
  name,
  age,
  height,
  editing,
  updateForm,
  handleChange,
  handleSubmit,
  cancelForm
}) {
  const smurfCards = smurfs.map(smurf => (
    <Route
      key={smurf.id}
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

          <div>
            <button
              onClick={() => {
                removeSmurf(smurf.id);
                props.history.push("/");
              }}
            >
              Remove Smurf
            </button>

            <button
              onClick={() =>
                updateForm(smurf.id, smurf.name, smurf.age, smurf.height)
              }
            >
              Edit Smurf
            </button>
          </div>

          {editing && (
            <SmurfForm
              name={name}
              age={age}
              height={height}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editing={editing}
              cancelForm={cancelForm}
            />
          )}
        </div>
      )}
    />
  ));

  return <React.Fragment>{smurfCards}</React.Fragment>;
}

SmurfCards.propTypes = {
  smurfs: Prop.arrayOf(Prop.object).isRequired,
  removeSmurf: Prop.func.isRequired,
  name: Prop.string.isRequired,
  age: Prop.string.isRequired,
  height: Prop.string.isRequired,
  editing: Prop.string.isRequired,
  history: Prop.func,
  updateForm: Prop.func.isRequired,
  handleSubmit: Prop.func.isRequired,
  handleChange: Prop.func.isRequired,
  cancelForm: Prop.func.isRequired
};

SmurfCards.defaultProps = {
  history: f => f
};
