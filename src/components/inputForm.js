import React, { useState } from "react";

const DataInputForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredSummary, setEnteredSummary] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const summaryChangeHandler = (event) => {
    setEnteredSummary(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(enteredTitle, enteredSummary);
    console.log(enteredTitle, enteredSummary)
  };

  return (
    <div>
      <form className="form-list" onSubmit={submitHandler}>
        <div className="form-item">
          <label className="form-item__label" htmlFor="title">
            Enter title
          </label>
          <input
            className="form-item__input"
            id="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
            placeholder="enter title"
          ></input>
        </div>
        <div className="form-item">
          <label className="form-item__label" htmlFor="summary">
            Enter summary
          </label>
          <input
            className="form-item__input"
            id="summary"
            onChange={summaryChangeHandler}
            value={enteredSummary}
            placeholder="enter plot summary"
          ></input>
        </div>
        <button>Generate intro</button>
      </form>
    </div>
  );
};

export default DataInputForm;
