import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../components/products/NavBar';

function OrderDetails() {
  const { id } = useParams();
  const [tableData, setTableData] = useState({});

  const testId = {
    rowIndex: 'seller_order_details__element-order-table-item-number-',
    rowName: 'seller_order_details__element-order-table-name-',
    rowQuantity: 'seller_order_details__element-order-table-quantity-',
    rowUnit: 'seller_order_details__element-order-table-unit-price-',
    rowTotal: 'seller_order_details__element-order-table-sub-total-',
  };

  useEffect(() => {
    const fetchData = async () => {
      const ordersList = await axios.get(`http://localhost:3001/sales/${id}`);
      console.log(ordersList);
      setTableData(ordersList.data);
    };

    fetchData();
    console.log(tableData);
  }, [tableData, setTableData, id]);

  return (
    <>
      <NavBar />
      <h2>Detalhe do Pedido</h2>
      <div>
        <p data-testid="seller_order_details__element-order-details-label-order-id">
          {`Pedido ${tableData?.id}`}
        </p>
        <p data-testid="seller_order_details__element-order-details-label-order-date">
          { tableData?.saleDate }
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { tableData?.status }
        </p>
        <button type="button" data-testid="seller_order_details__button-preparing-check">
          Preparar Pedido
        </button>
        <button type="button" data-testid="seller_order_details__button-dispatch-check">
          Saiu para Entrega
        </button>
      </div>
      <table>
        <thead>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </thead>
        <tbody>
          {
            tableData.product?.map((data, i) => (
              <tr key={ data.id }>
                <td
                  data-testid={ `${testId.rowIndex}${i}` }
                >
                  {i + 1}
                </td>
                <td data-testid={ `${testId.rowName}${i}` }>
                  { data.name }
                </td>
                <td data-testid={ `${testId.rowQuantity}${i}` }>
                  {data.SaleProduct.quantity}
                </td>
                <td data-testid={ `${testId.rowUnit}${i}` }>
                  { data.price }
                </td>
                <td data-testid={ `${testId.rowTotal}${i}` }>
                  { Number(data.price) * data.SaleProduct.quantity }
                </td>
              </tr>
            ))
          }
        </tbody>
        <div>
          <p data-testid="seller_order_details__element-order-total-price">
            {`Total: R$ ${tableData?.totalPrice}`}
          </p>
        </div>
      </table>
    </>
  );
}

export default OrderDetails;
