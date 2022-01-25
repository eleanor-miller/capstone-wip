import { useState } from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        Header
        <nav></nav>
      </header>
      <div>Main Page Content</div>
      <footer>Footer</footer>
    </>
  );
}

export default App;
