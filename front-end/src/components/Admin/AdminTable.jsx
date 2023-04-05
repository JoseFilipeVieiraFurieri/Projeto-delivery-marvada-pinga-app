import PropTypes from 'prop-types';
import React from 'react';

function AdminTable({ handleDelete, tableData }) {
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

AdminTable.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  tableData: PropTypes.shape([]).isRequired,
};

export default AdminTable;
