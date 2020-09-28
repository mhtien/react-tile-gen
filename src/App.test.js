import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Jest is working', () => {
  expect(true).toBeTruthy();
});

test('Check title loads', () => {
  render(<App></App>);
  screen.getByText('Tile Generator');
});

test('add color picker', () => {
  render(<App></App>);
  const addButton = screen.getByText('+');
  fireEvent.click(addButton);
  screen.getByDisplayValue('#c4c4c4');
});
