import React, { useContext, useState } from "react";
import UserContext from "@/contexts/UserProvider";
import useFetch from "@/hooks/useFetch";
import styles from "./index.module.scss";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";

const Index = ({ isOpen }) => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const { isLoading, error, data, fetchData } = useFetch(
    "/user/updateUser",
    formData,
    "PUT"
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetchData(formData).then((data) => {
    //   setUser(data);
    //   handleClose();
    // });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    // setFormData({
    //   firstname: user.firstname,
    //   lastname: user.lastname,
    //   email: user.email,
    //   password: "",
    //   confirm_password: "",
    // });
    setIsOpen(false);
    // close the modal
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div>
          <div className={styles.overlay} />
          <div className={styles.modalBox}>
            <div className={styles.title__container}>
              <Title title="Edit Profile" Level="h1" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
