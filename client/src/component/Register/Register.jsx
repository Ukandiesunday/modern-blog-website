import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const Register = () => {
  const schema = yup.object().shape({
    surname: yup.string().required("Please input your sure name!"),
    otherNames: yup.string().required("Complete your other names!"),
    email: yup
      .string()
      .email("Input a valid email!")
      .required(" Please input your email!"),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/, "Invalid phone number")
      .required("Input your phone number"),

    password: yup.string().max(18).required(" Please input your password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password don't match")
      .required("Confirm password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert("form submitted successfully");
  };
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ color: "rgb(174, 14, 14)" }}>Register</h1>
          <h2>Fill out these fields</h2>
          <div className="item">
            <label htmlFor="surname">Surname</label>
            <input type="text" placeholder="Surname" {...register("surname")} />
            <span>{errors.surname?.message}</span>
          </div>
          <div className="item">
            <label htmlFor="otherNames">Other Names</label>
            <input
              type="text"
              placeholder="Other names"
              {...register("otherNames")}
            />
            <span>{errors.otherNames?.message}</span>
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" {...register("email")} />
            <span>{errors.email?.message}</span>
          </div>
          <div className="item">
            <label htmlFor="Phone">Phone</label>
            <input type="text" placeholder="Phone" {...register("phone")} />
            <span>{errors.phone?.message}</span>
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
          <div className="item">
            <label htmlFor="confirmPassword">confirm Password</label>
            <input
              type="text"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <span>{errors.confirmPassword?.message}</span>
          </div>
          <button type="submit">Sign up</button>
          <div className="register-link">
            <p>Already registered?</p>
            <Link to="/login" className="link link-register">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
