import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Review from "../Book.js/Review";
import { useNavigate, Link } from 'react-router-dom';
import NewReview from "../Book.js/NewReview";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ExpenseItem(props) {


const navigate = useNavigate();

  const [title, setTitle] = useState(props.title);

  
  return (
    
    <Card className="expense-item">
      {/* <ExpenseDate review={props.review} /> */}
      <Link to={`/book/${title}`}>
        <div  className="expense-item__price">
          <h2 >{title}</h2>
          {/* <NewReview/> */}
          <Card className="prices">{props.amount}</Card>
        </div>
      </Link>
      <button className="delete_item" value={title} onClick={props.delete_book()}>
        <DeleteForeverIcon/>
      </button>
    </Card>
  );
}

export default ExpenseItem;

