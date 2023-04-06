import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import { allSales } from './mocks/sales.mocks';
import { sellerUser } from './mocks/users.mock';
import Seller from '../pages/Seller';

jest.mock('axios');

describe('Seller tests suites', () => {
  it('should render all sales cards', async () => {
    localStorage.setItem('user', JSON.stringify(sellerUser));
    axios.get.mockResolvedValueOnce(allSales);
    await act(async () => renderWithRouterAndProvider(<Seller />, '/seller/orders'));
    await act(async () => userEvent.click(screen.getByTestId('seller_orders__element-order-id-1')));
  })
});
