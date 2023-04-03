import React from "react";
import AppContext from "../../context/AppContext";
import TableItem from "./TableItem";

function CheckOutTable() {
  const { productsToCheckout, setProductsToCheckout } =
    React.useContext(AppContext);

  React.useEffect(() => {
    const checkoutList = JSON.parse(localStorage.getItem("checkout"));
    setProductsToCheckout([...checkoutList]);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {productsToCheckout.map((e, index) => {
          return <TableItem context={e} id={index} key={index} />;
        })}
      </tbody>
    </table>
  );
}

export default CheckOutTable;
