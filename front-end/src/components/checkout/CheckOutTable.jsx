import React from "react";
import TableItem from "./TableItem";

function CheckOutTable(props) {
  const { productsToCheckout, handleRemoval } = props;
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
          return (
            <TableItem
              context={e}
              id={index}
              key={index}
              handleRemoval={handleRemoval}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default CheckOutTable;
