import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../components/products/NavBar';
import OrderTable from '../components/global/OrderTable';

function OrderDetails() {
  const { id } = useParams();
  const [tableData, setTableData] = useState({});

  const testId = {
    rowIndex: 'seller_order_details__element-order-table-item-number-',
    rowName: 'seller_order_details__element-order-table-name-',
    rowQuantity: 'seller_order_details__element-order-table-quantity-',
    rowUnit: 'seller_order_details__element-order-table-unit-price-',
    rowTotal: 'seller_order_details__element-order-table-sub-total-',
    total: 'seller_order_details__element-order-total-price',
  };

  const fetchData = useCallback(async () => {
    const ordersList = await axios.get(`http://localhost:3001/sales/${id}`);
    setTableData(ordersList.data);
  }, [setTableData, id]);

  useEffect(() => {
    fetchData();
  }, [tableData, setTableData, id, fetchData]);

  const handleClick = async (newStatus) => {
    await axios.patch(`http://localhost:3001/sales/${id}/${newStatus}`);
    fetchData();
  };

  return (
    <>
      <NavBar />
      <h2>Detalhe do Pedido</h2>
      <div>
        <p data-testid="seller_order_details__element-order-details-label-order-id">
          {`Pedido ${tableData?.id}`}
        </p>
        <p data-testid="seller_order_details__element-order-details-label-order-date">
          { new Date(tableData?.saleDate).toLocaleDateString('pt-BR') }
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { tableData?.status }
        </p>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ () => handleClick('Preparando') }
          disabled={ tableData.status !== 'Pendente' }
        >
          Preparar Pedido
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ () => handleClick('Em Trânsito') }
          disabled={ tableData.status !== 'Preparando' }
        >
          Saiu para Entrega
        </button>
      </div>
      <OrderTable
        testId={ testId }
        tableData={ tableData }
      />
    </>
  );
}

export default OrderDetails;
