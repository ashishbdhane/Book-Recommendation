import {React, Fragment, useState} from 'react'
import NewReview from "./NewReview";
import ReviewsList from './ReviewsList';
import {Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {useParams} from 'react-router-dom';

const config = {
  apiKey: "AIzaSyBnz3SENAblJDyR_mgQa0ojo0bwdIrZWyk",
  authDomain: "book-rec-e2973.firebaseapp.com",
  projectId: "book-rec-e2973",
  storageBucket: "book-rec-e2973.appspot.com",
  messagingSenderId: "205504538857",
  appId: "1:205504538857:web:42f3d0923852935b7c6878",
  measurementId: "G-B77NHV3K1F"
};


const Reviews = () => {
  const params=useParams();
  const firebaseapp = initializeApp(config);
  const auth = getAuth(firebaseapp);
   const [expense,setExpense]=useState(JSON.parse(localStorage.getItem("details")));
    const [filteredData,setFilteredData]= useState(expense.filter(el => el.name===params.id)[0]);
    const submitHandler = (newItem) => {

      let name=auth.currentUser.displayName;
      let infoReview = {
        review_auth: name,
        review: newItem.Review,
      }

      const arr = expense.map(ele => {
        if(params.id===ele.name)
        {
          if(ele.reviews)
          {
            ele.reviews.unshift(infoReview);
          }
          else
          {
            ele.reviews=[infoReview];     
          }
        }
        return ele;
      })

      setExpense(arr);

    localStorage.setItem("details", JSON.stringify(arr));
  }
  console.log(filteredData);
    return (
      <Fragment>
     <h2 style={{textAlign: 'center'}}>{filteredData.name}</h2>
      
      <NewReview submitHandler={submitHandler}/>
      {
        filteredData.reviews && <ReviewsList expense={filteredData}/>
      }
      
      <div className="button-logout">
      <Link to={`/`}>
        <button>Back</button>
      </Link>
      </div>
    </Fragment>
  )
}

export default Reviews