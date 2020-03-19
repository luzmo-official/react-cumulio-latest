import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  const { getByText } = render(<App debug={true}/>);
  const element = getByText(/Your application/i);
  expect(element).toBeInTheDocument();
});
