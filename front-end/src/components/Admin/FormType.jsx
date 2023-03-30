import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function FormType({ dataTestId }) {
  const { setType } = React.useContext(AppContext);
  return (
    <label htmlFor="type">
      <select
        name="type"
        data-testid={ dataTestId }
        onChange={ (e) => setType(e.target.value) }
      >
        <option value="seller">Vendedor</option>
        <option value="customer">Cliente</option>
        <option value="admin">Administrador</option>
      </select>

    </label>
  );
}

FormType.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default FormType;
