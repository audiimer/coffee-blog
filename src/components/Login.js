import React from "react";
import useInput from "../hooks/use-input";

import { FaExclamationCircle} from "react-icons/fa";
import styles from "./Form.module.css";

const Login = (props) => {

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enteredEmailIsValid) {
      return; //if it goes through this conditional, it will exit the function and the rest of the function won't be executed
    }

    console.log(enteredEmail);
    resetEmailInput();
    resetPasswordInput();
  };


  const passwordInputClasses = passwordInputHasError
    ? styles.invalid
    : "";

  const emailInputClasses = emailInputHasError
    ? styles.invalid
    : "";

  return (
    <div className={styles.container}>
      <div className={styles.authFormContainer}>
        <div className={styles.formHeader}>
          <h2>Login</h2>
          <hr></hr>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email</label>
          <input
            value={enteredEmail}
            type="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder={emailInputHasError ? "Invalid E-mail": "youremail@email.com"}
            id="email"
            name="email"
            />
            {emailInputHasError && (
               <FaExclamationCircle className={styles.errorIcon} />
            )}
          </div>
          <div className={passwordInputClasses}>
          <label htmlFor="password">Password</label>
          <input
            value={enteredPassword}
            type="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            placeholder={passwordInputHasError ? "Invalid Password": "*********"}
            id="password"
            name="password"
          />
           {passwordInputHasError && (
          <FaExclamationCircle className={styles.errorIcon} />
        )}
          </div>
          <button type="submit" className={styles.authButton} disabled={!formIsValid}>
            Log In
          </button>
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
