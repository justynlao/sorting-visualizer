import React, { useEffect, useState } from "react";

// Components
import Navigation from "./components/Navigation/Navigation";
import Array from "./containers/Array/Array";
import ButtonToolbar from "./components/ButtonToolbar/ButtonToolbar";

// Algorithms
import bubbleSort from "./algorithms/Bubble";
import insertionSort from "./algorithms/Insertion";
import mergeSort from "./algorithms/Merge";
import quickSort from "./algorithms/Quick";
import selectionSort from "./algorithms/Selection";

import "./App.css";

const App: React.FC = () => {
  const [currentAlgo, setCurrentAlgo] = useState("Bubble");
  const [array, setArray] = useState<number[]>([]);
  const [compare, setCompare] = useState<number[]>([]); // everytime two elements are being compared, set them to the compared
  const [swap, setSwap] = useState<number[]>([]); // when two elements are to be swapped, set them to swap
  const [sorted, setSorted] = useState<number[]>([]); // Whenever an element is sorted, append to the sorted state
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(300);
  const [speedText, setSpeedText] = useState("0");

  useEffect(() => {
    resetArray();
  }, [currentAlgo]);

  useEffect(() => {
    switch (speed) {
      case 100:
        setSpeedText("+2");
        break;
      case 200:
        setSpeedText("+1");
        break;
      case 300:
        setSpeedText("+0");
        break;
      case 400:
        setSpeedText("-1");
        break;
      case 500:
        setSpeedText("-2");
    }
  }, [speed]);

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

  const handleSortSelection = (algorithm: string) => {
    setCurrentAlgo(algorithm);
  };

  const handleArrayReset = () => {
    resetArray();
  };

  const handleSpeedIncrease = () => {
    if (speed > 100) {
      setSpeed(speed - 100);
    }
  };

  const handleSpeedDecrease = () => {
    if (speed < 500) {
      setSpeed(speed + 100);
    }
  };

  const sortHelper = (arr: any[]) => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        const [first, second, swappedArr, finished] = arr[i];
        setSwap([]);
        setCompare([first, second]);

        if (swappedArr !== null) {
          setArray(swappedArr);
          if (first !== null || second !== null) {
            setSwap([first, second]);
          }
        }

        if (finished !== null) {
          finished.length > 1
            ? setSorted((prevState) => [...prevState, ...finished])
            : setSorted((prevState) => [...prevState, finished]);
        }

        if (i === arr.length - 1) setIsSorting(false);
      }, i * speed);
    }
  };

  const handleSort = () => {
    setIsSorting(true);
    switch (currentAlgo) {
      case "Bubble":
        sortHelper(bubbleSort(array));
        break;
      case "Insertion":
        sortHelper(insertionSort(array));
        break;
      case "Merge":
        sortHelper(mergeSort(array));
        break;
      case "Quick":
        sortHelper(quickSort(array));
        break;
      case "Selection":
        sortHelper(selectionSort(array));
    }
  };

  return (
    <div className="App">
      <Navigation
        isSorting={isSorting}
        currentAlgo={currentAlgo}
        onSortSelect={handleSortSelection}
        speed={speedText}
      />
      <Array array={array} compare={compare} swap={swap} sorted={sorted} />
      <ButtonToolbar
        isSorting={isSorting}
        onArrayReset={handleArrayReset}
        onSpeedIncrease={handleSpeedIncrease}
        onSpeedDecrease={handleSpeedDecrease}
        onSort={handleSort}
      />
    </div>
  );
};

export default App;
