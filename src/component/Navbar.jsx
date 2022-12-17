import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-danger p-3 row ">
      <h3 className="col">Navbar</h3>
      <Link className="col" to="add">
        <button className=" btn btn bg-secondary text-white">Add more</button>
      </Link>
    </div>
  );
};

export default Navbar;
