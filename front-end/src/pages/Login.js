import React from 'react';
import FormEmail from '../components/login/FormEmail';
import FormPassword from '../components/login/FormPassword';
import AppContext from '../context/AppContext';

function Login() {
  const { email, password } = React.useContext(AppContext);

  const magicNumber = 6;
  const validInputs = email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) && password.length > magicNumber;

  const handleUser = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
  };
  return (
    <div>
      <FormEmail />
      <FormPassword />
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ !validInputs }
        onClick={ handleUser }
      >
        Entrar
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => {}}
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}

export default Login;