import React, { useEffect, useState, useContext } from "react";
import useFetch from "@/hooks/useFetch";
import UserContext from "@/contexts/UserProvider";
import Modal from "@/components/UI/Modal";
import Button from "@/components/UI/Button";
import Title from "@/components/UI/Title";
import styles from "./index.module.scss";
import Input from "@/components/UI/Input";

const Index = () => {
  const { isLoading, error, data, fetchData } = useFetch(
    "/user/getUser",
    null,
    "GET"
  );


  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [userForm, setUserForm] = useState({});

  const { isLoading: isLoadingUpdate, error: errorUpdate, data: updateData, fetchData: fetchUpdateData } = useFetch(
    "/user/updateUser",
    userForm,
    "PUT"
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data);
      setUserForm(data);
    }
  }, [data]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUpdateData().then(() => {
      setUser(userForm);
      handleClose();
    });
  };

  

  return (
    <div>
      <p>Profil page</p>
      {isLoading && <p>Loading user data...</p>}

      <div>
        <p>{user && user.firstname}</p>
        <p>{user && user.lastname}</p>
        <p>{user && user.email}</p>
      </div>

      <Button
        onClick={handleOpen}
        title="Edit Profile"
        type="button"
        className={styles.button}
      />
      <Modal isOpen={isOpen} handleClose={handleClose}>
          <Button onClick={handleClose} title="X" type="button" className={styles.close__button} />
        <div className={styles.header__container}>
          <Title title="Edit Profile" Level="h1" />
        </div>
        <div className={styles.main}>
          <div className={styles.form__container}>
            <form>
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
                label="First Name"
                type="text"
                name="firstname"
                value={userForm.firstname}
                onChange={(e) => handleChange(e)}
                placeHolder="Enter your first name"
                required={true}
                className={styles.input}
                disabled={isLoading}
              />
              <Input
                label="Last Name"
                type="text"
                name="lastname"
                value={userForm.lastname}
                onChange={(e) => handleChange(e)}
                placeHolder="Enter your last name"
                required={true}
                className={styles.input}
                disabled={isLoading}
              />
              <div className={styles.button__container}>
                <Button title="Save" type="submit" className={styles.button__save} onClick={handleSubmit} />
                <Button title="Cancel" type="button" className={styles.button__cancel} onClick={handleClose} />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
