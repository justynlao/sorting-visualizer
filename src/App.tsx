import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Array from "./containers/Array/Array";
import ButtonToolbar from "./components/ButtonToolbar/ButtonToolbar";

import bubbleSort from "./algorithms/Bubble";
import insertionSort from "./algorithms/Insertion";
import mergeSort from "./algorithms/Merge";
import quickSort from "./algorithms/Quick";
import selectionSort from "./algorithms/Selection";

import "./App.css";

const App: React.FC = () => {
  const [currentAlgo, setCurrentAlgo] = useState("");
  const [array, setArray] = useState<number[]>([]);
  const [compare, setCompare] = useState<number[]>([]); // everytime two elements are being compared, set them to the compared
  const [swap, setSwap] = useState<number[]>([]); // when two elements are to be swapped, set them to swap
  const [sorted, setSorted] = useState<number[]>([]); // Whenever an element is sorted, append to the sorted state
  const [speed, setSpeed] = useState(500);

  useEffect(() => {
    resetArray();
  }, [currentAlgo]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 500) + 5);
    }
    setArray(arr);
    setCompare([]);
    setSwap([]);
    setSorted([]);
  };

  const handleSortSelection = (sortAlgo: string) => {
    setCurrentAlgo(sortAlgo);
  };

  const handleArrayReset = () => {
    resetArray();
  };

  const handleSpeedChange = () => {};

  const sortHelper = (arr: any) => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        const [first, second, swappedArr, finished] = arr[i];
        setCompare([first, second]);
        setSwap([]);

        if (finished !== null) {
          setSorted((prevState) => [...prevState, finished]);
        }

        if (swappedArr) {
          setArray(swappedArr);
          if (first !== null || second !== null) {
            setSwap([first, second]);
          }
        }
      }, i * speed);
    }
  };

  const handleSort = () => {
    switch (currentAlgo) {
      case "Bubble":
        sortHelper(bubbleSort(array));
        break;
      case "Insertion":
        setArray([...insertionSort(array)]);
        break;
      case "Merge":
        setArray([...mergeSort(array)]);
        break;
      case "Quick":
        setArray([...quickSort(array)]);
        break;
      case "Selection":
        setArray([...selectionSort(array)]);
    }
  };

  return (
    <div className="App">
      <Navigation onSortSelect={handleSortSelection} />
      <Array array={array} compare={compare} swap={swap} sorted={sorted} />
      <ButtonToolbar
        onArrayReset={handleArrayReset}
        onSpeedChange={handleSpeedChange}
        onSort={handleSort}
      />
    </div>
  );
};

export default App;
