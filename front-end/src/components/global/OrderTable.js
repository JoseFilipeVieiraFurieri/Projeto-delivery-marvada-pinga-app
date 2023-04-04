import PropTypes from 'prop-types';
import React from 'react';

function OrderTable({ testId, tableData }) {
  return (
    <table>
      <thead>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </thead>
      <tbody>
        {
          tableData.product?.map((data, i) => (
            <tr key={ data.id }>
              <td
                data-testid={ `${testId.rowIndex}${i}` }
              >
                {i + 1}
              </td>
              <td data-testid={ `${testId.rowName}${i}` }>
                {data.name}
              </td>
              <td data-testid={ `${testId.rowQuantity}${i}` }>
                {data.SaleProduct.quantity}
              </td>
              <td data-testid={ `${testId.rowUnit}${i}` }>
                {data.price}
              </td>
              <td data-testid={ `${testId.rowTotal}${i}` }>
                {Number(data.price) * data.SaleProduct.quantity}
              </td>
            </tr>
          ))
        }
      </tbody>
      <div>
        <p data-testid={ testId.total }>
          {String(tableData?.totalPrice).replace('.', ',')}
        </p>
      </div>
    </table>
  );
}

OrderTable.propTypes = {
  tableData: PropTypes.shape({
    product: PropTypes.shape({
      map: PropTypes.func,
    }),
    totalPrice: PropTypes.string,
  }).isRequired,
  testId: PropTypes.shape({
    rowIndex: PropTypes.string,
    rowName: PropTypes.string,
    rowQuantity: PropTypes.string,
    rowTotal: PropTypes.string,
    rowUnit: PropTypes.string,
    total: PropTypes.string,
  }).isRequired,
};

export default OrderTable;
