import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductDetails from './ProductDetails';

describe('ProductDetails', () => {
  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore({
      product: {
        prod_name: 'Test Product',
        price: 10,
      },
    });
  });

  it('renders product details correctly', () => {
    render(
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$ 10')).toBeInTheDocument();
    expect(screen.getByText('Color: Black')).toBeInTheDocument();
  });

  it('dispatches fetchOneProduct action on mount', () => {
    render(
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    );

    expect(store.getActions()).toEqual([{ type: 'FETCH_ONE_PRODUCT', payload: { id: undefined } }]);
  });
});
