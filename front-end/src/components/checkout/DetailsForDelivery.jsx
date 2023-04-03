function DetailsForDelivery() {
  return (
    <>
      <label htmlFor="sellers">
        <select
          name="sellers"
          id="sellers"
          data-testid="customer_checkout__select-seller"
        >
          <option value="fulana">Fulana Pereira</option>
        </select>
      </label>
      <label htmlFor="address">
        Endereço:
        {' '}
        <input
          type="text"
          id="address"
          data-testid="customer_checkout__input-address"
        />
      </label>

      <label htmlFor="houseNumber">
        Número:
        {' '}
        <input
          type="number"
          id="houseNumber"
          data-testid="customer_checkout__input-address-number"
        />
      </label>

      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </>
  );
}

export default DetailsForDelivery;
