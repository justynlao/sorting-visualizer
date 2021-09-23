import React from "react";
import "./Navigation.css";

interface NavigationProps {
  onSortSelect: () => void;
}

const Navigation = ({ onSortSelect }: NavigationProps) => {
  return (
    <nav>
      <h1>Sorting Visualizer</h1>
      <div>
        <button onClick={onSortSelect}>Bubble</button>
        <button onClick={onSortSelect}>Selection</button>
        <button onClick={onSortSelect}>Insertion</button>
        <button onClick={onSortSelect}>Merge</button>
        <button onClick={onSortSelect}>Quick</button>
      </div>
    </nav>
  );
};

export default Navigation;
