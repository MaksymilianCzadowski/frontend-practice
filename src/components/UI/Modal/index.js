import React, { useContext, useState } from "react";
import UserContext from "@/contexts/UserProvider";
import useFetch from "@/hooks/useFetch";
import styles from "./index.module.scss";

const Index = ({ isOpen, handleClose, children }) => {
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


  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div>
          <div className={styles.overlay} onClick={handleClose} />
          <div className={styles.modalBox}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
