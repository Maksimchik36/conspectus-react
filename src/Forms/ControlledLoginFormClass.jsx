import React, { Component } from "react";


class ControlledLoginFormClass extends Component {
  state = {
    inputValue: "",
  };

  handleChange = evt => {
      this.setState({ inputValue: evt.target.value });
      console.log(this.state);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <input type="text" value={inputValue} onChange={this.handleChange} />
    );
  }
}


export default ControlledLoginFormClass;