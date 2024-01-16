import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";
import CardGitHub from "./CardGitHub";
import Spinner from "./Spinner";

const GitHubUsers = () => {
  // hooks
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // traigo los datos usando el helper
      // setusers(de los datos de la api)
      try {
        const data = await fetchGitHubUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    console.log(users);
    fetchData();
  }, []);

  return (
    <>
        <div className="mx-auto max-w-[75%] text-center relative">
            <Spinner/>
            <h1 className="text-4xl font-bold mb-8">
                Usando UseEffect para realizar un FETCH  de la API GitHub
            </h1>
             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grap-4 mx-auto relative">
                {users.map(user => (
                    <CardGitHub key={user.id}
                    avatar_url={user.avatar_url}
                    login={user.login}
                    html_url={user.html_url}></CardGitHub>
                ))}
             </div>
        </div>
    </>
  );
};

export default GitHubUsers;
