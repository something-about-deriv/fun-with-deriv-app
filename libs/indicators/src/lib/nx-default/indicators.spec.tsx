import { render } from '@testing-library/react';

import Indicators from './indicators';

describe('Indicators', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Indicators />);
    expect(baseElement).toBeTruthy();
  });
});
