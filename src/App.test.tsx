import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  test('Should render input field and add button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Add Task' });
    const input = screen.getByRole('textbox', { name: 'New Task' });

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('Should add task to list', async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole('button', { name: 'Add Task' });
    const input = screen.getByRole('textbox', { name: 'New Task' });

    await user.type(input, 'New Task adding');
    await user.click(button);
    await waitFor(() => {
      expect(screen.getByText('New Task adding')).toBeInTheDocument();
    });
  });
});
