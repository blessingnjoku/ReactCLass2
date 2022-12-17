import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    await axios.get("http://localhost:3003/persons").then((res) => {
      setUsers(res.data.reverse());
      console.log(users);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  function handleDelete(id) {
    axios.delete(`http://localhost:3003/persons/${id}`).then(getUser());
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>s/n</th>
            <th>Name</th>
            <th>Age</th>
            <th>State</th>
            <th>Hobbies</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((items, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.name}</td>
                <td>{items.age}</td>
                <td>{items.state}</td>
                <td>{items.hobbies}</td>
                <td>{items.occupation}</td>
                <td>
                  <Link to={`/edit${items.id}`}>
                    <button className="text-success px-2 m-4 ">edit</button>
                  </Link>
                  <button
                    className="text-danger m-4"
                    onClick={() => handleDelete(items.id)}
                  >
                    delete
                  </button>
                  <Link to={`/person${items.id}`}>
                    <button className="text-primary m-4">view</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
