import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Api from "./helpers/api.js";
import "./background.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const [submission, setSubmission] = useState(false);

  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await Api.register(formData);
      console.log(response);
      setSubmission(true);
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  useEffect(() => {
    if (submission) history.push("/admin");
  }, [submission, history]);

  return (
    <div className="background">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card>
          <CardBody>
            <CardTitle className="text-center">Register</CardTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary">
                Register
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Register;
