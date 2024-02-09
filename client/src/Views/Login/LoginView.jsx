import axios from "axios";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import style from "./LoginView.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function LoginView() {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (event) => {
    event.preventDefault();

    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitFunction = async (event) => {
    event.preventDefault();
    alert("Login Success");

    const data = {
      email: dataLogin.email,
      password: dataLogin.password,
    };
    axios.post("http://localhost:8080/users/login", data).then(() => {
      alert("You have successfully logged in!")
    }).catch((err) => {
      console.log(err);
    })
    navigate("/v47-tier3-team-37/notes");
  }

  const googleHandler = () => {};

  const facebookHandler = () => {};

  const appleHandler = () => {};

  return (
    <div className={style.background}>
      <div className={style.bar}>
        <h1>Cornell Notes App</h1>
      </div>

      <div className={style.title}>
        <h1>Welcome Back</h1>
        <p>Welcome back. We hope you continue to use...</p>
      </div>

      <div className={style.form}>
        <form onSubmit={onSubmitFunction}>
          <input
            className={style.input}
            name="email"
            type="email"
            value={dataLogin.email}
            onChange={onInputChange}
            placeholder="Email"
            required
          />
          <input
            className={style.input}
            name="password"
            type="password"
            value={dataLogin.password}
            onChange={onInputChange}
            placeholder="Password"
            required
          />
          <button className={style.buttonSubmit} type="submit">
            Sign into Your Account
          </button>
          <a href="/register">
            <p>Don't have an account? Register Here</p>
          </a>
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

export default LoginView;
