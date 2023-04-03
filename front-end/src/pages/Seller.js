import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/products/NavBar';
import SaleCard from '../components/sales/SaleCard';

function Seller() {
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    const ordersList = await axios.get('http://localhost:3001/sales');
    setTableData(ordersList.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      { tableData?.map((sale) => (
        <SaleCard
          id={ sale.id }
          status={ sale.status }
          deliveryAddress={ sale.deliveryAddress }
          deliveryNumber={ sale.deliveryNumber }
          saleDate={ sale.saleDate }
          totalPrice={ sale.totalPrice }
          key={ sale.id }
        />
      ))}
    </>
  );
}

export default Seller;
