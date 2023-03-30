import React from "react";

function ProductCard(props) {
  const { handlePrice, totalPrice } = props;
  const [amount, setAmout] = React.useState(0);

  function handleChange(e) {
    const oldPrice = +amount * price;
    const newPrice = +e.target.value * price;
    console.log("Old price: ", oldPrice);
    console.log("New price: ", newPrice);

    if (e.target.value > amount) {
      handlePrice(totalPrice + (newPrice - oldPrice));
    } else {
      handlePrice(totalPrice - (oldPrice - newPrice));
    }
    setAmout(e.target.value);
  }
  const {
    id,
    product: { name, price, urlImage },
  } = props;

  const properPrice = String(price).replace(".", ",");

  function handleAmount(symbol) {
    return function () {
      if (symbol === "+") {
        setAmout(Number(amount) + 1);
        handlePrice(totalPrice + +price);
      } else if (symbol === "-" && amount === 0) {
      } else {
        setAmout(Number(amount) - 1);
        handlePrice(totalPrice - price);
      }
    };
  }

  return (
    <div>
      <h2 data-testid={`customer_products__element-card-title-${id}`}>
        {name}
      </h2>
      <p data-testid={`customer_products__element-card-price-${id}`}>
        {properPrice}
      </p>
      <img
        data-testid={`customer_products__img-card-bg-image-${id}`}
        src={`${urlImage}`}
        alt={`image=${name}`}
        height={100}
        width={100}
      />
      <button
        data-testid={`customer_products__button-card-add-item-${id}`}
        onClick={handleAmount("+")}
      >
        +
      </button>
      <input
        data-testid={`customer_products__input-card-quantity-${id}`}
        type="number"
        min={0}
        onChange={handleChange}
        value={amount}
      />
      <button
        data-testid={`customer_products__button-card-rm-item-${id}`}
        onClick={handleAmount("-")}
      >
        -
      </button>
    </div>
  );
}

export default ProductCard;
