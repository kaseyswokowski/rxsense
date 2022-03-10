import "./styles.css";
import { useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState("");
  const [progress, setProgress] = useState("");

  const handleChange = (e) => {
    setSeconds(e.target.value);
    console.log(seconds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setInterval(myCallback() {
        
    }, { seconds });

    clearInterval(test);

  };

  const handleTime = () => {};

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="progress-bar"></div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="seconds" onChange={handleChange} />
        <button onClick={() => handleTime()}>Start</button>
      </form>
    </div>
  );
}
