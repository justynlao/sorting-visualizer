import React from "react";
import ArrayBar from "../../components/ArrayBar/ArrayBar";

import "./Array.css";

interface ArrayProps {
  array: number[];
}

const Array = ({ array }: ArrayProps) => {
  return (
    <div className="array">
      {array.map((num) => {
        return <ArrayBar height={num} />;
      })}
    </div>
  );
};

export default Array;
