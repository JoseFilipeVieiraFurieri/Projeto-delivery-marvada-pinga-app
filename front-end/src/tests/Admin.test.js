import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import renderWithRouterAndProvider from './helpers/renderWithRouterAndProvider';
import Admin from '../pages/Admin';

jest.mock('axios');

const EMAIL_TEST_ID = 'common_login__input-email';
const PASSWORD_TEST_ID = 'common_login__input-password';
const NAME_TEST_ID = 'common_login__button-login';
const DROPDOWN_TEST_ID = 'admin_manage__select-role';
const REGISTER_BTN_TEST_ID = 'admin_manage__button-register';

describe('Admin test suites', () => {
  
})