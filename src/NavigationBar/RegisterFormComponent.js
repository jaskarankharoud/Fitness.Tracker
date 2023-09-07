import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cookingLevel: "Beginner",
    experience: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can use this data to submit to a backend or perform any other actions
  };

  return (
    <Form onSubmit={handleSubmit} style={{ margin: "100px" }}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formCookingLevel">
        <Form.Label>Cooking Level</Form.Label>
        <Form.Control
          as="select"
          name="cookingLevel"
          value={formData.cookingLevel}
          onChange={handleChange}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formExperience">
        <Form.Label>Experience</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
      </Form.Group>
      <br />
      <Button variant="danger" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
