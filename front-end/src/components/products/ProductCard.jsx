import React from 'react';
import PropTypes from 'prop-types';

function ProductCard(props) {
  const { handlePrice, totalPrice } = props;
  const [amount, setAmout] = React.useState(0);
  const {
    id,
    product: { name, price, urlImage },
  } = props;

  React.useEffect(() => {
    localStorage.setItem('checkout', JSON.stringify([]));
  }, []);

  function handleCheckout(syncAmount) {
    const product = { name, syncAmount, price };
    const checkoutList = JSON.parse(localStorage.getItem('checkout'));
    if (checkoutList.find((e) => e.name === product.name)) {
      const indexOfProduct = checkoutList.findIndex(
        (e) => e.name === product.name,
      );
      checkoutList.splice(indexOfProduct, 1);
    }
    if (syncAmount > 0) checkoutList.push(product);
    localStorage.setItem('checkout', JSON.stringify(checkoutList));
  }

  function handleChange(e) {
    const oldPrice = +amount * price;
    const newPrice = +e.target.value * price;

    if (e.target.value > amount) {
      handlePrice(totalPrice + (newPrice - oldPrice));
      handleCheckout(Number(e.target.value));
    } else {
      handlePrice(totalPrice - (oldPrice - newPrice));
      handleCheckout(Number(e.target.value));
    }
    setAmout(e.target.value);
  }

  const properPrice = String(price).replace('.', ',');

  function handleAmount(symbol) {
    let syncAmount = Number(amount);
    return () => {
      if (symbol === '+') {
        syncAmount += 1;
        setAmout(Number(amount) + 1);
        handlePrice(totalPrice + +price);
        handleCheckout(syncAmount);
      }

      if (symbol === '-' && amount > 0) {
        syncAmount -= 1;
        setAmout(Number(amount) - 1);
        handlePrice(totalPrice - +price);
        handleCheckout(syncAmount);
      }
    };
  }

  return (
    <div>
      <h2 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h2>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {properPrice}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ `${urlImage}` }
        alt={ `${name}` }
        height={ 100 }
        width={ 100 }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ handleAmount('+') }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        min={ 0 }
        onChange={ handleChange }
        value={ amount }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ handleAmount('-') }
      >
        -
      </button>
    </div>
  );
}
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
};

ProductCard.propTypes = {
  handlePrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
