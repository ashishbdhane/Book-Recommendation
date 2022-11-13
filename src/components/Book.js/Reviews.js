import {React, Fragment, useState} from 'react'
import NewReview from "./NewReview";
import ReviewsList from './ReviewsList';
import { useNavigate, Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth,EmailAuthProvider,GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import {useParams} from 'react-router-dom';
import { auth } from 'firebaseui';

const config = {
  apiKey: "AIzaSyD_VfGlJvRQZAUiOHZ9O-wBdvdR42sBzW0",
  authDomain: "book-review-e6126.firebaseapp.com",
  projectId: "book-review-e6126",
  storageBucket: "book-review-e6126.appspot.com",
  messagingSenderId: "647350607844",
  appId: "1:647350607844:web:ba510518a08d2779e931f1",
  measurementId: "G-MK65SFKVWJ"
};


const Reviews = () => {
  const params=useParams();
  const firebaseapp = initializeApp(config);
  const auth = getAuth(firebaseapp);
   const [expense,setExpense]=useState(JSON.parse(localStorage.getItem("details")));
    const [filteredData,setFilteredData]= useState(expense.filter(el => el.name===params.id)[0]);
    const submitHandler = (newItem) => {
      // const arr=[newItem.Review, ...filteredData]/
      // const arr = { ...filteredData }
      // if(arr.reviews)
      let name=auth.currentUser.displayName;
      let infoReview = {
        review_auth: name,
        review: newItem.Review,
      }
    //   arr.reviews.unshift(newItem.Review);
    // else
    //   arr.reviews=[newItem.Review];
    //   setFilteredData(arr);
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
      // console.log(arr);
      // setFilteredData(arr);
      // const arr={...expense}
      setExpense(arr);

    localStorage.setItem("details", JSON.stringify(arr));
  }
  // console.log(filteredData);
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