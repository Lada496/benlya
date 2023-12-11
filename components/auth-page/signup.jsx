import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Message from "../ui/message";
import { createUser } from "../../lib/auth-utils";
import { CardContainer, FormContainer, LinkContainer } from "./form.styles";

const SignUp = ({ setIsLogin }) => {
  const router = useRouter();
  const [signupError, setSignupError] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange", // "onBlur"
  });
  const goToLoginHandler = () => {
    setIsLogin(true);
  };

  const onSubmit = async (data, e) => {
    setLoading(true);
    setSignupError(null);
    try {
      const result = await createUser(data.email, data.password1);
      // console.log(result);
      let path = "/";
      router.replace(path);
    } catch (error) {
      console.log(error.message);
      setSignupError(error.message);
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };
  useEffect(() => {
    const subscription = watch((value) => setPasswordInput(value.password1));
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <div>
      <h1 className="h1">Sing Up</h1>
      <CardContainer>
        {loading && <Message text="Processing..." />}
        <div>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            {signupError && <p>{signupError}</p>}
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && <p>Please enter a valid email</p>}
            </div>

            <div>
              <label htmlFor="password1">Password</label>
              <input
                type="password"
                {...register("password1", { required: true, minLength: 6 })}
              />
              {errors.password1 && <p>Password should be at least 6 words</p>}
            </div>

            <div>
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                {...register("password2", {
                  required: true,
                  validate: (value) => value === passwordInput,
                })}
              />
              {errors.password2 && <p>Passwords do not match</p>}
            </div>

            <input type="submit" />
          </FormContainer>
        </div>
      </CardContainer>
      <LinkContainer>
        Already Member? <span onClick={goToLoginHandler}>Login</span>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
