import { render } from '@testing-library/react';

import Appstore from './appstore';

describe('Appstore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Appstore />);
    expect(baseElement).toBeTruthy();
  });
});
