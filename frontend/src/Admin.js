import React, { useState, useEffect } from "react";
import Api from "./helpers/api.js";
import User from "./User";
import { Col } from "reactstrap";
import "./admin.css";
import "./background.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await Api.allUsers();
        setUsers(response);
      } catch (error) {
        setErrorMessage(error);
      }
    }
    getUsers();
  }, []);

  const handleActivation = async (user) => {
    user.state = "active";
    const response = await Api.updateUser(user);

    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((u) =>
        u.id === user.id ? response : u
      );
      return updatedUsers;
    });
  };

  const handleDeactivation = async (user) => {
    user.state = "pending";
    const response = await Api.updateUser(user);

    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((u) =>
        u.id === user.id ? response : u
      );
      return updatedUsers;
    });
  };

  const handleDelete = async (user) => {
    const response = await Api.deleteUser(user.id);
    console.log(response);

    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((u) => u.id !== user.id);
      return updatedUsers;
    });
  };

  const usersList = (
    <div className="background">
      <div className="center-container">
        <Col xs="12" sm="auto" md="8" lg="6">
          {users.map((user) => (
            <User
              key={user.id}
              user={user}
              handleActivation={handleActivation}
              handleDeactivation={handleDeactivation}
              handleDelete={handleDelete}
            />
          ))}
        </Col>
      </div>
    </div>
  );
  return <div>{users ? usersList : errorMessage}</div>;
}

export default Admin;
