import { useState } from "react";
import logo from "./favicon.png";
import wip from "./wipstitch.png";
import copyright from "./copyright2.svg";
import "./App.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap');
</style>;

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} height={200} width={200} />
        <img src={wip} />
        <nav></nav>
      </header>

      {/**<div>Main Page Content</div>

      <footer className="App-footer">
        <img src={copyright} height={50} />
  </footer> **/}
    </>
  );
}

export default App;
