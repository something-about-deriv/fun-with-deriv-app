import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyNotification from '../empty-notification';

describe('EmptyNotification Component', () => {
    it('should render EmptyNotification component', () => {
        render(<EmptyNotification />);
        const text = screen.getByText(/no notifications/i);
        expect(text).toBeInTheDocument();
    });

    it('should render the "IcBell" Icon', () => {
        render(<EmptyNotification />);
        const icon = screen.getByTestId('dt_ic_box_icon');
        expect(icon).toBeInTheDocument();
    });
});
