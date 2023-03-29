import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <li data-testid="customer_products__element-navbar-link-products">
        <Link to="">Produtos</Link>
      </li>
      <li data-testid="customer_products__element-navbar-link-orders">
        <Link to="">Meus Pedidos</Link>
      </li>
      <li data-testid="customer_products__element-navbar-user-full-name">
        <Link to="">Usuário</Link>
      </li>
      <li data-testid="customer_products__element-navbar-link-logout">
        <Link to="">Sair</Link>
      </li>
    </div>
  );
}

export default NavBar;
