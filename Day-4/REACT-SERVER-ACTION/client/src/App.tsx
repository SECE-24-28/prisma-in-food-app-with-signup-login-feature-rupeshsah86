import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9989/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>Users Data</h1>

      {users.map((user: any) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;