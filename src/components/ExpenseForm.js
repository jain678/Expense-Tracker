import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  return (
    // <div>
    <form onSubmit={submitHandler} className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title: </label>
        <input
          type="text"
          placeholder="description"
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Amount: </label>
        <input
          type="number"
          placeholder="0.0"
          value={enteredAmount}
          onChange={amountChangeHandler}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Date: </label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
    // </div>
  );
}

export default ExpenseForm;
