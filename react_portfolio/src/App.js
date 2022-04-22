import logo from "./logo.svg";
import "./App.css";
// font imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// react imports
import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

// react components
import Car from "./components/Car";
import Hawon from "./components/Hawon";

function App() {
  return (
    <div className="App">
      <h1>this is h1 heading</h1>
      <h2> this is h2 heading</h2>
      <Button variant="contained">Hello World</Button>
      <Car />
      <Hawon />
    </div>
  );
}

export default App;
