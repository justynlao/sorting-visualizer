import React from "react";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <h1>Sorting Visualizer</h1>
      <div className="toolbar">
        <button>Bubble</button>
        <button>Selection</button>
        <button>Insertion</button>
        <button>Merge</button>
        <button>Quick</button>
      </div>
    </nav>
  );
};

export default Navigation;
