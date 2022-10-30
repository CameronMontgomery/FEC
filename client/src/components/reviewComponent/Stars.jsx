import React, {useState, useEffect} from 'react';

const Stars = (props) => {
  var stars = '';
  for (let i = 0; i < props.rating; i++) {
      stars += '★'
    }
    if (stars.length !== 5) {
      while (stars.length < 5) {
        stars += '☆'
      }
    }

  return (
    <div>{stars}</div>
  )
}

export default Stars