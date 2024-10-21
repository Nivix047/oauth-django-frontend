import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Divider,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log the data being sent to ensure it's correct
      console.log({
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });

      // Clear any error messages
      setErrorMessage("");

      // Show success message and redirect
      setSuccessMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // Log the error for debugging
      console.log("Registration error:", error);

      // Handle validation errors or unexpected errors
      if (error.response && error.response.data) {
        setErrorMessage("Registration failed. Please check the input fields.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          border: "1px solid #ccc", // Light grey border
          padding: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Register
        </Typography>

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Typography variant="body1" gutterBottom>
            Username
          </Typography>
          <TextField
            label="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            autoComplete="username"
          />

          <Typography variant="body1" gutterBottom>
            First Name
          </Typography>
          <TextField
            label="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            margin="normal"
            autoComplete="given-name"
          />

          <Typography variant="body1" gutterBottom>
            Last Name
          </Typography>
          <TextField
            label="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            margin="normal"
            autoComplete="family-name"
          />

          <Typography variant="body1" gutterBottom>
            Email
          </Typography>
          <TextField
            label="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            type="email"
            autoComplete="email"
          />

          <Typography variant="body1" gutterBottom>
            Password
          </Typography>
          <TextField
            label="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            autoComplete="new-password"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>

        <Divider sx={{ my: 2 }} />
      </Box>
    </Container>
  );
};

export default RegisterForm;
