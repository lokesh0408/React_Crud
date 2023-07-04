import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  // for toggle
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://64a07583ed3c41bdd7a75084.mockapi.io/react-crud")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }

  const handleDelete = (id) => {
    axios
      .delete(`https://64a07583ed3c41bdd7a75084.mockapi.io/react-crud/${id}`)
      // so again call getData function to show on the page that, that row actually gets deleted
      .then(() => {
        getData();
      });
  };

  // use useEffect() else api will call itself in loop..
  useEffect(() => {
    getData();
  }, []); // now, it will be called only once on rendering the component

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const mystyle = {
    color: "DodgerBlue",
    // backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <>
      {/* for toggler  */}
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => {
            if (tabledark === "table-dark") {
              setTableDark("");
            } else {
              setTableDark("table-dark");
            }
          }}
        />
      </div>
      {/* read the content */}
      <div className="d-flex justify-content-between">
        <h2 style={mystyle}>Read</h2>
        <Link to="/">
          <button className="btn btn-secondary h-35 w-20 mt-2 shadow-lg">
            Create
          </button>
        </Link>
      </div>
      <table className={`table ${tabledark} table-striped table-hover`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {/* now use jsx to put data dynamically */}
        {data.map((eachData) => {
          const { id, name, email } = eachData;
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    {/* navigate to the update page on clicking the edit button */}
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          // the data should be already shown in the update page whom we will update
                          setToLocalStorage(id, name, email);
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(eachData.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
