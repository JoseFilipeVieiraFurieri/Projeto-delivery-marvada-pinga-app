import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function PasswordForm({ dataTestId }) {
  const { setPassword } = React.useContext(AppContext);
  return (
    <label htmlFor="password-input">
      Senha
      <input
        type="password"
        name="password-input"
        data-testid={ dataTestId }
        onChange={ (e) => setPassword(e.target.value) }
      />
    </label>
  );
}

PasswordForm.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default PasswordForm;
