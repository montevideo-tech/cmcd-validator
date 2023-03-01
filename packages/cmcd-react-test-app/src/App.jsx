import { useState } from "react";
import "./App.css";
import { ShakaExample } from "./components/ShakaExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://montevideotech.dev/" target="_blank">
          <img
            src="https://montevideotech.dev/wp-content/uploads/2020/09/mvd-tech-1.png"
            className="logo"
            alt="MontevideoTech logo"
          />
        </a>
      </div>
      <div>
        <ShakaExample />
      </div>
    </div>
  );
}

export default App;
