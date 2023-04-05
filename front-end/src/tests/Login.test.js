import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import Login from '../pages/Login';
import App from '../App';
import { adminUser, sellerUser, customerUser } from './mocks/users.mock';
import { singleFetch } from './helpers/mockFetch';
import { act } from 'react-dom/test-utils';

const EMAIL_TEST_ID = 'common_login__input-email';
const PASSWORD_TEST_ID = 'common_login__input-password';
const LOGIN_BTN_TEST_ID = 'common_login__button-login';
const REGISTER_BTN_TEST_ID = 'common_login__button-register';

jest.mock('axios');

describe('Login test suites', () => {
  it('should render all the expected elements', () => {
    renderWithRouterAndProvider(<Login />);

    expect(screen.getByTestId(EMAIL_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(PASSWORD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(LOGIN_BTN_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(REGISTER_BTN_TEST_ID)).toBeInTheDocument();
  });

  it('should redirect a user to the register page when asked to', () => {
    const { history } = renderWithRouterAndProvider(<Login />);

    expect(history.location.pathname).toBe('/');

    const registerBtn = screen.getByTestId(REGISTER_BTN_TEST_ID);

    userEvent.click(registerBtn);

    expect(history.location.pathname).toBe('/register');
  });

  it('should make a successful login when the prompted admin user exists in the database', async () => {
    const { history } = renderWithRouterAndProvider(<Login />);

    axios.post.mockResolvedValueOnce(adminUser);

    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const loginBtn = screen.getByTestId(LOGIN_BTN_TEST_ID);

    userEvent.type(emailInput, 'adm@deliveryapp.com');
    userEvent.type(passwordInput, '--adm2@21!!--');
    await act(async () => userEvent.click(loginBtn));

    expect(history.location.pathname).toBe('/admin/manage');
  });

  it('should make a successful login when the prompted customer user exists in the database', async () => {
    const { history } = renderWithRouterAndProvider(<Login />);

    axios.post.mockResolvedValueOnce(customerUser);

    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const loginBtn = screen.getByTestId(LOGIN_BTN_TEST_ID);

    userEvent.type(emailInput, 'zebirita@email.com');
    userEvent.type(passwordInput, '$#zebirita#$');
    await act(async () => userEvent.click(loginBtn));

    expect(history.location.pathname).toBe('/customer/products');
  });

  it('should make a successful login when the prompted seller user exists in the database', async () => {
    const { history } = renderWithRouterAndProvider(<Login />);

    axios.post.mockResolvedValueOnce(sellerUser);

    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const loginBtn = screen.getByTestId(LOGIN_BTN_TEST_ID);

    userEvent.type(emailInput, 'fulana@deliveryapp.com');
    userEvent.type(passwordInput, 'fulana@123');
    await act(async () => userEvent.click(loginBtn));

    expect(history.location.pathname).toBe('/seller/orders');
  });

  it('should render an error message if the user doesn\'t exist', async () => {
    const { history } = renderWithRouterAndProvider(<Login />);

    axios.post.mockImplementation(new Error('invalid login'));

    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const loginBtn = screen.getByTestId(LOGIN_BTN_TEST_ID);

    userEvent.type(emailInput, 'jao@deliveryapp.com');
    userEvent.type(passwordInput, 'jaozinhotop@123');
    await act(async () => userEvent.click(loginBtn));

    expect(screen.getByTestId('common_login__element-invalid-email')).toBeInTheDocument();
  });
});