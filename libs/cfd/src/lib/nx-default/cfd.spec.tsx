import { render } from '@testing-library/react';

import Cfd from './cfd';

describe('Cfd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cfd />);
    expect(baseElement).toBeTruthy();
  });
});
