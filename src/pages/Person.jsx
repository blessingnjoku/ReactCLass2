import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [persons, setPersons] = useState([]);
  const { id } = useParams();

  const getPersons = async () => {
    await axios.get(`http://localhost:3003/persons/${id}`).then((res) => {
      setPersons(res.data);
      console.log(persons);
    });
  };

  useEffect(() => {
    getPersons();
  }, []);

  return (
    <div className="p-3">
      <div style={{ backgroundColor: "pink" }}>
        <div className="container row">
          {persons && (
            <div>
              <div className="col">
                <h3>Name:</h3>
                <h3>age:</h3>
                <h3>state:</h3>
                <h3>hobbies:</h3>
                <h3>occupation:</h3>
              </div>
              <div className="col">
                <h3>{persons.name}</h3>
                <h3>{persons.age}</h3>
                <h3>{persons.state}</h3>
                <h3>{persons.hobbies}</h3>
                <h3>{persons.occupation}</h3>
              </div>
            </div>
          )}
        </div>
        <Link to="/">
          <button className=" btn btn bg-secondary text-white">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
