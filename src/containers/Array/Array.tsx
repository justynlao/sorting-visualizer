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
        let barColor = "#b8faff";
        if (compare && (index === compare[0] || index === compare[1])) {
          barColor = "#faffb8";
        }

        if (swap && (index === swap[0] || index === swap[1])) {
          barColor = "#ff7d7d";
        }

        if (sorted && sorted.includes(index)) {
          barColor = "#94ff9f";
        }

        return <ArrayBar height={num} color={barColor} />;
      })}
    </div>
  );
};

export default Array;
