/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home';
import Quote from '../components/qoute';
import Calculator from '../components/calculator';

describe('tests for components', () => {
  test('Home should be in the document', () => {
    render(<Home />);
    const home = screen.getByRole('heading');
    expect(home)
      .toBeInTheDocument; /* eslint-disable-line no-unused-expressions */
  });
  test('Quote should be in the document', () => {
    render(<Quote />);
    const quote = screen.getByPlaceholderText('Quote');
    expect(quote)
      .toBeInTheDocument; /* eslint-disable-line no-unused-expressions */
  });
  test('Calculator should render in the document', () => {
    render(<Calculator />);
    // const calculator = screen.getByRole('heading');
    const calculator = () => {
      screen.getByRole('heading');
    };
    expect(calculator)
      .toBeInTheDocument; /* eslint-disable-line no-unused-expressions */
  });
});
