import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';


export default function ExpenseItems(props) {

    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>₹&nbsp;{props.amount}</div>
        </div>
      </Card>
    );
}
