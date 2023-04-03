import React from 'react';
import PropTypes from 'prop-types';

function SaleCard({ id, status, deliveryAddress, deliveryNumber, saleDate, totalPrice }) {
  return (
    <div>
      <div>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{`Pedido ${id}`}</p>
      </div>
      <div>
        <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{ status }</p>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>{ saleDate }</p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>{ totalPrice }</p>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>
          {`${deliveryAddress}, ${deliveryNumber}`}
        </p>
      </div>
    </div>
  );
}

export default SaleCard;

SaleCard.propTypes = {
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
