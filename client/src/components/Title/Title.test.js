import React from 'react';
import { render } from '@testing-library/react';

import Title from './Title';

describe('Title', () => {
  test('renders Title component', () => {
    render(<Title />);
  });
});
