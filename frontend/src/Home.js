import React from "react";
import { Button, Card, CardTitle, CardBody, Col, CardText } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./background.css";

function Home() {
  const history = useHistory();
  function handleAdmin() {
    history.push("/admin");
  }
  function handleRegister() {
    history.push("/register");
  }
  return (
    <div className="background d-flex justify-content-center align-items-center vh-100">
      <Col sm="3">
      <Card className="text-center">
        <CardTitle>Yodler</CardTitle>
        <CardBody>
        <img className="logo" src={require("./images/people.png")} />
          <CardText>Welcome to Yodler! Register or manage users.</CardText>
        <Button className="mr-2" color="primary" onClick={handleAdmin}>
          Admin
        </Button>
        <Button color="secondary" onClick={handleRegister}>
          Register
        </Button>
        </CardBody>
      </Card>
      </Col>
    </div>
  );
}

export default Home;
