import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://64a07583ed3c41bdd7a75084.mockapi.io/react-crud", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };

  const mystyle = {
    color: "red",
    // backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 style={mystyle}>Create</h2>
        <Link to="/read">
          <button className="btn btn-outline-danger h-35 w-20 mt-2 shadow-lg">
            Show Data
          </button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" class="bttn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
