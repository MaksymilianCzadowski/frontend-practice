import React, { useEffect, useState, useContext } from "react";
import useFetch from "@/hooks/useFetch";
import UserContext from "@/contexts/UserProvider";

const Index = () => {
  const { isLoading, error, data, fetchData } = useFetch(
    "/user/getUser",
    null,
    "GET"
  );

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



  return (
    <div>
      <p>Profil page</p>
      {isLoading && <p>Loading user data...</p>}
      
        <div>
          <p>{user && user.firstname }</p>
          <p>{user && user.lastname}</p>
          <p>{user && user.email}</p>
        </div>
    </div>
  );
};

export default Index;
