import React from "react";
import react, { useState } from "react";
import Card from "../UI/Card";
import DefaultNewExpense from "./DefaultNewExpense";
import './NewExpense.css';


function NewExpense(props){
  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredGen,setEnteredGen] = useState('');
  const [isNewExpenseVisible,setIsNewExpenseVisible]= useState(false);
  

  const titleChangeHandler =  (event) => {
      setEnteredTitle(event.target.value);
  }
  const amountChangeHandler =  (event) => {
      setEnteredAmount(event.target.value);
  }
  const genChangeHandler =  (event) => {
      setEnteredGen(event.target.value);
  }


  const onSubmit = (event) => {
      // console.log();
      event.preventDefault();
      props.submitHandler({
        name: enteredTitle,
        price: enteredAmount,
        user: 'Ashish',
        genre: enteredGen,
        reviews:[]
      })

      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredGen('');
  }

  const returnDefault = (event) => {
      setIsNewExpenseVisible(!isNewExpenseVisible);
  }
  

  if(isNewExpenseVisible==false)
  {
    return <div>
      <div className="new-expense">
      <form onSubmit={onSubmit}>
        <div className="new-expenses">
          <div className='new-input'>
              <label>Title</label>
              <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
          </div>
          <div className='new-input'>
              <label>Author</label>
              <input type='text' value={enteredAmount} onChange={amountChangeHandler}/>
          </div>
          <div className='new-input'>
            <div className='expenses-filter__control expenses-filter'>
                <label>Genre</label>
                {/* <input type='text' value={enteredGen} onChange={genChangeHandler}/> */}
                <select value={enteredGen} onChange={genChangeHandler}>
                  <option value='Fiction'>Fiction</option>
                  <option value='Novel'>Novel</option>
                  <option value='Fantasy'>Fantasy</option>
                  <option value='Romance'>Romance</option>
                </select>
            </div>
          </div>
        </div>
        <div className="new-action">
            <button onClick={returnDefault}>Cancel</button>
            <button type="submit">Add Book</button>
        </div>
      </form>
      </div>
    </div>
  }

    
    return <DefaultNewExpense returnDefault={returnDefault}/>
}

export default NewExpense;