import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Form } from '../components/Form';

describe('Form', () => {
  const mockOnSubmit = jest.fn();

  test('renders form', () => {
    const formComponent = render(<Form onSubmit={mockOnSubmit} />);
    expect(formComponent).toMatchSnapshot();
  });

  test('renders form with default values', async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<Form onSubmit={mockOnSubmit} />);

    await act(async () => {
      fireEvent.change(getByTestId('name'), {
        target: { value: 'Furkan Alp' },
      });
      fireEvent.change(getByTestId('surname'), {
        target: { value: 'Tokac' },
      });
      fireEvent.change(getByTestId('password'), {
        target: { value: '1234567' },
      });
    });

    await act(async () => {
      fireEvent.click(getByTestId('submit'));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
    expect(mockOnSubmit.mock.calls[0][0]).toEqual({
      name: 'Furkan Alp',
      surname: 'Tokac',
      password: '1234567',
    });
  });
});
