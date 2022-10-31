import React, { Component } from "react";
// Можно использовать любой пакет для генерации уникальных строк
import { nanoid } from "nanoid";


class GenerateUniqueIdForFormElementsClassWithNanoid extends Component {
  loginInputId = nanoid();

  render() {
    return (
      <form>
        <label htmlFor={this.loginInputId}>Login</label>
        <input type="text" name="login" id={this.loginInputId} />
      </form>
    );
  }
}

export default GenerateUniqueIdForFormElementsClassWithNanoid;