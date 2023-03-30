import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";

function NavBar() {
  const [login, setLogin] = React.useState("");

  React.useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem("user"));

    setLogin(loginInfo.name);
  }, []);
  return (
    <div>
      <li data-testid="customer_products__element-navbar-link-products">
        <Link to="">Produtos</Link>
      </li>
      <li data-testid="customer_products__element-navbar-link-orders">
        <Link to="">Meus Pedidos</Link>
      </li>
      <li data-testid="customer_products__element-navbar-user-full-name">
        <Link to="">{login}</Link>
      </li>
      <Link to="/login">
        <li>
          <LogOut text="Sair" />
        </li>
      </Link>
    </div>
  );
}

export default NavBar;
