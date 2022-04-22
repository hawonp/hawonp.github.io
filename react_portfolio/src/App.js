import logo from "./logo.svg";
import "./App.scss";
// font imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// react imports
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// react components
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/Blank";
import AboutMe from "./pages/AboutMe";

// MUI imports
// import Button from "@mui/material/Button";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<AboutMe />} />
          <Route path="/portfolio" element={<Blank />} />
          <Route path="/experience" element={<Blank />} />
          <Route path="/contact_me" element={<Blank />} />
          {/* <Route path="/order" element={<Blank />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
