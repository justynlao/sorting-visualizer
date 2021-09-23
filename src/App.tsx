import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Array from "./containers/Array/Array";
import ButtonToolbar from "./components/ButtonToolbar/ButtonToolbar";

import "./App.css";

const App: React.FC = () => {
  const [currentAlgo, setCurrentAlgo] = useState("");
  const [array, setArray] = useState<number[]>([]);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push(Math.floor(Math.random() * 500) + 1);
    }
    setArray(arr);
  };

  const handleSortSelection = () => {};

  const handleArrayReset = () => {
    resetArray();
  };

  const handleSpeedChange = () => {};

  const handleSort = () => {};

  return (
    <div className="App">
      <Navigation onSortSelect={handleSortSelection} />
      <Array array={array} />
      <ButtonToolbar
        onArrayReset={handleArrayReset}
        onSpeedChange={handleSpeedChange}
        onSort={handleSort}
      />
    </div>
  );
};

export default App;
