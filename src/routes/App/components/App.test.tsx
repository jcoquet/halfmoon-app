/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('should display a h1', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Isalid Light Mode' })
    ).toBeInTheDocument();
  });

  describe('toggle mode', () => {
    it('should display a button to toggle mode', () => {
      render(<App />);

      expect(
        screen.getByRole('button', { name: 'switch to dark mode' })
      ).toBeInTheDocument();
    });

    it('should use light mode as default', () => {
      render(<App />);

      expect(document.getElementsByTagName('html')[0].classList).not.toContain(
        'dark-mode'
      );
      expect(
        screen.getByRole('heading', { name: 'Isalid Light Mode' })
      ).toBeInTheDocument();
    });

    it('should switch to dark mode', () => {
      render(<App />);

      userEvent.click(screen.getByRole('button'));

      expect(document.getElementsByTagName('html')[0].classList).toContain(
        'dark-mode'
      );
      expect(
        screen.getByRole('heading', { name: 'Isalid Dark Mode' })
      ).toBeInTheDocument();
    });
  });
});
