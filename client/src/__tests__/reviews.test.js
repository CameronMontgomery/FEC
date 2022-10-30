import {render, screen} from '@testing-library/react';
import React from 'react';
import Reviews from '../components/reviewComponent/Sorting.jsx';

const dummyProduct = {
  "id": 66648,
  "campus": "hr-rfc",
  "name": "Blues Suede Shoes",
  "slogan": "2019 Stanley Cup Limited Edition",
  "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
  "category": "Dress Shoes",
  "default_price": "120.00",
  "created_at": "2022-03-31T21:13:15.875Z",
  "updated_at": "2022-03-31T21:13:15.875Z"
}

it("Should show question component heading", () => {
  render(<Reviews product={dummyProduct}/>);
  const heading = screen.getByTestId('sorting');
});