import React, { useState, useEffect } from 'react';
import axios from 'axios'
import StarBars from './StarBars.jsx'
import Characteristics from './Characteristics.jsx'
import './style.css';

const StarsRating = (props) => {
  const [metaData, setMetaData] = useState({})
  const [ratings, setRatings] = useState({})
  const [recommend, setRecommend] = useState({})
  const [characteristics, setCharacteristics] = useState({})
  const [charFit, setCharFit] = useState({})
  const [charLength, setCharLength] = useState({})
  const [charComfort, setCharComfort] = useState({})
  const [charQuality, setCharQuality] = useState({})
  const [charWidth, setCharWidth] = useState({})
  const [charSize, setCharSize] = useState({})

  const arrOfRatings = [];

  useEffect(() => {
    axios.get(`api/reviews/meta?product_id=${props.productId}`)
      .then((response) => {
        setMetaData(response.data)
        setRatings(response.data.ratings)
        setRecommend(response.data.recommended)
        setCharacteristics(response.data.characteristics)
      })
  }, [])

  useEffect(() => {
    setCharFit(characteristics.Fit);
    setCharLength(characteristics.Length);
    setCharComfort(characteristics.Comfort);
    setCharQuality(characteristics.Quality);
    setCharWidth(characteristics.Width);
    setCharSize(characteristics.Size);
    props.ids(characteristics)
  }, [characteristics])

  // ratings.characteristics
  // ratings.ratings
  // ratings.recommended

  // Creating the Average Rating points
  var totalNumReviews = 0; // total number of reviews
  var totalRatingPoints = 0;

  if (Object.keys(ratings).length !== 0) {
    for (let key in ratings) {
      totalNumReviews += parseInt(ratings[key])
      totalRatingPoints += parseInt((key * ratings[key]))
    }
  }

  let maxItem = 0;

  if (ratings) {
    // checking if there are any missing numbers and if make it 0
    for (let i = 1; i < 6; i++) {
      if (!ratings[i]) {
        ratings[i] = '0'
      }
    }
    // getting the largest value
    let maxNum = Number(ratings[1]);
    for (let key in ratings) {
      if (maxNum < Number(ratings[key])) {
        maxNum = Number(ratings[key])
      }
    }
    maxItem = maxNum;
    // creating an array of objs for StarBars
    for (let j = 5; j >= 1; j--) {
      let obj = {}
      obj['number'] = j;
      obj['value'] = ratings[j];
      arrOfRatings.push(obj)
    }
  }



  return (
    <>
      <div className="ratings">
      <p className="rating-point">{(totalRatingPoints / totalNumReviews).toFixed(1)}</p>
      <div className="rating">
          <div className="rating-upper" style={{ width: (totalRatingPoints / totalNumReviews).toFixed(1) * 20 + '%' }}>
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
      </div>
      <p className="reviews-body">{Math.ceil(((Number(recommend.true) / (Number(recommend.false) + Number(recommend.true))).toFixed(2) * 100))}% of reviews recommend this product</p>
      {arrOfRatings.length > 0 ? arrOfRatings.map((rating, id) => (
        <StarBars key={id} rating={rating} maxItem={maxItem} filterList={(number) => props.filterList(number)}/>
      )) : null}
      {characteristics ? <Characteristics Fit={charFit} Length={charLength} Comfort={charComfort} Quality={charQuality} Size={charSize} Width={charWidth}/> : null}
    </>
  )
}

export default StarsRating;