
import React, { useState, useEffect } from 'react';
import axios from "axios";
import reviewsExample from './exampleData/reviews.js'
import { v4 as uuidv4 } from 'uuid';


const StarReview = (props) => {
  const { currentId } = props
  const [ratings, setRatings] = useState({})
  const [amtOfRevs, setAmtOfRevs] = useState(0)

  useEffect(() => {
    axios.get(`api/reviews/meta?product_id=${currentId}`)
      .then((res) => {
        setRatings(res.data.ratings)
      })
  }, [])

  useEffect(() => {
    axios.get(`api/reviews?product_id=${currentId}&count=100`)
      .then((res) => {
        setAmtOfRevs(res.data.results.length)
      })
  }, [])

  var reviewAmt = 0;
  var reviewScores = 0;
  if (Object.keys(ratings).length !== 0) {
    for (let key in ratings) {
      reviewAmt += Number(ratings[key])
      reviewScores += (Number(key) * (ratings[key]))
    }
  }

  return (
    <>
      <div className="myProductReviews">
        <div className="rating">
          <div className="rating-upper" style={{ width: ((reviewScores / reviewAmt).toFixed(2) / 5) * 100 + '%' }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className="rating-lower">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <a className="reviewAmt" href="#reviews" style={{ textDecoration: 'none', color: 'rgb(60, 60, 60)', display: 'flex', alignItems: 'flex-end' }}>View all {amtOfRevs} reviews...</a>
      </div>
    </>
  )
}


export default StarReview;

