import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Jest is working', () => {
  expect(true).toBeTruthy();
});

test('Check title loads', () => {
  render(<App></App>);
  screen.getByText('Tile Generator');
});
