import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import { allSales } from './mocks/sales.mocks';
import Orders from '../pages/Orders';
import { customerUser } from './mocks/users.mock';

jest.mock('axios');

describe('Order tests suites', () => {
  it('should be able to go the order details page', async () => {
    localStorage.setItem('user', JSON.stringify(customerUser));
    axios.get.mockResolvedValueOnce(allSales)
    await act(async () => renderWithRouterAndProvider(<Orders />, '/customer/orders'));
    await act(async () => userEvent.click(screen.getByTestId('customer_orders__element-order-id-1')));
  })
});
