import { useState, useEffect } from 'react';
import { useQuery } from "react-query";

const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
};

export default function useHome() {
    const { data, isLoading: queryLoading, refetch } = useQuery("users", fetchUsers);
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Nouvel état isLoading

    useEffect(() => {
        if (!queryLoading && data) {
          setUserList(data.results);
          setIsLoading(false); // Mettre isLoading à false lorsque les données sont chargées
        }
    }, [queryLoading, data]);

    const getClientInfos = async () => {
        setIsLoading(true); // Mettre isLoading à true lors du rafraîchissement
        await refetch();
        setIsLoading(false); // Mettre isLoading à false après le rafraîchissement
    };

    return { userList, isLoading, getClientInfos };
}
