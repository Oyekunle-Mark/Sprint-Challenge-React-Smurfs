import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Navigation from "./components/Navigation";
import SmurfCard from "./components/SmurfCards";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-width: 100vw;
  background: #42b0ed;
  color: #ffffff;
  font-family: "Nunito", sans-serif;
  font-size: 16px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: "",
      editing: ""
    };
  }

  getSmurfs = () => {
    axios.get("http://localhost:3333/smurfs").then(response =>
      this.setState({
        smurfs: response.data
      })
    );
  };

  componentDidMount = () => this.getSmurfs();

  addSmurf = event => {
    event.preventDefault();

    const { name, age, height } = this.state;
    if (!name || !age || !height) return;

    const newSmurf = {
      name,
      age: Number(age),
      height
    };

    axios.post("http://localhost:3333/smurfs", newSmurf).then(response =>
      this.setState({
        smurfs: response.data
      })
    );

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${Number(id)}`).then(response =>
      this.setState({
        smurfs: response.data
      })
    );
  };

  populateForm = (editing, name, age, height) => {
    this.setState({
      name,
      age,
      height,
      editing
    });
  };

  editSmurf = e => {
    e.preventDefault();

    const { name, age, height, editing } = this.state;
    const newSmurf = {
      name,
      age: Number(age),
      height
    };

    axios
      .put(`http://localhost:3333/smurfs/${editing}`, newSmurf)
      .then(response =>
        this.setState({
          smurfs: response.data,
          editing: ""
        })
      );
  };

  cancelEditForm = () =>
    this.setState({
      editing: "",
      name: "",
      age: "",
      height: ""
    });

  render() {
    const { smurfs, name, age, height, editing } = this.state;

    return (
      <StyledApp>
        <Navigation />

        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              name={name}
              age={Number(age)}
              height={height}
              handleChange={this.handleInputChange}
              handleSubmit={this.addSmurf}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={smurfs}
              name={name}
              age={age}
              height={height}
              handleChange={this.handleInputChange}
            />
          )}
        />

        <SmurfCard
          smurfs={smurfs}
          removeSmurf={this.deleteSmurf}
          name={name}
          age={Number(age)}
          height={height}
          editing={String(editing)}
          handleChange={this.handleInputChange}
          updateForm={this.populateForm}
          handleSubmit={this.editSmurf}
          cancelForm={this.cancelEditForm}
        />
      </StyledApp>
    );
  }
}

export default App;
