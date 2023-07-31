import React, { useState } from "react";
import styles from "./Form.module.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.container}>
      <div className={styles.authFormContainer}>
      <div className={styles.formHeader}>
        <h2>Login</h2>
        <hr></hr>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            id="password"
            name="password"
          />
          <button type="submit" className={styles.authButton}>Log In</button>
        </form>
        <button
          className={styles.linkBtn}
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
};

export default Login;
