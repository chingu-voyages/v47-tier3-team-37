import axios from "axios";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import style from "./RegisterView.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function RegisterView() {
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (event) => {
    event.preventDefault();

    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitFunction = (event) => {
    event.preventDefault();
    if (dataRegister.password !== dataRegister.confirmPassword) {
      alert("Password and Confirm Password must be same");
      return;
    }

    const data = {
      firstName: dataRegister.firstName,
      lastName: dataRegister.lastName,
      email: dataRegister.email,
      password: dataRegister.password,
    };
    console.log(data);
    axios.post("http://localhost:8080/users/register", data).then(() => {
      alert("Good job!, you have successfully registered")
    }).catch((err) => {
      console.log(err);
    })
    navigate("/v47-tier3-team-37/login");
  };

  const googleHandler = () => {};

  const facebookHandler = () => {};

  const appleHandler = () => {};

  return (
    <div className={style.background}>
      <div className={style.bar}>
        <h1>Cornell Notes App</h1>
        <a href="/login">
          <p>Already have an account? sign in</p>
        </a>
      </div>

      <div className={style.title}>
        <h1>Create your Account</h1>
        <p>Join millions of users</p>
      </div>

      <div className={style.form}>
        <form onSubmit={onSubmitFunction}>
          <input
            className={style.input}
            name="firstName"
            type="text"
            value={dataRegister.firstName}
            onChange={onInputChange}
            placeholder="Name"
            required
          />
          <input
            className={style.input}
            name="lastName"
            type="text"
            value={dataRegister.lastName}
            onChange={onInputChange}
            placeholder="Last name"
            required
          />
          <input
            className={style.input}
            name="email"
            type="email"
            value={dataRegister.email}
            onChange={onInputChange}
            placeholder="Email"
            required
          />
          <input
            className={style.input}
            name="password"
            type="password"
            value={dataRegister.password}
            onChange={onInputChange}
            placeholder="Password"
            required
          />
          <input
            className={style.input}
            name="confirmPassword"
            type="password"
            value={dataRegister.confirmPassword}
            onChange={onInputChange}
            placeholder="Confirm Password"
            required
          />
          <button className={style.buttonSubmit} type="submit">
            Create Your Account
          </button>
        </form>

        <div className={style.buttonRegister}>
          <div>
            <div className={style.loginButton} onClick={googleHandler}>
              <img src={Google} alt="" className={style.icon} />
              <p>Sign in with Google</p>
            </div>
          </div>

          <div>
            <div className={style.loginButton} onClick={facebookHandler}>
              <img src={Facebook} alt="" className={style.icon} />
              <p>Sign in with Facebook</p>
            </div>
          </div>

          <div>
            <div className={style.loginButton} onClick={appleHandler}>
              <img src={Google} alt="" className={style.icon} />
              <p>Sign in with Apple Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterView;
