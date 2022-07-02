import { useState } from "react";
import "../state/Toggle.css";

function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={() => setOn(!on)}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
