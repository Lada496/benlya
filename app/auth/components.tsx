'use client';
// This file has been sourced from: /Users/murayamayuko/Desktop/Study/personal-project/working/beoshare/pages/auth/index.js
import { useState } from "react";
import Login from "../../../components/auth-page/login";
import SignUp from "../../../components/auth-page/signup";
const [isLogin, setIsLogin] = useState(true);
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      
      {isLogin && <Login setIsLogin={setIsLogin} />}
      {!isLogin && <SignUp setIsLogin={setIsLogin} />}
      {/* <Message text="Comming soon..." /> */}
    </>
  );
};

export default AuthPage;
