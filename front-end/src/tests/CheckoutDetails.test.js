import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import { customerUser } from './mocks/users.mock';
import singleSale from './mocks/singleSale.mock';
import CheckoutDetails from '../pages/CheckoutDetails';

jest.mock('axios');

describe('Checkout Details tests suites', () => {
  it('should render and mark the sale as delivered', async () => {
    localStorage.setItem('user', JSON.stringify(customerUser));
    axios.get.mockResolvedValue(singleSale);
    await act(async () => renderWithRouterAndProvider(<CheckoutDetails />, '/customer/orders/1'));
    await act(async () => userEvent.click(screen.getByTestId('customer_order_details__button-delivery-check')));
  })
});
