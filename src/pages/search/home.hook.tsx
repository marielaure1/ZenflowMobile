import { useState,useEffect } from 'react';
import { useQuery } from "react-query";

const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
};

export default function useHome() {

    const { data: users, isLoading } = useQuery("users", fetchUsers);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (!isLoading && users) {
      setUserList(users);
    }

    console.log(users);
    
  }, [isLoading, users]); 

    return { userList, isLoading }
}