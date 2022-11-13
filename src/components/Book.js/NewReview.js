import react, { useState } from "react";
import Card from "../UI/Card";

import DefaultNewExpense from "../NewExpense/DefaultNewExpense";
import "../NewExpense/NewExpense.css";
import Review from "./Review";
import DefaultNewReview from "./DefaultNewReview";


function NewReview(props)
{
    const [enteredDate,setEnteredDate] = useState('');
    const [isNewExpenseVisible,setIsNewExpenseVisible]= useState(false);


    const dateChangeHandler =  (event) => {
        setEnteredDate(event.target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(enteredDate);
        props.submitHandler({
          Review: enteredDate,
        });
        setEnteredDate('');
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
                        <label>Review</label>
                        <textarea rows="5" cols="84" placeholder="Write your Review!!" value={enteredDate} onChange={dateChangeHandler} required/>
                    </div>
                </div>
                <div className="new-action">
                    <button onClick={returnDefault}>Cancel</button>
                    <button type="submit">Add Review</button>
                </div>
            </form>
            </div>
          
        </div>
    }

    
    return <DefaultNewReview returnDefault={returnDefault}/>
}

export default NewReview;