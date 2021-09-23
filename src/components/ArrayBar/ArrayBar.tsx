import React from "react";

import "./ArrayBar.css";

interface ArrayBarProps {
    height: number;
}

const ArrayBars = ({height}: ArrayBarProps) => {
  return <div className="bar" style={{height: `${height}px`}}></div>;
};

export default ArrayBars;
