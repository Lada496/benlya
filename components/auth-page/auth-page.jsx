// delete
import { useState } from "react";
import Login from "./login";
import SignUp from "./signup";

const AuthPageComponent = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin && <Login setIsLogin={setIsLogin} />}
      {!isLogin && <SignUp setIsLogin={setIsLogin} />}
    </>
  );
};

export default AuthPageComponent;
