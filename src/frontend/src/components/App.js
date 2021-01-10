import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom"

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <HomePage/>
        
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

// you can pass properties(props) into a component by calling "this.props.name"
// there needs to be an external wrapper for a commponent