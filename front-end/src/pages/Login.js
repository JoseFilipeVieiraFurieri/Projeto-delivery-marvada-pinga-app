import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import FormEmail from '../components/login/FormEmail';
import FormPassword from '../components/login/FormPassword';
import AppContext from '../context/AppContext';

function Login() {
  const { email, password } = React.useContext(AppContext);
  const [hideDeniedLogin, setHideDeniedLogin] = React.useState(true);
  const history = useHistory();

  const magicNumber = 6;
  const validInputs = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    && password.length >= magicNumber;

  const handleUser = async () => {
    try {
      const user = await axios.post('http://localhost:3001/user/login', {
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(user.data));
      if (user.data.role === 'administrator') {
        history.push('/admin/manage');
      }
      if (user.data.role === 'customer') {
        history.push('/customer/products');
      }
      if (user.data.role === 'seller') {
        history.push('/seller/orders');
      }
    } catch (error) {
      console.log(error);
      setHideDeniedLogin(false);
    }
  };

  const handleRedirect = () => {
    history.push('/register');
  };

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      history.push('/customer/products');
    }
  }, [history]);

  return (
    <div>
      <FormEmail dataTestId="common_login__input-email" />
      <FormPassword dataTestId="common_login__input-password" />
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
        onClick={ handleRedirect }
      >
        Ainda não tenho conta
      </button>
      <p
        hidden={ hideDeniedLogin }
        data-testid="common_login__element-invalid-email"
      >
        Login Inválido
      </p>
    </div>
  );
}

export default Login;
