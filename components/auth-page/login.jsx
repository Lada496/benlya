import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import { useForm } from "react-hook-form";
import Message from "../ui/message";
import { CardContainer, FormContainer, LinkContainer } from "./form.styles";

const Login = ({ setIsLogin }) => {
  const router = useRouter();

  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange", // "onBlur"
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
      console.log(result);
      if (!result.error) {
        let path = "/";
        router.replace(path);
      }
      if (result.error) {
        throw Error();
      }
    } catch (error) {
      setLoginError("Login Failed!");
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };
  return (
    <>
      <h1 className="h1">Login</h1>
      <CardContainer>
        {loading && <Message text="Checking..." />}
        <div>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
          </FormContainer>
        </div>
      </CardContainer>
      <LinkContainer>
        New Here? <span onClick={goToSignUpHandler}>Sign Up</span>
      </LinkContainer>
    </>
  );
};

export default Login;
