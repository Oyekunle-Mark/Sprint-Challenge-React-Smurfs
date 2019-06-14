import React, { Component } from "react";
import axios from "axios";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: ""
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

  render() {
    const { smurfs, name, age, height } = this.state;

    return (
      <div className="App">
        <SmurfForm
          name={name}
          age={age}
          height={height}
          handleChange={this.handleInputChange}
          handleSubmit={this.addSmurf}
        />
        <Smurfs smurfs={smurfs} />
      </div>
    );
  }
}

export default App;
