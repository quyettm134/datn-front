import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import OrderDetails from './OrderDetails';
import configureStore from '../../redux/configureStore';

const store = configureStore();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

describe('OrderDetails', () => {
  it('renders order details correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <OrderDetails />
        </Router>
      </Provider>
    );

    expect(screen.getByText('ORDER #1')).toBeInTheDocument();
  });
});
