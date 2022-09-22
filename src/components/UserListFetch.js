import React, { useState, useEffect } from "react";
//axios
import axios from "axios";

function UserListFetch() {
  //state
  const [list, setList] = useState([]);
  //handleDelete
  const handleDelete = (userID) => {
    const remainingItems = list.filter((item) => item.id !== userID);
    setList(remainingItems);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      setList(data);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <h2>UserListFetch - Posts</h2>
      <ul>
        {list?.map((item) => (
          <div key={item.id}>
            <li>{item.username}</li>
            <button type="button" onClick={() => handleDelete(item.id)}>
              delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default UserListFetch;
