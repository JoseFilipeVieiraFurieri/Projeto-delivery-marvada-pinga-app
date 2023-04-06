import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import Admin from '../pages/Admin';
import { adminUser, allUsers } from './mocks/users.mock';

jest.mock('axios');

const NAME_TEST_ID = 'admin_manage__input-name';
const EMAIL_TEST_ID = 'admin_manage__input-email';
const PASSWORD_TEST_ID = 'admin_manage__input-password';
const DROPDOWN_TEST_ID = 'admin_manage__select-role';
const REGISTER_BTN_TEST_ID = 'admin_manage__button-register';

describe('Admin test suites', () => {
  it('should render all the expected elements', async () => {
    localStorage.setItem('user', JSON.stringify(adminUser));
    axios.get.mockResolvedValueOnce(allUsers);

    await act(async () => renderWithRouterAndProvider(<Admin />, '/admin/manage'));
    
    expect(screen.getByTestId(EMAIL_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(PASSWORD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(NAME_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(DROPDOWN_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(REGISTER_BTN_TEST_ID)).toBeInTheDocument();
  });

  it('should be able to create a new user', async () => {
    localStorage.setItem('user', JSON.stringify(adminUser));
    axios.get.mockResolvedValue(allUsers);

    await act(async () => renderWithRouterAndProvider(<Admin />, '/admin/manage'));

    const nameInput = screen.getByTestId(NAME_TEST_ID);
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const roleDropdown = screen.getByTestId(DROPDOWN_TEST_ID);
    const registerBtn = screen.getByTestId(REGISTER_BTN_TEST_ID);

    axios.post.mockResolvedValueOnce();

    userEvent.type(nameInput, 'João Gomes Correa da Silva');
    userEvent.type(emailInput, 'joao@gomes.com');
    userEvent.type(passwordInput, '123456@joao');
    fireEvent.change(roleDropdown, { target: { value: 'customer' }});
    await act(async () => userEvent.click(registerBtn));
  });

  it('should not be able to create a new when it already exists', async () => {
    localStorage.setItem('user', JSON.stringify(adminUser));
    axios.get.mockResolvedValue(allUsers);

    await act(async () => renderWithRouterAndProvider(<Admin />, '/admin/manage'));

    const nameInput = screen.getByTestId(NAME_TEST_ID);
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const registerBtn = screen.getByTestId(REGISTER_BTN_TEST_ID);

    axios.post.mockImplementation(new Error('usuário já existente'));

    userEvent.type(nameInput, 'João Gomes Correa da Silva');
    userEvent.type(emailInput, 'joao@gomes.com');
    userEvent.type(passwordInput, '123456@joao');
    await act(async () => userEvent.click(registerBtn));
    expect(screen.getByTestId('admin_manage__element-invalid-register')).toBeInTheDocument();
  });

  it('should be able to remove a user', async () => {
    localStorage.setItem('user', JSON.stringify(adminUser));
    axios.get.mockResolvedValue(allUsers);

    await act(async () => renderWithRouterAndProvider(<Admin />, '/admin/manage'));

    const deleteButton = screen.getAllByRole('button', { name: 'Excluir' })

    axios.delete.mockImplementation();
    
    await act(async () => userEvent.click(deleteButton[0]));
  })
})