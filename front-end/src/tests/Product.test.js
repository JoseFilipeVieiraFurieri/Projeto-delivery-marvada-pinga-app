import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import { allUsers, customerUser } from './mocks/users.mock';
import products from './mocks/products.mocks';

const ADD_BTN_TEST_ID = 'customer_products__button-card-add-item-1';
const QUANTITY_INPUT_TEST_ID = 'customer_products__input-card-quantity-1';
const RM_BTN_TEST_ID = 'customer_products__button-card-rm-item-1';
const BUY_BTN_TEST_ID = 'customer_products__button-cart';
const LOGOUT_BTN_TEST_ID = 'customer_products__element-navbar-link-logout';

const CHECKOUT_DROPDOWN_TEST_ID = 'customer_checkout__select-seller';
const ADDRESS_INPUT_TEST_ID = 'customer_checkout__input-address';
const ADDRESS_NUMBER_INPUT_TEST_ID = 'customer_checkout__input-address-number';
const FINISH_ORDER_BTN_TEST_ID = 'customer_checkout__button-submit-order';
const RM_ITEM_BTN_TEST_ID = 'customer_checkout__element-order-table-remove-0';

jest.mock('axios');

describe('Product test suites', () => {
  it('should be able to interact with the quantity and go to the next page', async () => {
    localStorage.setItem('user', JSON.stringify(customerUser));
    axios.get.mockResolvedValueOnce(products);

    await act(async () => renderWithRouterAndProvider(<Products />, '/customer/products'));
    // const { history } = renderWithRouterAndProvider(<Products />, '/customer/products');

    const quantityInput = screen.getByTestId(QUANTITY_INPUT_TEST_ID);
    const secondQuantityInput = screen.getByTestId('customer_products__input-card-quantity-2');
    const addBtn = screen.getByTestId(ADD_BTN_TEST_ID);
    const rmBtn = screen.getByTestId(RM_BTN_TEST_ID);
    const buyBtn = screen.getByTestId(BUY_BTN_TEST_ID);

    userEvent.click(addBtn);
    userEvent.click(rmBtn);
    userEvent.type(quantityInput, '5');
    userEvent.type(quantityInput, '2');
    userEvent.type(secondQuantityInput, '10');

    await act(async () => userEvent.click(buyBtn));

    
    axios.get.mockResolvedValueOnce(allUsers);
    await act(async () => renderWithRouterAndProvider(<Checkout />, '/customer/checkout'));
    // checkout tests

    const userDropdown = screen.getByTestId(CHECKOUT_DROPDOWN_TEST_ID);
    const addressInput = screen.getByTestId(ADDRESS_INPUT_TEST_ID);
    const addressNumber = screen.getByTestId(ADDRESS_NUMBER_INPUT_TEST_ID);
    const finishOrderBtn = screen.getByTestId(FINISH_ORDER_BTN_TEST_ID);
    const rmItemBtn = screen.getByTestId(RM_ITEM_BTN_TEST_ID);


    userEvent.click(rmItemBtn);
    fireEvent.change(userDropdown, { target: { value: '1' } });
    userEvent.type(addressInput, 'Rua da margura');
    userEvent.type(addressNumber, '300');
    await act(async () => userEvent.click(finishOrderBtn));
  });

  it('should be able to interact with the quantity if there are items already and logout', async () => {
    localStorage.setItem('user', JSON.stringify(customerUser));
    localStorage.setItem('checkout', '[{"name":"Skol Lata 250ml","syncAmount":4,"price":"2.20","id":1}]');
    axios.get.mockResolvedValue(products);

    await act(async () => renderWithRouterAndProvider(<Products />, '/customer/products'));

    const quantityInput = screen.getByTestId(QUANTITY_INPUT_TEST_ID);
    const addBtn = screen.getByTestId(ADD_BTN_TEST_ID);
    const logOutBtn = screen.getByTestId(LOGOUT_BTN_TEST_ID);

    userEvent.click(addBtn);
    userEvent.click(addBtn);
    userEvent.click(addBtn);
    userEvent.clear(quantityInput);

    userEvent.type(quantityInput, '2');

    userEvent.click(logOutBtn);
  });
});