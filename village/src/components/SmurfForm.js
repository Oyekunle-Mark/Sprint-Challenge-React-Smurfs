import React from "react";
import Prop from "prop-types";
import styled from "styled-components";

const StyledSmurf = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 50px;

  background: rgb(247, 247, 247, 0.7);
  width: 340px;
  padding: 40px 10px;
  border-radius: 5px;

  h3 {
    color: #002a32;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
  }

  input {
    width: 300px;
    height: 20px;
    margin: 7px 0;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #002a32;
    border-radius: 2px;
  }

  button {
    width: 200px;
    height: 35px;
    padding: 5px;
    margin: 5px 0;
    font-size: 14px;
    background: #002a32;
    color: #ffffff;
    border: 1px solid #002a32;
    border-radius: 2px;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default function SmurfForm({
  name,
  age,
  height,
  handleChange,
  handleSubmit,
  editing,
  cancelForm
}) {
  return (
    <StyledSmurf onSubmit={handleSubmit}>
      <h3>{editing ? "Edit Smurf" : "Create A Smurf"}</h3>

      <input
        onChange={handleChange}
        placeholder="name"
        value={name}
        name="name"
      />

      <input onChange={handleChange} placeholder="age" value={age} name="age" />

      <input
        onChange={handleChange}
        placeholder="height"
        value={height}
        name="height"
      />

      {editing && <button onClick={cancelForm}>Cancel</button>}

      <button type="submit">
        {editing ? "Edit Smurf" : "Add to the village"}
      </button>
    </StyledSmurf>
  );
}

SmurfForm.propTypes = {
  name: Prop.string.isRequired,
  age: Prop.string.isRequired,
  height: Prop.string.isRequired,
  handleChange: Prop.func.isRequired,
  handleSubmit: Prop.func.isRequired,
  editing: Prop.string,
  cancelForm: Prop.func
};

SmurfForm.defaultProps = {
  editing: "",
  cancelForm: f => f
};
