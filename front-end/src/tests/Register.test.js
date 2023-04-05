import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import Register from '../pages/Register';
import { customerUser } from './mocks/users.mock';

const NAME_TEST_ID = 'common_register__input-name';
const EMAIL_TEST_ID = 'common_register__input-email';
const PASSWORD_TEST_ID = 'common_register__input-password';
const REGISTER_BTN_TEST_ID = 'common_register__button-register';

jest.mock('axios');

describe('Admin test suites', () => {
  it('should render all the expected elements', () => {
    renderWithRouterAndProvider(<Register />, '/register');

    expect(screen.getByTestId(NAME_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(EMAIL_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(PASSWORD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(REGISTER_BTN_TEST_ID)).toBeInTheDocument();
  });

  it('should redirect a user when the register is successful', async () => {
    const { history } = renderWithRouterAndProvider(<Register />, '/register');

    axios.post.mockResolvedValueOnce(customerUser);

    const nameInput = screen.getByTestId(NAME_TEST_ID);
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const registerBtn = screen.getByTestId(REGISTER_BTN_TEST_ID);

    userEvent.type(nameInput, 'Cliente Zé Birita');
    userEvent.type(emailInput, 'zebirita@email.com');
    userEvent.type(passwordInput, '$#zebirita#$');
    await act(async () => userEvent.click(registerBtn));

    expect(history.location.pathname).toBe('/customer/products');
  });

  it('should render an error message if the user doesn\'t exist', async () => {
    renderWithRouterAndProvider(<Register />, '/register');

    axios.post.mockImplementation(new Error('invalid login'));

    const nameInput = screen.getByTestId(NAME_TEST_ID);
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const registerBtn = screen.getByTestId(REGISTER_BTN_TEST_ID);

    userEvent.type(nameInput, 'Jao Top Cliente Maneiro');
    userEvent.type(emailInput, 'jao@deliveryapp.com');
    userEvent.type(passwordInput, 'jaozinhotop@123');
    await act(async () => userEvent.click(registerBtn));

    expect(screen.getByTestId('common_register__element-invalid_register')).toBeInTheDocument();
  });

})