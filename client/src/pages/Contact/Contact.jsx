import "./Contact.css";
import contactImg from "../../images/call.jpg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Contact = () => {
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
      .required("Input your phone number")
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
    alert("request submitted");
  };
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact-left">
          <h1>contact us today</h1>
          <div className="contact-img-container">
            <img src={contactImg} alt="" />
          </div>
          <p>
            <i className="ri-map-pin-fill"></i> No.15 Calabar Itu Road, Uyo
            city.
          </p>
          <p>
            <i className="ri-mail-fill"></i> ublog@gmail.com
          </p>
          <p>
            <span style={{ color: "green" }}>
              <i className="ri-cellphone-fill"></i> CALL FOR REDRESS?
            </span>
            :+2349154578495
          </p>
        </div>
        <div className="contact-right">
          <div className="form-container">
            <form
              className="form2 form "
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <h4>Fill out to contact us</h4>
              <div className="item">
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  placeholder="Surname"
                  {...register("surname")}
                />
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
                <textarea
                  name=""
                  id="Message"
                  rows="9"
                  placeholder="Send a message...."
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
