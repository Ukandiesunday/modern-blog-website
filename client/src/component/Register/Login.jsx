import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Input a valid email!")
      .required(" Please input your email!"),
    password: yup.string().max(18).required("Please input your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert("details submitted");
  };
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ color: "rgb(174, 14, 14)" }}>
            Enter Your Registered Information!
          </h1>
          <h2>Please fill out to sign in</h2>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" {...register("email")} />
            <span>{errors.email?.message}</span>
          </div>

          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Password"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
          </div>

          <button type="submit">Login</button>
          <div className="register-link">
            <p>Need an Account?</p>
            <Link to="/register" className=" link">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
