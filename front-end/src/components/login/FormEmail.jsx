import React from 'react';
import AppContext from '../../context/AppContext';

function EmailForm() {
  const { setEmail } = React.useContext(AppContext);
  return (
    <label htmlFor="email-input">
      <input
        type="email"
        name="email-input"
        data-testid="common_login__input-email"
        onChange={ (e) => setEmail(e.target.value) }
      />
    </label>
  );
}

export default EmailForm;
