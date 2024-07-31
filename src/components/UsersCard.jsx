import { useState, useEffect } from "react";
import { dataObtener } from "../constants";
import UserList from "./UserList";

const UsersCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataObtener();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <UserList dataList={data} />
  )
}

export default UsersCard;