import React from "react";
import ReactDOM from "react-dom";
import { Box } from "grommet";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Box border={{ color: "green", size: "large" }} pad="xlarge" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
