import { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import {authService} from "../services/AuthService";

export const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (credentials.email || credentials.password) {
        console.log(credentials)
        await authService.login(credentials);
        history.push("/cars");
    }
    console.log(credentials)
  };

  const changeHandler = (e) => {
    setCredentials({...credentials, [e.target.name]:e.target.value});
    console.log(credentials)
  }

  return (
    <LoginForm
      credentials={credentials}
      handleSubmit={(e) => submitHandler(e)}
      change={(e) => changeHandler(e)}
    />
  );
};
