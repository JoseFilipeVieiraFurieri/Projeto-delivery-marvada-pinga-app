import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppState({ children }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('seller');
  const [productsToCheckout, setProductsToCheckout] = React.useState([]);

  const states = React.useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      name,
      setName,
      type,
      setType,
      productsToCheckout,
      setProductsToCheckout,
    }),

    [
      email,
      password,
      name,
      type,
      productsToCheckout,
    ],
  );

  return (
    <AppContext.Provider value={ states }>{children}</AppContext.Provider>
  );
}

AppState.propTypes = { children: PropTypes.shape() }.isRequired;

export default AppState;
