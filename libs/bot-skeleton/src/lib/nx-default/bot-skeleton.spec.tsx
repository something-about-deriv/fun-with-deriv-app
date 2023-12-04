import { render } from '@testing-library/react';

import BotSkeleton from './bot-skeleton';

describe('BotSkeleton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BotSkeleton />);
    expect(baseElement).toBeTruthy();
  });
});
