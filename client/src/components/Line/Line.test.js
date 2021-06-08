import React from 'react';
import { render } from '@testing-library/react';

import Line from './Line';

describe('Line', () => {
  const data = { id: 'test', name: 'test', promo_code: 'test' };
  test('renders Line component', () => {
    render(<Line data={data} />);
  });
});
