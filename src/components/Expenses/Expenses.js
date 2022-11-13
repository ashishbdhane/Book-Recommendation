import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import SearchBar from "./SearchBar";

function Expenses(props) {
  const [filteredGenre, setFilteredGenre] = useState('All');
  const [SearchText,setSearchText] = useState('');
  
  const filterChangeHandler = selectedGenre => {
    setFilteredGenre(selectedGenre);
  };


  let inputHandler = (e) => {
    var lowerCase = e;
    setSearchText(lowerCase);
  };



  return ( 
    <Card className='expense'>    
      <div className='filter'>
        <ExpensesFilter selected={filteredGenre} onChangeFilter={filterChangeHandler} />
        <SearchBar inputHandler={inputHandler} />
      </div>
      <ExpensesList items={props.items} searchText={SearchText} filteredGenre={filteredGenre} delete_book={props.delete_book} />
    </Card>
  );
}


export default Expenses;