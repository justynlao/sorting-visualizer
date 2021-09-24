import React from "react";

import "./ButtonToolbar.css";

interface ButtonToolBarProps {
  onArrayReset: () => void;
  onSpeedChange: () => void;
  onSort: () => void;
}

const ButtonToolbar = ({
  onArrayReset,
  onSpeedChange,
  onSort,
}: ButtonToolBarProps) => {
  return (
    <footer className="toolbar">
      <button className="toolbar-btn">Slow</button>
      <button className="toolbar-btn" onClick={onArrayReset}>Reset</button>
      <button className="toolbar-btn" onClick={onSort}>Sort</button>
      <button className="toolbar-btn">Fast</button>
    </footer>
  );
};

export default ButtonToolbar;
