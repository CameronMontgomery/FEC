import React, { useEffect, useState } from 'react';

const Sorting = (props) => {
  // RElevant should be on by default
  return (
    <div>
      <h3 data-testid="sorting" className="sorting">{props.product.length} reviews, sorted by
      <select onChange={(e) => props.sorting(e.target.value)} className="reviews-select">
        <option value="relevant">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>

      </select>
      </h3>
    </div>
  )
}

export default Sorting;