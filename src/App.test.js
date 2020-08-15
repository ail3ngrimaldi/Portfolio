import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Nav from '../src/components/Nav'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders a NavBar', () => {
//   const { getByText } = render(<NavBar />);
//   const linkElement = getByText(/This is a Nav Bar/i);
//   expect(linkElement).toBeInTheDocument();
// });
