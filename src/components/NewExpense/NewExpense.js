import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  
  const saveExpanseDataHandler = (datas) => {
    const expenseData = {
      ...datas,
      id: Math.random().toString()
    }
    props.addExpenseData(expenseData)
    setIsEditing(false)
  }

  const [isEditing, setIsEditing] = useState(false)
  
  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          saveExpenseData={saveExpanseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      
    </div>
  );
};

export default NewExpense;