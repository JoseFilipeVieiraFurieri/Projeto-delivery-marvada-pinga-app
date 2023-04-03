import PropTypes from 'prop-types';

function TableItem(props) {
  const {
    context: { name, syncAmount, price },
    id,
    handleRemoval,
  } = props;
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
          onClick={ handleRemoval(id) }
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
  id: PropTypes.string.isRequired,
  handleRemoval: PropTypes.func.isRequired,
};

export default TableItem;
