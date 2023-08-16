import React,{useState} from "react";
import Expenses from "./Expenses";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


function ExpensesList(props) {
  
  let filteredData = props.items.filter((el) => {
    if (props.searchText === '') {
        return el;
    }
    else {
        return el.name.toLowerCase().includes(props.searchText)
    }
})
  filteredData = filteredData.filter((el) => {
    if(props.filteredGenre==='All'){
      return el;
    }
    else{
      return el.genre===props.filteredGenre;
    }
  })

  if(filteredData.length===0)
  {
    return <h2 className='expenses-list__feedback'>
      No Expense Found.
    </h2>
  }
  

  return (
    <ul className='expenses-list'>
      {
        filteredData.map((element) => (
          <ExpenseItem key={element.name}
          title={element.name}
          amount={element.price}
          user={element.user}
          delete_book={props.delete_book}
          />       
          )) 
        }
      
    </ul>
  );
}

export default ExpensesList;