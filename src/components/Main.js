import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import { getAuth,EmailAuthProvider,GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import LoginUI from "./Login/LoginUI";
import "../App.css"
import Card from "./UI/Card";

const config = {
  apiKey: "AIzaSyD_VfGlJvRQZAUiOHZ9O-wBdvdR42sBzW0",
  authDomain: "book-review-e6126.firebaseapp.com",
  projectId: "book-review-e6126",
  storageBucket: "book-review-e6126.appspot.com",
  messagingSenderId: "647350607844",
  appId: "1:647350607844:web:ba510518a08d2779e931f1",
  measurementId: "G-MK65SFKVWJ"
};

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};


const Main = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, user => {
      setIsSignedIn(!!user);
    });
    // return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  
  const firebaseapp = initializeApp(config);
  const auth = getAuth(firebaseapp);
  localStorage.setItem("auth",JSON.stringify("ashishbdhane@gmail.com"));
  const [expense, setExpense] = useState(JSON.parse(localStorage.getItem("details")) || [
    {
      // review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Maxime mollitia,molestiae quas vel.",
      name: 'Book 1',
      price: 'Author 1',
      user: 'Anonymous',
      genre: 'Novel',
      reviews: [
          {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Maxime mollitia,molestiae quas vel.",
            review_auth: 'Anonymous',
          }
        ],
      },
      {
        // review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Maxime mollitia,molestiae quas vel.",
        name: 'Book 2',
        price: 'Author 2',
        user: 'Anonymous',
        genre: 'Fiction',
        reviews: [
          {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Maxime mollitia,molestiae quas vel.",
            review_auth: 'Anonymous',
          }
        ],
      },
      {
        // review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Maxime mollitia,molestiae quas vel.",
        name: 'Book 3',
        price: 'Author 3',
        user: 'Anonymous',
        genre: 'Romance',
        reviews: [
          {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Maxime mollitia,molestiae quas vel.",
            review_auth: 'Anonymous',
          }
        ],
      }
  ]);
  if(JSON.parse(localStorage.getItem("details"))==null)
  {
    localStorage.setItem("details", JSON.stringify(expense));
  }
  

  // expense = localStorage.getItem('details');
  // expense = JSON.parse(localStorage.getItem("details"));

  const submitHandler = (newItem) => {
    // console.log(newItem);
    const arr=[...expense];
    newItem.user=auth.currentUser.displayName;
    arr.unshift(newItem)
    // console.log(arr);
    setExpense(arr);
    localStorage.setItem("details", JSON.stringify(arr));
  }

  const logout = () =>
  {
    signOut(auth);
  }


  if (!isSignedIn) {
    return (
      <Card className="login_page">
        <h1>Book Review</h1>
        <p style={{color:"#a892ee"}}>:Please sign-in:</p>
        <LoginUI uiConfig={uiConfig} firebaseAuth={auth} />
      </Card>
    );
  }

  const delete_book = (name) => {
    name.preventDefault();
    let temp=[...expense]; 
    temp.splice(temp.findIndex(a => a.name === name.currentTarget.value) , 1);
    localStorage.setItem("details", JSON.stringify(temp));
    // console.log(e.currentTarget.value);
    setExpense(temp);
  }

  return (
    <div>
      
      <h2 style={{textAlign: 'center'}}>Book Review</h2>
      {/* <NewReview submitHandler={submitHandler}/> */}
      <NewExpense submitHandler={submitHandler}/>
      <Expenses items={expense} delete_book={()=>delete_book}/>
      <div className="button-logout">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Main;
