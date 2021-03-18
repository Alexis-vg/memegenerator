import React from "react";

import "./styles/base.css";
import "./styles/normalize.css";
import Header from "./Components/Header";
import MemeGenerator from "./MemeGenerator";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
