import React, { useEffect, useState, useContext } from "react";
import useFetch from "@/hooks/useFetch";
import UserContext from "@/contexts/UserProvider";
import EditProfile from "@/components/partials/modals/EditProfil/";
import Button from "@/components/UI/Button";
import styles from "./index.module.scss";

const Index = () => {
  const { isLoading, error, data, fetchData } = useFetch(
    "/user/getUser",
    null,
    "GET"
  );

  
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  // fetch user data and set it to the user state
  useEffect(() => {
    fetchData();
    console.log("data", data);
  }, []);

  useEffect(() => {
    if (data) {
      console.log("data profil", data);
      setUser(data);
    }
  }, [data]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <p>Profil page</p>
      {isLoading && <p>Loading user data...</p>}
      
        <div>
          <p>{user && user.firstname }</p>
          <p>{user && user.lastname}</p>
          <p>{user && user.email}</p>
        </div>

      <Button onClick={handleOpen} title="Edit Profile" type="button" className={styles.button} />
        <EditProfile isOpen={isOpen} />
    </div>
  );
};

export default Index;
