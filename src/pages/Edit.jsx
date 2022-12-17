import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [occupation, setOccupation] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getPersons = async () => {
    await axios.get(`http://localhost:3003/persons/${id}`).then((res) => {
      setName(res.data.name);
      setAge(res.data.age);
      setState(res.data.state);
      setHobbies(res.data.hobbies);
      setOccupation(res.data.occupation);
    });
  };

  useEffect(() => {
    getPersons();
  }, []);

  const data = {
    name: name,
    age: age,
    state: state,
    hobbies: hobbies,
    occupation: occupation,
  };
  const editItems = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3003/persons/${id}`, data).then(navigate("/"));
  };

  return (
    <div className="bg-danger p-3 row ">
      <h1>Edit user</h1>
      <form>
        <label>Name:</label>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age:</label>
        <input
          type="number"
          placeholder="enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>state:</label>
        <input
          type="text"
          placeholder="enter state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <label>Hobbies:</label>
        <input
          type="text"
          placeholder="enter hobby"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
        />
        <label>Occupation:</label>
        <input
          type="text"
          placeholder="enter occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <button className="btn btn bg-primary p-2" onClick={editItems}>
          Edit user
        </button>
        <Link to="/">
          <button className=" btn btn bg-secondary text-white">
            Back to home
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
