import { useHistory } from "react-router-dom";

function LogOut(props) {
  const { text } = props;

  function handleLogout() {
    localStorage.clear("user");
  }

  return (
    <button
      data-testid="customer_products__element-navbar-link-logout"
      onClick={handleLogout}
    >
      {text}
    </button>
  );
}

export default LogOut;
