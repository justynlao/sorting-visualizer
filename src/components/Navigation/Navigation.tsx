import React from "react";
import "./Navigation.css";

interface NavigationProps {
  isSorting: boolean;
  currentAlgo: string;
  onSortSelect: (algorithm: string) => void;
  speed: string;
}

const Navigation = ({
  isSorting,
  currentAlgo,
  onSortSelect,
  speed,
}: NavigationProps) => {
  return (
    <nav>
      <h1>Sorting Visualizer</h1>
      <div>
        <button
          className={currentAlgo === "Bubble" ? "selected-btn" : "nav-btn"}
          disabled={isSorting}
          onClick={() => onSortSelect("Bubble")}
        >
          Bubble
        </button>
        <button
          className={currentAlgo === "Selection" ? "selected-btn" : "nav-btn"}
          disabled={isSorting}
          onClick={() => onSortSelect("Selection")}
        >
          Selection
        </button>
        <button
          className={currentAlgo === "Insertion" ? "selected-btn" : "nav-btn"}
          disabled={isSorting}
          onClick={() => onSortSelect("Insertion")}
        >
          Insertion
        </button>
        <button
          className={currentAlgo === "Merge" ? "selected-btn" : "nav-btn"}
          disabled={isSorting}
          onClick={() => onSortSelect("Merge")}
        >
          Merge
        </button>
        <button
          className={currentAlgo === "Quick" ? "selected-btn" : "nav-btn"}
          disabled={isSorting}
          onClick={() => onSortSelect("Quick")}
        >
          Quick
        </button>
      </div>

      <div>Speed: {speed}</div>
    </nav>
  );
};

export default Navigation;
