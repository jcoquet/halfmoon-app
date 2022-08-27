/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleModeButton } from './toggleModeButton.component';
import App from '../routes';

describe('toggleModeButton', () => {
  it('should render a button', () => {
    render(<ToggleModeButton />);

    expect(
      screen.getByRole('button', { name: 'switch to dark mode' })
    ).toBeInTheDocument();
  });

  it('should use a moon icon as default', () => {
    render(<ToggleModeButton />);

    expect(
      screen.getByRole('img', { name: 'switch to dark mode' })
    ).toHaveAttribute('data-icon', 'moon');
  });

  it('should switch icon', () => {
    render(<ToggleModeButton />, { wrapper: App });

    expect(
      screen.getByRole('img', { name: 'switch to dark mode' })
    ).toHaveAttribute('data-icon', 'moon');

    userEvent.click(screen.getByRole('button'));

    expect(
      screen.getByRole('img', { name: 'switch to light mode' })
    ).toHaveAttribute('data-icon', 'sun');

    userEvent.click(screen.getByRole('button'));

    expect(
      screen.getByRole('img', { name: 'switch to dark mode' })
    ).toHaveAttribute('data-icon', 'moon');
  });
});
