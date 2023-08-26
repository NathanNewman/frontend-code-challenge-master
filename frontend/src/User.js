import React from "react";
import { ListGroupItem, Card, CardBody, Button } from "reactstrap";
import "./user.css";

function User({ user, handleActivation, handleDeactivation, handleDelete }) {
  return (
    <ListGroupItem>
      <Card className="user-card" color="dark">
        <CardBody>
          <div className="user-info">
            <div className="left-info">
              <div className="name">
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
              </div>
              <div className="state">
                {" "}
                status:{" "}
                {user.state === "pending" ? (
                  <div className="pending">pending</div>
                ) : (
                  <div className="active">active</div>
                )}
              </div>
            </div>
            <div className="right-info">
              <div className="buttons">
                <div className="left-button">
                  {user.state === "pending" ? (
                    <Button
                      color="primary"
                      onClick={() => handleActivation(user)}
                    >
                      Activate
                    </Button>
                  ) : (
                    <Button
                      color="secondary"
                      onClick={() => handleDeactivation(user)}
                    >
                      Deactivate
                    </Button>
                  )}
                </div>
                <div className="right-button">
                  <Button color="danger" onClick={() => handleDelete(user)}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </ListGroupItem>
  );
}

export default User;
