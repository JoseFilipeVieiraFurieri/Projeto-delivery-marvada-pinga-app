function ProductCard(props) {
  const { id } = props;
  return (
    <div>
      <h2 data-testid={`customer_products__element-card-title-${id}`}>Nome</h2>
      <p data-testid={`customer_products__element-card-price-${id}`}>Preço</p>
      <img
        data-testid={`customer_products__img-card-bg-image-${id}`}
        src="https://i.imgur.com/0pufkn9.jpeg"
        alt={`image=${id}`}
        height={100}
        width={100}
      />
      <button data-testid={`customer_products__button-card-add-item-${id}`}>
        +
      </button>
      <input
        data-testid={`customer_products__input-card-quantity-${id}`}
        type="number"
      />
      <button data-testid={`customer_products__button-card-rm-item-${id}`}>
        -
      </button>
    </div>
  );
}

export default ProductCard;
