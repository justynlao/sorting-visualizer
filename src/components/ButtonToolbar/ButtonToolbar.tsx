import React from "react";

import "./ButtonToolbar.css";

interface ButtonToolBarProps {
  isSorting: boolean;
  onArrayReset: () => void;
  onSpeedIncrease: () => void;
  onSpeedDecrease: () => void;
  onSort: () => void;
}

const ButtonToolbar = ({
  isSorting,
  onArrayReset,
  onSpeedIncrease,
  onSpeedDecrease,
  onSort,
}: ButtonToolBarProps) => {
  return (
    <footer className="toolbar">
      <button
        className="toolbar-btn"
        disabled={isSorting}
        onClick={onSpeedDecrease}
      >
        <i className="fas fa-2x fa-fast-backward"></i>
      </button>
      <button
        className="toolbar-btn"
        disabled={isSorting}
        onClick={onArrayReset}
      >
        <i className="fas fa-2x fa-sync-alt"></i>
      </button>
      <button 
        className="toolbar-btn" 
        disabled={isSorting} 
        onClick={onSort}
      >
        <i className="fas fa-2x fa-play"></i>
      </button>
      <button
        className="toolbar-btn"
        disabled={isSorting}
        onClick={onSpeedIncrease}
      >
        <i className="fas fa-2x fa-fast-forward"></i>
      </button>
    </footer>
  );
};

export default ButtonToolbar;
