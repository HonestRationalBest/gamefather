import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axios from "axios";
import { StoreContext } from "../../context/store";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { dispatch } = useContext(StoreContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   "http://localhost:4000/api/auth/register",
      //   formData
      // );
      //mockResponse = response
      setTimeout(() => {
        const mockResponse = {
          status: 201,
          data: {
            token: "9x61b839162x3918236x1",
            username: formData.username,
          },
        };
        if (mockResponse.status === 201) {
          dispatch({ type: 'SET_USER', payload: mockResponse.data });
          localStorage.setItem('token', mockResponse.data.token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${mockResponse.data.token}`;
        }
      }, 100);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  

  return (
    <Container maxWidth="sm">
      <h1>Register</h1>
      <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
        <TextField
          id="username"
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleInputChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
