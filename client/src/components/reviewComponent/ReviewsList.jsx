import React from 'react';
import Sorting from './Sorting.jsx'
import ReviewTile from './ReviewsTile.jsx'

const ReviewsList = (props) => {
  return (
    <div className="reviews-list">
      <Sorting product={props.product} sorting={(input) => props.sorting(input)}/>
      <ReviewTile product={props.product} showModal={() => props.showModal()} filter={props.filter}/>
    </div>
  )
}

export default ReviewsList;