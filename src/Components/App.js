import React, { Component } from "react";
import Router from "./Router";
import GlobalStylees from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStylees />
      </>
    );
  }
}

export default App;
