import React from 'react';
import axios from 'axios';
import FormEmail from '../components/login/FormEmail';
import FormPassword from '../components/login/FormPassword';
import FormType from '../components/Admin/FormType';
import FormName from '../components/register/FormName';
import NavBar from '../components/products/NavBar';
import AppContext from '../context/AppContext';
import AdminTable from '../components/Admin/AdminTable';

function Admin() {
  const [hideDeniedRegister, setHideDeniedRegister] = React.useState(true);
  const {
    email,
    password,
    name,
    setEmail,
    setPassword,
    setName,
    type,
  } = React.useContext(AppContext);

  const [tableData, setTableData] = React.useState([]);

  const fetchData = async () => {
    const usersList = await axios.get('http://localhost:3001/user');
    setTableData(usersList.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const local = JSON.parse(localStorage.getItem('user'));
    await axios.delete(`http://localhost:3001/user/${id}`, {
      headers: { authorization: local.token },
    });
    fetchData();
  };

  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setName('');
  }, [setEmail, setPassword, setName]);

  const passwordLength = 6;
  const nameLength = 12;
  const validInputs = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
  && password.length >= passwordLength && name.length >= nameLength;

  const handleSubmit = async () => {
    const local = JSON.parse(localStorage.getItem('user'));
    try {
      await axios.post(
        'http://localhost:3001/user/register',
        {
          email,
          password,
          name,
          role: type,
        },
        {
          headers: { authorization: local.token },
        },
      );
      fetchData();
    } catch (error) {
      console.log(error);
      setHideDeniedRegister(false);
    }
  };
  return (
    <div>
      <NavBar />
      <p
        hidden={ hideDeniedRegister }
        data-testid="admin_manage__element-invalid-register"
      >
        Inválido
      </p>
      <div>
        <FormName dataTestId="admin_manage__input-name" />
        <FormEmail dataTestId="admin_manage__input-email" />
        <FormPassword dataTestId="admin_manage__input-password" />
        <FormType dataTestId="admin_manage__select-role" />
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ !validInputs }
          onClick={ handleSubmit }
        >
          Cadastrar
        </button>
      </div>
      <AdminTable
        tableData={ tableData }
        handleDelete={ handleDelete }
      />
    </div>
  );
}

export default Admin;
