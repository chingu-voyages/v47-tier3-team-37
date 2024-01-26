import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import style from "./RegisterView.module.css";
import { useState } from "react";

function RegisterView() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

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
        <form>
          <input
            className={style.input}
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className={style.input}
            name="lastname"
            type="text"
            placeholder="Lastname"
            required
          />
          <input
            className={style.input}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className={style.input}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className={style.input}
            name="password"
            type="password"
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
