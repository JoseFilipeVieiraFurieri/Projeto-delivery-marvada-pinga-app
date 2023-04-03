import CheckOutTable from "../components/checkout/CheckOutTable";
import NavBar from "../components/products/NavBar";
import AppContext from "../context/AppContext";
import React from "react";
import DetailsForDelivery from "../components/checkout/DetailsForDelivery";

function Checkout() {
  const { productsToCheckout, setProductsToCheckout } =
    React.useContext(AppContext);

  React.useEffect(() => {
    const checkoutList = JSON.parse(localStorage.getItem("checkout"));
    setProductsToCheckout([...checkoutList]);
  }, [setProductsToCheckout]);

  function handleRemoval(id) {
    return function handler() {
      const checkoutList = JSON.parse(localStorage.getItem("checkout"));
      checkoutList.splice(id, 1);
      localStorage.setItem("checkout", JSON.stringify(checkoutList));
      setProductsToCheckout([...checkoutList]);
    };
  }
  return (
    <>
      <NavBar />
      <div>
        <CheckOutTable
          productsToCheckout={productsToCheckout}
          handleRemoval={handleRemoval}
        />
        <div data-testid="customer_checkout__element-order-total-price">
          {String(
            productsToCheckout.reduce(
              (sum, e) => (sum += Number(e.price * e.syncAmount)),
              0
            )
          ).replace(".", ",")}
        </div>
      </div>
      <div>
        Detalhes e Endereço da Entrega:
        <DetailsForDelivery />
      </div>
    </>
  );
}

export default Checkout;
