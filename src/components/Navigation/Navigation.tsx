import React from "react";
import "./Navigation.css";

interface NavigationProps {
  onSortSelect: (sortAlgo: string) => void;
}

const Navigation = ({ onSortSelect }: NavigationProps) => {
  return (
    <nav>
      <h1>Sorting Visualizer</h1>
      <div>
        <button className="nav-btn" onClick={() => onSortSelect('Bubble')}>Bubble</button>
        <button className="nav-btn" onClick={() => onSortSelect('Selection')}>Selection</button>
        <button className="nav-btn" onClick={() => onSortSelect('Insertion')}>Insertion</button>
        <button className="nav-btn" onClick={() => onSortSelect('Merge')}>Merge</button>
        <button className="nav-btn" onClick={() => onSortSelect('Quick')}>Quick</button>
      </div>
    </nav>
  );
};

export default Navigation;
