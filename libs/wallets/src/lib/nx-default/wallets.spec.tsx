import { render } from '@testing-library/react';

import Wallets from './wallets';

describe('Wallets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Wallets />);
    expect(baseElement).toBeTruthy();
  });
});
