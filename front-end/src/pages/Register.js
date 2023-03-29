import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import FormEmail from '../components/login/FormEmail';
import FormPassword from '../components/login/FormPassword';
import FormName from '../components/register/FormName';
import AppContext from '../context/AppContext';

function Register() {
  const { email, password, name } = React.useContext(AppContext);
  const [hideDeniedRegister, setHideDeniedRegister] = React.useState(true);
  const history = useHistory();

  const passwordLength = 6;
  const nameLength = 12;
  const validInputs = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
  && password.length >= passwordLength && name.length >= nameLength;

  const handleSingIn = async () => {
    try {
      await axios.post('http://localhost:3001/user/register', {
        email,
        password,
        name,
      });
      history.push('/customer/products');
    } catch (error) {
      console.log(error.response);
      setHideDeniedRegister(false);
    }
  };

  return (
    <div>
      <FormName dataTestId="common_register__input-name" />
      <FormEmail dataTestId="common_register__input-email" />
      <FormPassword dataTestId="common_register__input-password" />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ !validInputs }
        onClick={ handleSingIn }
      >
        Cadastrar
      </button>
      <p
        hidden={ hideDeniedRegister }
        data-testid="common_register__element-invalid_register"
      >
        Usuário já cadastrado
      </p>
    </div>
  );
}

export default Register;
