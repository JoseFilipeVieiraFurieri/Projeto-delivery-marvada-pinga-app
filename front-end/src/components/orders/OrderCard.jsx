import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard(props) {
  const { clientOrder } = props;
  console.log(clientOrder);
  return (
    <Link to={ `/customer/orders/${clientOrder.id}` }>
      <div
        data-testid={ `customer_orders__element-order-id-${clientOrder.id}` }
      >
        {clientOrder.id}
      </div>
      <div
        data-testid={ `customer_orders__element-delivery-status-${clientOrder.id}` }
      >
        {clientOrder.status}
      </div>
      <div>
        <div
          data-testid={ `customer_orders__element-order-date-${clientOrder.id}` }
        >
          {new Date(clientOrder.saleDate).toLocaleDateString('pt-BR')}
        </div>
        <div
          data-testid={ `customer_orders__element-card-price-${clientOrder.id}` }
        >
          {clientOrder.totalPrice.replace('.', ',')}
        </div>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  clientOrder: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
