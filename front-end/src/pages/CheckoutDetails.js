import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../components/products/NavBar';
import OrderTable from '../components/global/OrderTable';

function CheckoutDetails() {
  const { id } = useParams();
  const [tableData, setTableData] = useState({});

  const testId = {
    rowIndex: 'customer_order_details__element-order-table-item-number-',
    rowName: 'customer_order_details__element-order-table-name-',
    rowQuantity: 'customer_order_details__element-order-table-quantity-',
    rowUnit: 'customer_order_details__element-order-table-unit-price-',
    rowTotal: 'customer_order_details__element-order-table-sub-total-',
    total: 'customer_order_details__element-order-total-price',
    deliveryStatus: 'customer_order_details__element-order-details-label-delivery-status',
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
      <div>
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {`Pedido ${tableData?.id}`}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          {tableData.userSeller?.name}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          {new Date(tableData?.saleDate).toLocaleDateString('pt-BR')}
        </p>
        <p
          data-testid={ testId.deliveryStatus }
        >
          {tableData?.status}
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ () => handleClick('Entregue') }
          disabled={ tableData.status !== 'Em Trânsito' }
        >
          Marcar como Entregue
        </button>
      </div>
      <OrderTable
        testId={ testId }
        tableData={ tableData }
      />
    </>
  );
}

export default CheckoutDetails;
