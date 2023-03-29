import React from "react";
import { useHistory } from "react-router-dom";
import FormEmail from "../components/login/FormEmail";
import FormPassword from "../components/login/FormPassword";
import AppContext from "../context/AppContext";
import axios from "axios";

function Login() {
  const { email, password } = React.useContext(AppContext);
  const [hideDeniedLogin, setHideDeniedLogin] = React.useState(true);
  const history = useHistory();

  const magicNumber = 6;
  const validInputs =
    email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
    password.length >= magicNumber;

  const handleUser = async () => {
    localStorage.setItem("user", JSON.stringify({ email }));

    try {
      await axios.post("http://localhost:3001/user/login", { email, password });
      history.push("/customer/products");
    } catch (error) {
      console.log(error);
      setHideDeniedLogin(false);
    }
  };

  const handleRedirect = () => {
    history.push("/register");
  };

  return (
    <div>
      <FormEmail dataTestId="common_login__input-email" />
      <FormPassword dataTestId="common_login__input-password" />
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={!validInputs}
        onClick={handleUser}
      >
        Entrar
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={handleRedirect}
      >
        Ainda não tenho conta
      </button>
      <p
        hidden={hideDeniedLogin}
        data-testid="common_register__element-invalid_register"
      >
        Login Inválido
      </p>
    </div>
  );
}

export default Login;
