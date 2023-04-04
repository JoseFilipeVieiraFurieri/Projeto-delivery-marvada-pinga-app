import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';

function NavBar() {
  const [login, setLogin] = React.useState('');
  const [role, setRole] = React.useState('');

  React.useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem('user'));

    setRole(loginInfo.role);
    setLogin(loginInfo.name);
  }, []);

  return (
    <div>
      <Link to="/customer/products">
        <li data-testid="customer_products__element-navbar-link-products">
          Produtos
        </li>
      </Link>
      <Link to={ `/${role}/orders` }>
        <li data-testid="customer_products__element-navbar-link-orders">
          Meus Pedidos
        </li>
      </Link>
      <Link to="/">
        <li data-testid="customer_products__element-navbar-user-full-name">
          {login}
        </li>
      </Link>
      <Link to="/login">
        <li>
          <LogOut text="Sair" />
        </li>
      </Link>
    </div>
  );
}

export default NavBar;
