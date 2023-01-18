import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('test for Calculator Component', () => {
  it('should render Calculator Component', () => {
    expect(render(<Calculator />)).toMatchSnapshot();
  });
});
