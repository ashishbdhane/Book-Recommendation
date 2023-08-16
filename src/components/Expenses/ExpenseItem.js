import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useNavigate, Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getAuth,EmailAuthProvider,GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyBnz3SENAblJDyR_mgQa0ojo0bwdIrZWyk",
  authDomain: "book-rec-e2973.firebaseapp.com",
  projectId: "book-rec-e2973",
  storageBucket: "book-rec-e2973.appspot.com",
  messagingSenderId: "205504538857",
  appId: "1:205504538857:web:42f3d0923852935b7c6878",
  measurementId: "G-B77NHV3K1F"
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

