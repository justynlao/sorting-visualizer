import React from "react";
import ArrayBar from "../../components/ArrayBar/ArrayBar";

import "./Array.css";

interface ArrayProps {
  array: number[];
  compare: number[];
  swap: number[];
  sorted: number[];
}

const Array = ({ array, compare, swap, sorted }: ArrayProps) => {
  return (
    <div className="array">
      {array.map((num, index) => {
        let barColor = 'cornflowerblue';
        if (compare && (index === compare[0] || index === compare[1])) {
          barColor = "purple";
        }

        if (swap && (index === swap[0] || index === swap[1])) {
          barColor = "red";
        }

        if (sorted && sorted.includes(index)) {
          barColor = "green";
        }

        return <ArrayBar height={num} color={barColor}/>;
      })}
    </div>
  );
};

export default Array;
