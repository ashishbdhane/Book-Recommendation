import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useNavigate, Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getAuth,EmailAuthProvider,GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyD_VfGlJvRQZAUiOHZ9O-wBdvdR42sBzW0",
  authDomain: "book-review-e6126.firebaseapp.com",
  projectId: "book-review-e6126",
  storageBucket: "book-review-e6126.appspot.com",
  messagingSenderId: "647350607844",
  appId: "1:647350607844:web:ba510518a08d2779e931f1",
  measurementId: "G-MK65SFKVWJ"
};


function ExpenseItem(props) {


const navigate = useNavigate();

  const [title, setTitle] = useState(props.title);
  const firebaseapp = initializeApp(config);
  const auth = getAuth(firebaseapp);
  const admin=JSON.parse(localStorage.getItem("auth"));
  const user= auth.currentUser.email;
  const permission=(user===admin);

  
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
      {
          permission && 
          <button className="delete_item" value={title} onClick={props.delete_book()}>
          <DeleteForeverIcon/>
          </button>
      }
    </Card>
  );
}

export default ExpenseItem;

