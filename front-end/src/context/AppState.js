import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppState({ children }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const states = React.useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
    }),

    [
      email,
      password,
    ],
  );

  return (
    <AppContext.Provider value={ states }>{children}</AppContext.Provider>
  );
}

AppState.propTypes = { children: PropTypes.shape() }.isRequired;

export default AppState;
