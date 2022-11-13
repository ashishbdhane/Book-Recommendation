import Review from "./Review";


function ReviewsList(props){
    return <ul className='expenses-list'>
    {
      props.expense.reviews.map((element) => (
        <Review
        review={element.review}
        name={element.review_auth}
        />    
        )) 
    }
  </ul>
}

export default ReviewsList;