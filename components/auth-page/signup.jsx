import React from "react";

const SignUp = ({ setIsLogin }) => {
  const goToLoginHandler = () => {
    setIsLogin(true);
  };
  return (
    <div>
      <h1>Sing Up</h1>
      <p>
        Already Member? <span onClick={goToLoginHandler}>Login</span>
      </p>
    </div>
  );
};

export default SignUp;
