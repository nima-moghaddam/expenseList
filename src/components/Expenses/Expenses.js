import React, { useState } from "react";
import "./Expenses.css";
import Card from "./../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const dropdownSetYear = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeHandler={dropdownSetYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
