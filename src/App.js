import React, { useState, useEffect } from "react";
import "./App.css";
import StarWarsSketch from "./components/StarWarsSketch";
import DataInputForm from "./components/inputForm";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [swTitle, setSwTitle] = useState("");
  const [swSummary, setSwSummary] = useState("");

  useEffect(() => {
    if (swSummary.trim().length > 0 && swTitle.trim().length > 0) {
      setIsStarted(true);
    }
  }, [swTitle, swSummary]);
  const onFormSubmitted = (enteredTitle, enteredSummary) => {
    let temp = "";
    temp = enteredTitle.split(" ");
    temp = temp.join("\n");
    temp = temp.toLowerCase();
    setSwTitle(temp);
    temp = enteredSummary.split("\n");
    temp = temp.join("\n\n\n");
    temp = temp.toLowerCase();
    setSwSummary(temp);
  };

  return (
    <React.Fragment>
      {!isStarted && (
        <div>
          <h2>Star Wars Intro Generator</h2>
          <DataInputForm onFormSubmit={onFormSubmitted} />
        </div>
      )}
      {isStarted && (
        <StarWarsSketch enteredTitle={swTitle} enteredSummary={swSummary} />
      )}
    </React.Fragment>
  );
}

export default App;
