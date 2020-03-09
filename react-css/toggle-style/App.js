import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [boolean, setBoolean] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setBoolean(!boolean)}>toggle</button>
      <div
        style={
          boolean
            ? { background: "blue", backgroundColor: "red" }
            : { backgroundColor: "red" }
        }
      >
        Hello React
      </div>
    </div>
  );
}
