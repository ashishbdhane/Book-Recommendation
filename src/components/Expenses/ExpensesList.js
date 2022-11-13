import React from "react";
import Expenses from "./Expenses";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


function ExpensesList(props) {
  if(props.items.length===0)
  {
    return <h2 className='expenses-list__feedback'>
      No Expense Found.
    </h2>
  }
//   const filteredData = props.items.filter((el) => {
//     console.log(props.items);
//     console.log(el.name);

//     return el.title>4;
// })
  let filteredData = props.items.filter((el) => {
    if (props.searchText === '') {
        return el;
    }
    else {
        return el.name.toLowerCase().includes(props.searchText)
    }
})
  filteredData = filteredData.filter((el) => {
    console.log(el);
    if(props.filteredGenre==='All'){
      return el;
    }
    else{
      return el.genre===props.filteredGenre;
    }
  })


  return (
    <ul className='expenses-list'>
      {
        filteredData.map((element) => (
          <ExpenseItem key={element.name}
          title={element.name}
          amount={element.price}
          user={element.user}
          />       
          )) 
        }
      
    </ul>
  );
}

export default ExpensesList;