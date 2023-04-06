import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import { allSales, pendingSale, preparingSale } from './mocks/sales.mocks';
import { sellerUser } from './mocks/users.mock';
import Seller from '../pages/Seller';
import OrderDetails from '../pages/OrderDetails';

jest.mock('axios');

describe('Order details tests suites', () => {
  it('should be able to interact successfully with the page when the order is pending', async () => {
    localStorage.setItem('user', JSON.stringify(sellerUser));
    axios.get.mockResolvedValue(pendingSale);
    await act(async () => renderWithRouterAndProvider(<OrderDetails />, '/seller/orders/1'));
    await act(async () => userEvent.click(screen.getByTestId('seller_order_details__button-preparing-check')));
  });

  it('should be able to interact successfully with the page when the order is preparing', async () => {
    localStorage.setItem('user', JSON.stringify(sellerUser));
    axios.get.mockResolvedValue(preparingSale);
    await act(async () => renderWithRouterAndProvider(<OrderDetails />, '/seller/orders/1'));
    await act(async () => userEvent.click(screen.getByTestId('seller_order_details__button-dispatch-check')));
  })
});
