import PropTypes from 'prop-types';
import React from 'react';
import AppContext from '../../context/AppContext';

function TableItem(props) {
  const {
    context: { name, syncAmount, price },
    id,
  } = props;

  const { setProductsToCheckout } = React.useContext(AppContext);

  function handleRemoval() {
    return function handler() {
      const checkoutList = JSON.parse(localStorage.getItem('checkout'));
      checkoutList.splice(id, 1);
      localStorage.setItem('checkout', JSON.stringify(checkoutList));
      setProductsToCheckout([...checkoutList]);
    };
  }
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      >
        {id + 1}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${id}` }>
        {name}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${id}` }>
        {syncAmount}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
      >
        {String(price).replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      >
        {String(
          (
            Math.round((price * syncAmount + Number.EPSILON) * 100) / 100
          ).toFixed(2),
        ).replace('.', ',')}
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${id}` }
          type="button"
          onClick={ handleRemoval() }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

TableItem.propTypes = {
  context: PropTypes.shape({
    name: PropTypes.string.isRequired,
    syncAmount: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default TableItem;
