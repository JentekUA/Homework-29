import { useEffect, useState } from "react";
import User from "./User";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(user => (
        <User key={user.key} name={user.name}></User>
      ))}
    </ul>
  );
}
