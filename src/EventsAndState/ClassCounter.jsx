import React, { Component } from "react";


class ClassCounter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

    constructor(props) {
    super(props);
    // контекст колбэков необходимо привязывать в конструкторе с помощью bind, иначе будет undefined
    this.handleIncrement = this.handleIncrement.bind(this); 
        this.handleDecrement = this.handleDecrement.bind(this);
        this.state = {
      value: this.props.initialValue,
    };
  }

  handleIncrement(evt) { 
    console.log("Increment button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // Error: cannot read props of undefined
  }

  handleDecrement(evt) {
    console.log("Decrement button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // Error: cannot read props of undefined
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}


export default ClassCounter;