import CheckOutTable from "../components/checkout/CheckOutTable";
import NavBar from "../components/products/NavBar";
import AppContext from "../context/AppContext";
import React from "react";

function Checkout() {
  const { productsToCheckout, setProductsToCheckout } =
    React.useContext(AppContext);

  React.useEffect(() => {
    const checkoutList = JSON.parse(localStorage.getItem("checkout"));
    setProductsToCheckout([...checkoutList]);
  }, []);
  return (
    <>
      <NavBar />
      <div>
        <CheckOutTable productsToCheckout={productsToCheckout} />
        <div data-testid="customer_checkout__element-order-total-price">
          Total:{" "}
          {`R$${productsToCheckout.reduce(
            (sum, e) => (sum += Number(e.price * e.syncAmount)),
            0
          )}`}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Checkout;
