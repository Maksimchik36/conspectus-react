import React, { Component } from "react";
import ButtonRiseOfState from './EventsAndState/ButtonRiseOfState';


class AppClassForButtonRiseOfState extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод который будем передавать в Button для вызова при клике
  updateMessage = evt => {
    console.log(evt); // Доступен объект события
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <ButtonRiseOfState label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}


export default AppClassForButtonRiseOfState;