import React from 'react';
import './ExpenseDate.css'
import Card from '../UI/Card'


function ExpenseDate(props){
    const month=props.review.toLocaleString('en-US',{month: 'long'});
    const day=props.review.toLocaleString('en-US',{day: '2-digit'});
    const year=props.review.getFullYear();
    return (
        <Card className='expense_date'>
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
            <div className='day'>{day}</div>
        </Card>
    );
}

export default ExpenseDate;