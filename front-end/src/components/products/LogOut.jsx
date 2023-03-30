import PropTypes from 'prop-types';

function LogOut(props) {
  const { text } = props;

  function handleLogout() {
    localStorage.clear('user');
  }

  return (
    <button
      type="button"
      data-testid="customer_products__element-navbar-link-logout"
      onClick={ handleLogout }
    >
      {text}
    </button>
  );
}

LogOut.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LogOut;
