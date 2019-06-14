import React from "react";
import Prop from "prop-types";
import styled from "styled-components";

const StyledSmurf = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    height: 28px;
    padding: 5px;
    margin: 5px 0;
    background: #002a32;
    color: #ffffff;
    border: 1px solid #002a32;
    border-radius: 2px;
  }
`;

export default function SmurfForm({
  name,
  age,
  height,
  handleChange,
  handleSubmit
}) {
  return (
    <StyledSmurf onSubmit={handleSubmit}>
      <h3>Create A Smurf</h3>
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
      <button type="submit">Add to the village</button>
    </StyledSmurf>
  );
}

SmurfForm.propTypes = {
  name: Prop.string.isRequired,
  age: Prop.string.isRequired,
  height: Prop.string.isRequired,
  handleChange: Prop.func.isRequired,
  handleSubmit: Prop.func.isRequired
};
