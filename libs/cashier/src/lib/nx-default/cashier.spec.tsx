import { render } from '@testing-library/react';

import Cashier from './cashier';

describe('Cashier', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cashier />);
    expect(baseElement).toBeTruthy();
  });
});
