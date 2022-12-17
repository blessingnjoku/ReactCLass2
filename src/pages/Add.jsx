import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [occupation, setOccupation] = useState("");
  const navigate = useNavigate();
  const data = {
    name: name,
    age: age,
    state: state,
    hobbies: hobbies,
    occupation: occupation,
  };

  function GetItems(e) {
    e.preventDefault();
    axios.post("http://localhost:3003/persons/", data).then(navigate("/"));
  }

  return (
    <div className="bg-danger p-3 row ">
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
        <button className="btn btn bg-primary p-2" onClick={GetItems}>
          Add user
        </button>
      </form>
    </div>
  );
};

export default Add;
