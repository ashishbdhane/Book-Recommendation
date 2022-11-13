import React from 'react';
import './NewExpense.css';
import './DefaultNewExpense.css';

function DefaultNewExpense(props) { 
    return (
        <div className='new-expense'>
            <button className='default-button' onClick={props.returnDefault}> Add Book </button>
        </div>
    )
}


export default DefaultNewExpense;