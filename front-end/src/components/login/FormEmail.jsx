import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function EmailForm({ dataTestId }) {
  const { setEmail } = React.useContext(AppContext);
  return (
    <label htmlFor="email-input">
      Email
      <input
        type="email"
        name="email-input"
        data-testid={ dataTestId }
        onChange={ (e) => setEmail(e.target.value) }
      />
    </label>
  );
}

EmailForm.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default EmailForm;
