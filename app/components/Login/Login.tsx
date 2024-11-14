"use client";
import { useFormState } from "react-dom";
import styles from "./login.module.css";
import { authenticate } from "@/app/lib/actions";

const Login = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
    </div>
  );
};

export default Login;
