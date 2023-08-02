import React, { useState } from "react";
import styles from "./Form.module.css";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // const {
  //   value: enteredName,
  //   isValid: enteredNameIsValid,
  //   hasError: nameInputHasError,
  //   valueChangeHandler: nameChangeHandler,
  //   inputBlurHandler: nameBlurHandler,
  //   reset: resetNameInput,
  // } = useInput((value) => value.trim() !== "");

  // const {
  //   value: enteredLastName,
  //   isValid: enteredLastNameIsValid,
  //   hasError: lastNameInputHasError,
  //   valueChangeHandler: lastNameChangeHandler,
  //   inputBlurHandler: lastNameBlurHandler,
  //   reset: resetLastNameInput,
  // } = useInput((value) => value.trim() !== "");

  // const {
  //   value: enteredEmail,
  //   isValid: enteredEmailIsValid,
  //   hasError: emailInputHasError,
  //   valueChangeHandler: emailChangeHandler,
  //   inputBlurHandler: emailBlurHandler,
  //   reset: resetEmailInput,
  // } = useInput((value) => value.includes("@"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>Sign Up</h2>
        <p>Don't miss out!</p>
        <hr></hr>
      </div>
      <div className={styles.authFormContainer}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@email.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">New Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            id="password"
            name="password"
          />
          <label htmlFor="password">Re-enter New Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            id="password"
            name="password"
          />
          <button type="submit" className={styles.authButton}>Sign Up</button>
        </form>
        <button
          className={styles.linkBtn}
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Register;
