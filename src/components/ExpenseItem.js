import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from './Card';

function ExpenseItem(props) { 
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("changed");
  }
  return (
    <Card className='expense-item'>
    <ExpenseDate date = {props.date}/>
    <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
    </div>
    <button onClick={clickHandler}>Click me!</button>
    </Card>
  )
}

export default ExpenseItem