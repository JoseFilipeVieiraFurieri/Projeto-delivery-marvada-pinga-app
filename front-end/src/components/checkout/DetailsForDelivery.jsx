import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function DetailsForDelivery() {
  const history = useHistory();
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [deliveryNumber, setDeliveryNumber] = useState();

  const handleClick = async () => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    const localCheckout = JSON.parse(localStorage.getItem('checkout'));
    const totalPrice = localCheckout
      .reduce((sum, e) => (sum + (Number(e.price) * e.syncAmount)), 0).toFixed(2);
    const orderDetails = localCheckout
      .map(({ id, syncAmount }) => ({ productId: id, quantity: syncAmount }));
    try {
      const { data } = await axios.post(
        'http://localhost:3001/sales',
        {
          userId: localUser.id,
          sellerId,
          deliveryAddress,
          deliveryNumber,
          totalPrice,
          orderDetails,
        },
        {
          headers: { authorization: localUser.token },
        },
      );
      history.push(`/customer/orders/${data.id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getSellers = useCallback(async () => {
    const { data } = await axios.get('http://localhost:3001/user');
    const filteredData = data.filter((user) => user.role === 'seller');
    setSellers(filteredData);
    setSellerId(filteredData[0].id);
  }, [setSellerId, setSellers]);

  useEffect(() => {
    getSellers();
  }, [getSellers]);

  return (
    <>
      <label htmlFor="sellers">
        <select
          name="sellers"
          id="sellers"
          data-testid="customer_checkout__select-seller"
          onChange={ (e) => setSellerId(e.target.value) }
        >
          { sellers.map((seller) => (
            <option value={ seller.id } key={ seller.id }>{seller.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="address">
        Endereço:
        {' '}
        <input
          type="text"
          id="address"
          data-testid="customer_checkout__input-address"
          onChange={ (e) => setDeliveryAddress(e.target.value) }
        />
      </label>

      <label htmlFor="houseNumber">
        Número:
        {' '}
        <input
          type="number"
          id="houseNumber"
          data-testid="customer_checkout__input-address-number"
          onChange={ (e) => setDeliveryNumber(e.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClick }
      >
        Finalizar Pedido
      </button>
    </>
  );
}

export default DetailsForDelivery;
