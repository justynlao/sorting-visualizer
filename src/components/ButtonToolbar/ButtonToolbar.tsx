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
      <button>Slow</button>
      <button>Reset</button>
      <button>Sort</button>
      <button>Fast</button>
    </footer>
  );
};

export default ButtonToolbar;
