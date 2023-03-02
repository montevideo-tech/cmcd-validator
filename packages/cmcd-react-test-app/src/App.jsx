import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import { ShakaExample } from "./components/ShakaExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://montevideotech.dev/" target="_blank">
          <img
            href="https://montevideotech.dev/"
            src="https://montevideotech.dev/wp-content/uploads/2020/09/mvd-tech-1.png"
            className="p-0 m-0 logo"
            alt="MontevideoTech logo"
            style={{fontSize: '30px'}}
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
