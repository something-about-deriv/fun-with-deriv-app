import { render } from '@testing-library/react';

import BotWebUi from './bot-web-ui';

describe('BotWebUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BotWebUi />);
    expect(baseElement).toBeTruthy();
  });
});
