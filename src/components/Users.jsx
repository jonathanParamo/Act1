import { useState, useEffect } from "react";
import UserList from "./UserList";
import { WithSearchBar } from "./WithSearchBar";
import { dataObtener } from "../constants";

function Usuarios() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataObtener();
      setUserData(data);
    };
    fetchData();
  },[]);

  const UserListWithSearch = WithSearchBar(UserList, userData, [
    "name",
    "phone",
    "email",
  ])

  return (
    userData ? <UserListWithSearch /> : <Loader />
  )
}

export default Usuarios;



