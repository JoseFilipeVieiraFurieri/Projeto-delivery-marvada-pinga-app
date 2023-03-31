import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminTable() {
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    const usersList = await axios.get('http://localhost:3001/user');
    setTableData(usersList.data);
  };

  useEffect(() => {
    fetchData();
  }, [tableData, setTableData]);

  const handleDelete = async (id) => {
    const local = JSON.parse(localStorage.getItem('user'));
    await axios.delete(`http://localhost:3001/user/${id}`, {
      headers: { authorization: local.token },
    });
    fetchData();
  };

  return (
    <table>
      <thead>
        <th>Id</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Função</th>
        <th>Excluir</th>
      </thead>
      <tbody>
        { tableData.map(({ id, name, email, role }) => (
          <tr key={ id }>
            <td data-testid={ `admin_manage__element-user-table-item-number-${id}` }>
              { id }
            </td>
            <td data-testid={ `admin_manage__element-user-table-name-${id}` }>
              { name }
            </td>
            <td data-testid={ `admin_manage__element-user-table-email-${id}` }>
              { email }
            </td>
            <td data-testid={ `admin_manage__element-user-table-role-${id}` }>
              { role }
            </td>
            <td data-testid={ `admin_manage__element-user-table-remove-${id}` }>
              <button
                onClick={ () => handleDelete(id) }
                type="button"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminTable;
