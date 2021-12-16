import React from "react";

const Login = ({ setIsLogin }) => {
  const goToSignUpHandler = () => {
    setIsLogin(false);
  };
  return (
    <div>
      <h1>Login</h1>
      <p>
        New Here? <span onClick={goToSignUpHandler}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
