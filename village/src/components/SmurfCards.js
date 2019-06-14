import React from "react";
import { Route } from "react-router-dom";
import Prop from "prop-types";
import styled from "styled-components";

import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

const StyledCards = styled.div`
  div {
    display: flex;
    justify-content: center;

    margin: 20px 0;
  }

  div button {
    width: 100px;
    height: 35px;
    padding: 5px;
    margin: 5px 20px;
    font-size: 14px;
    background: #002a32;
    color: #ffffff;
    border: 1px solid #002a32;
    border-radius: 2px;
  }

  div button:hover {
    cursor: pointer;
  }
`;

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
        <StyledCards>
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
              Remove
            </button>

            <button
              onClick={() =>
                updateForm(smurf.id, smurf.name, smurf.age, smurf.height)
              }
            >
              Edit
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
        </StyledCards>
      )}
    />
  ));

  return <React.Fragment>{smurfCards}</React.Fragment>;
}

SmurfCards.propTypes = {
  smurfs: Prop.arrayOf(Prop.object).isRequired,
  removeSmurf: Prop.func.isRequired,
  name: Prop.string.isRequired,
  age: Prop.number.isRequired,
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
