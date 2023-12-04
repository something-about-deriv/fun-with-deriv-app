import { render } from '@testing-library/react';

import Translations from './translations';

describe('Translations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Translations />);
    expect(baseElement).toBeTruthy();
  });
});
