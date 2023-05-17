import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';

describe('Cart component', () => {
  test('renders empty cart message when cart is empty', () => {
    render(<Cart />);

    const emptyCartMessage = screen.getByText(/Your Cart is Empty/i);
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test('renders cart items when cart is not empty', () => {
    const mockCart = [
      {
        id: 1,
        name: 'Item 1',
        price: 10,
        quantity: 2,
      },
      {
        id: 2,
        name: 'Item 2',
        price: 20,
        quantity: 1,
      },
    ];

    render(<Cart />);

    useDispatch.mockReturnValue(mockCart);

    const item1 = screen.getByText(/Item 1/i);
    const item2 = screen.getByText(/Item 2/i);
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  test('calls handleRemoveItem when remove button is clicked', () => {
    const mockRemoveItem = jest.fn();

    const mockCart = [
      {
        id: 1,
        name: 'Item 1',
        price: 10,
        quantity: 2,
      },
    ];

    render(<Cart />);

    useDispatch.mockReturnValue(mockCart);
    removeItem.mockReturnValue(mockRemoveItem);

    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);

    expect(mockRemoveItem).toHaveBeenCalledWith(1);
  });

});
