import React from 'react';
import PropTypes from 'prop-types';
import TableItem from './TableItem';

function CheckOutTable(props) {
  const { productsToCheckout, handleRemoval } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {productsToCheckout.map((e, index) => (
          <TableItem
            context={ e }
            id={ index }
            key={ index }
            handleRemoval={ handleRemoval }
          />
        ))}
      </tbody>
    </table>
  );
}

CheckOutTable.propTypes = {
  productsToCheckout: PropTypes.shape([]).isRequired,
  handleRemoval: PropTypes.func.isRequired,
};

export default CheckOutTable;
