import { render } from '@testing-library/react';

import Trader from './trader';

describe('Trader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Trader />);
    expect(baseElement).toBeTruthy();
  });
});
