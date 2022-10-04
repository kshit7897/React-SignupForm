import React, { useState } from "react";
import LoginForm from "./LoginForm";
import WelcomeForm from "./WelcomeForm";

function Login() {
  const [submited, setSubmited] = useState(false);
  const submitForm = () => {
    setSubmited(true);
  };
  return (
    <>{!submited ? <LoginForm submitForm={submitForm} /> : <WelcomeForm />}</>
  );
}

export default Login;
