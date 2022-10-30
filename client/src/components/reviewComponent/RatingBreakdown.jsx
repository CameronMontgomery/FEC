import React,{ useState, useEffect } from 'react';
import StarsRating from './StarsRating.jsx'

const RatingBreakdown = (props) => {
  return (
    <div className="reviews">
      <StarsRating product={props.product} productId={props.productId} ids={(input) => props.ids(input)} filterList={(number) => props.filterList(number)}/>
    </div>
  )
}

export default RatingBreakdown;