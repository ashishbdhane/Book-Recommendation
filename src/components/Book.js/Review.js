import React from "react";
import "./Review.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from "../UI/Card";
import { getAuth} from "firebase/auth";
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