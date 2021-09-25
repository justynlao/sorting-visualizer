import React from "react";

import "./ArrayBar.css";

interface ArrayBarProps {
    height: number;
    color: string;
}

const ArrayBars = ({height, color}: ArrayBarProps) => {
  return <div className="bar" style={{height: `${height}px`, backgroundColor: `${color}`}}></div>;
};

export default ArrayBars;
