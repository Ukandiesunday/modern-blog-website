import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
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
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact ">
          <div className="contact-left">
            <h1>contact us today</h1>
            <div className="contact-img-container">
              <img src={contactImg} alt="" />
            </div>
            <p>
              <FaLocationDot />
              No. 18 Itu Junction, Uyo city.
            </p>
            <p>
              <MdOutlineMail />
              ublog@gmail.com
            </p>
            <p>
              <span style={{ color: "purple" }}>CALL FOR REDRESS?</span>
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
                <h1>Fill out to contact us</h1>
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
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <span>{errors.email?.message}</span>
                </div>
                <div className="item">
                  <label htmlFor="Phone">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    {...register("phone")}
                  />
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
        <div className="location-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15895.7678977!2d7.947858999999999!3d5.113055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d513f9366ee87%3A0x9d73a43a9eaaf136!2sUyo%20Itam%20Junction%2C%20Itu!5e0!3m2!1sen!2sng!4v1706722590552!5m2!1sen!2sng"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
