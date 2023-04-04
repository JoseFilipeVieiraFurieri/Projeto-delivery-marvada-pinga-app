import React from 'react';
import axios from 'axios';
import NavBar from '../components/products/NavBar';
import OrderDeck from '../components/orders/OrderDeck';

function Orders() {
  const [clientOrders, setClientOrders] = React.useState([]);

  const fetchData = React.useCallback(async () => {
    const ordersList = await axios.get('http://localhost:3001/sales');
    setClientOrders([...ordersList.data]);
  }, [setClientOrders]);

  React.useEffect(() => {
    fetchData();
  }, [setClientOrders, fetchData]);

  return (
    <div>
      <NavBar />
      <OrderDeck clientOrders={ clientOrders } />
    </div>
  );
}

export default Orders;
