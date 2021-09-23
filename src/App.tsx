import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Array from "./containers/Array/Array";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Array />
    </div>
  );
};

export default App;
