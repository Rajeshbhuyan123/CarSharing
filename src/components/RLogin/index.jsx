import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const RLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth1/riderLogin";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <Link to="/page">
            <button type="submit" className={styles.green_btn}>
              Sing In
            </button>
            </Link>
          </form>
        </div>
        <div className={styles.right}>
          <img
            src="https://cdn.dribbble.com/users/769964/screenshots/2928024/carpool.png"
            alt=""
          />
          <h1>New Here ?</h1>
          {/* <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sing Up As a Client
            </button>
          </Link> */}

          <Link to="/rider">
            <button type="button" className={styles.white_btn}>
              Sing Up As a Rider
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RLogin;