import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import styles from "./index.module.scss";
import Loader from "@/components/UI/Loader";
import Cookies from "js-cookie";
import useFetch from "@/hooks/useFetch";
import Alert from "@/components/UI/Alert";

const Index = () => {
  const router = useRouter();

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const { isLoading, error, data, fetchData } = useFetch(
    "/auth/login",
    userForm,
    "POST"
  );

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    if (data.auth) {
      Cookies.set("token", data.token);
      router.push("/");
    }
  }, [data, error, router]);

  return (
    <div className={styles.wrapper}>
      <div>{isLoading ? <Loader /> : null}</div>
      <form
        className={isLoading ? `${styles.form} ${styles.loading}` : styles.form}
        onSubmit={(e) => submitLogin(e)}
      >
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={userForm.email}
          onChange={(e) => handleChange(e)}
          placeHolder="Enter your email address"
          required={true}
          className={styles.input}
          disabled={isLoading}
        />
        <Input
          label={"Password"}
          className={styles.input}
          type="password"
          name="password"
          value={userForm.password}
          required={true}
          onChange={(e) => handleChange(e)}
          placeHolder="Enter password"
          disabled={isLoading}
        />
        {error && <Alert message="Credential invalid" />}
        <div>
          <Button
            className={styles.button}
            type="submit"
            title="Login"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default Index;
