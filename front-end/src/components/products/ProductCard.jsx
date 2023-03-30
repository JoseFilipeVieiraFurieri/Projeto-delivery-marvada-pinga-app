function ProductCard(props) {
  const {
    id,
    product: { name, price, urlImage },
  } = props;

  const properPrice = String(price).replace(".", ",");

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
      <button data-testid={`customer_products__button-card-add-item-${id}`}>
        +
      </button>
      <input
        data-testid={`customer_products__input-card-quantity-${id}`}
        type="number"
        defaultValue={0}
      />
      <button data-testid={`customer_products__button-card-rm-item-${id}`}>
        -
      </button>
    </div>
  );
}

export default ProductCard;
