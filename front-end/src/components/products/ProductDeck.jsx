import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import ProductCard from './ProductCard';

function ProductDeck() {
  const [protoArr, setProtoArr] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const history = useHistory();

  function handleRedirect() {
    history.push('/customer/checkout');
  }

  React.useEffect(() => {
    const checkoutEntry = JSON.parse(localStorage.getItem('checkout'));
    if (!checkoutEntry) {
      localStorage.setItem('checkout', JSON.stringify([]));
    }

    const fetchData = async () => {
      const productList = await axios.get('http://localhost:3001/products');
      setProtoArr([...productList.data]);
    };
    fetchData();
  }, []);

  return (
    <div>
      {protoArr.map((e) => (
        <ProductCard
          id={ e.id }
          key={ e.id }
          product={ e }
          handlePrice={ setTotalPrice }
          totalPrice={ totalPrice }
        />
      ))}

      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ totalPrice === 0 }
        onClick={ handleRedirect }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          {String(
            Math.round((totalPrice + Number.EPSILON) * 100) / 100,
          ).replace('.', ',')}
        </p>
      </button>
    </div>
  );
}

export default ProductDeck;
