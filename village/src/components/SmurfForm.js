import React from "react";
import Prop from "prop-types";

export default function SmurfForm({
  name,
  age,
  height,
  handleChange,
  handleSubmit
}) {
  return (
    <div className="SmurfForm">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <input
          onChange={handleChange}
          placeholder="age"
          value={age}
          name="age"
        />
        <input
          onChange={handleChange}
          placeholder="height"
          value={height}
          name="height"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
}

SmurfForm.propTypes = {
  name: Prop.string.isRequired,
  age: Prop.string.isRequired,
  height: Prop.string.isRequired,
  handleChange: Prop.func.isRequired,
  handleSubmit: Prop.func.isRequired
};
