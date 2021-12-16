import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import { useForm } from "react-hook-form";
import { Card } from "react-bootstrap";
import Message from "../ui/message";
import classes from "./form.module.css";

const Login = ({ setIsLogin }) => {
  const router = useRouter();

  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur", // "onChange"
  });
  const goToSignUpHandler = () => {
    setIsLogin(false);
  };
  const onSubmit = async (data, e) => {
    setLoading(true);
    setLoginError(null);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      let path = "/";
      router.replace(path);
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };
  return (
    <>
      <h1>Login</h1>
      <Card style={{ width: "18rem", margin: "2rem auto" }}>
        <Card.Body style={{ backgroundColor: "white" }}>
          {loading && <Message text="Checking" />}
          <div className={classes.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {loginError && <p>{loginError}</p>}
              <div>
                <label htmlFor="email">Email</label>
                <input {...register("email", { required: true })} />
                {errors.email && <p>This is required</p>}
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p>This is required</p>}
              </div>

              <input type="submit" />
            </form>
          </div>
        </Card.Body>
      </Card>
      <p className={classes.link}>
        New Here? <span onClick={goToSignUpHandler}>Sign Up</span>
      </p>
    </>
  );
};

export default Login;
