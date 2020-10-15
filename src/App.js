import React from "react";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import ParallaxComponent from "./components/ParallaxComponent";
import BodyComponent from "./components/BodyComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ParallaxComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
