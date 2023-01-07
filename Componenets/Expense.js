import React from 'react'
import ExpenseItems from './ExpenseItems'
import './Expense.css'
import Card from './Card'

export default function Expense(props) {
  return (
    <>
    <Card className="expenses">
        <ExpenseItems title={props.items[0].expenseTitle} date={props.items[0].expenseDate} amount={props.items[0].expenseAmount}/>
        <ExpenseItems title={props.items[1].expenseTitle} date={props.items[1].expenseDate} amount={props.items[1].expenseAmount}/>
        <ExpenseItems title={props.items[2].expenseTitle} date={props.items[2].expenseDate} amount={props.items[2].expenseAmount}/>
        <ExpenseItems title={props.items[3].expenseTitle} date={props.items[3].expenseDate} amount={props.items[3].expenseAmount}/>
    </Card>
    </>
  )
}
