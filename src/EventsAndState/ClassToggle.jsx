import React, { Component } from "react";


class ClassToggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <button onClick={this.show} disabled={isOpen}>Show</button>
        <button onClick={this.hide} disabled={!isOpen}>Hide</button>
        {isOpen && children}
      </>
    );
  }
}


export default ClassToggle;