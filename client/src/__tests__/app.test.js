import {render, screen} from '@testing-library/react';
import React from 'react';
import App from '../components/App.jsx'

it("Should render App with no errors", () => {
  render(<App />)
})