import React from "react";
import "./Review.css"


function Review(props) {  
    return (
        <p className='review'>
            {props.review} <span className="user__writer"> - {props.name}</span>
        </p>
    );
}

export default Review;