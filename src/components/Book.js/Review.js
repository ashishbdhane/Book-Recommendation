import React from "react";
import "./Review.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from "../UI/Card";
import { getAuth} from "firebase/auth";
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

function Review(props) {  
    const firebaseapp = initializeApp(config);
    const auth = getAuth(firebaseapp);
    const admin=JSON.parse(localStorage.getItem("auth"));
    const user= auth.currentUser.email;
    console.log(user);
    const permission=(user===admin); 
  
    
    return (
        <Card className="expense-item no_name">
            <p className='review'>    
                {props.review} <span className="user__writer"> - {props.name}</span>
            </p>
            {permission &&
                <button className="delete_item hihi">
            <DeleteForeverIcon/>
            </button>
            }
        </Card>
    );
}

export default Review;