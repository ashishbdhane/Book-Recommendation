
import './DefaultNewReview.css';

function DefaultNewReview(props) { 
    return (
        <div className='new-expense'>
            <button className='default-button' onClick={props.returnDefault}> Add Review </button>
        </div>
    )
}


export default DefaultNewReview;