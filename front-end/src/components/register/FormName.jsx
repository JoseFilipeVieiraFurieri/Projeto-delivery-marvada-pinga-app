import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function FormName({ dataTestId }) {
  const { setName } = React.useContext(AppContext);
  return (
    <label htmlFor="text-input">
      Nome
      <input
        type="text"
        name="text-input"
        data-testid={ dataTestId }
        onChange={ (e) => setName(e.target.value) }
      />
    </label>
  );
}

FormName.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default FormName;
