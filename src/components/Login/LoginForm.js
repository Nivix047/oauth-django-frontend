import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub"; // GitHub icon from Material UI

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login/",
        {
          username,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); // Redirect after successful login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container maxWidth="xs">
      {/* Border around the box */}
      <Box
        sx={{
          border: "1px solid #ccc", // Light grey border
          padding: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>
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
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="center">
          or sign up with
        </Typography>

        {/* GitHub icon button for OAuth */}
        <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/login/oauth/authorize"
            fullWidth
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
