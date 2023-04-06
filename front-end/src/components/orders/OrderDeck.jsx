import PropTypes from 'prop-types';
import OrderCard from './OrderCard';

function OrderDeck(props) {
  const { clientOrders } = props;
  return (
    <>
      {clientOrders.map((e) => (
        <div key={ e.id }>
          <OrderCard clientOrder={ e } />
        </div>
      ))}
    </>
  );
}

OrderDeck.propTypes = {
  clientOrders: PropTypes.shape([]).isRequired,
};

export default OrderDeck;
