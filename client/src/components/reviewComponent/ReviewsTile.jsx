import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { format, parseISO } from 'date-fns';
import Helpful from './Helpful.jsx'
import Stars from './Stars.jsx'

const ReviewsTile = (props) => {
  const { showModal } = props;
  const [count, setCount] = useState(2)
  const [reviewsOpen, setReviewOpen] = useState(2)
  let stars = '';

  function filtering(data) {
    if (props.filter.includes(data.rating)) {
      return true;
    } else if (props.filter.length === 0) {
      return true
    }
  }

  useEffect(() => {
    if (props.filter.length > 0) {
      setReviewOpen(props.product.length)
    } else {
      setReviewOpen(count)
    }
  }, [props.filter])

  // 66647
  return (
    <>
      <div className="reviews-scroll">
      {props.product.filter((data, index) => (index < reviewsOpen && filtering(data))).map((data, i) => {
        return (<div key={i + 1000000} className="tile">
          <div className="tile-header">
            <div>
              <Stars rating={data.rating}/>
            </div>
            <div>
              <small>{data.reviewer_name}, {format(parseISO(data.date), 'MMM d\, YYY')}</small>
            </div>
          </div>


          <h4 className="tile-summary">{data.summary}</h4>

          <p className="tile-body">{data.body}</p>
          {data.recommend ? <p>✓ I recommend this product</p> : null}
          {data.response ? <div className="response">
            <><b>Response: </b>  <p>{data.response}</p> </>
          </div> : null}

          <Helpful data={data.helpfulness} style={{cursor: 'pointer'}}/>

          <hr></hr>
          </div>
      )})}

      </div>
      {reviewsOpen <= props.product.length ? <button className="reviews-button" onClick={(e) => {e.preventDefault(); setReviewOpen(reviewsOpen + 2); setCount(count + 2)}}>MORE REVIEWS</button> : null}
      <button className="reviews-button" onClick={(e) => {e.preventDefault(); showModal()}}>ADD A REVIEW + </button>
    </>
  )
}

export default ReviewsTile;