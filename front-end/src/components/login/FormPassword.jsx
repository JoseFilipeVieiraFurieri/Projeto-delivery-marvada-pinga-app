import React from 'react';
import AppContext from '../../context/AppContext';

function PasswordForm() {
  const { setPassword } = React.useContext(AppContext);
  return (
    <label htmlFor="password-input">
      <input
        type="password"
        name="password-input"
        data-testid="common_login__input-password"
        onChange={ (e) => setPassword(e.target.value) }
      />
    </label>
  );
}

export default PasswordForm;
