# Fullstack User Authentication and Dashboard Template

## Overview

This project is a **full-stack template** built with **React** and **Material-UI (MUI)** on the frontend, and **Django** on the backend. It includes a user creation page, login page (with OAuth integration for GitHub), and a dashboard. This template is ready to be scaled and can serve as the foundation for a variety of web applications.

The backend for this template, built with Django, can be found [here](https://github.com/Nivix047/oauth-django).

## Features

- **User Registration**: Allows users to create a new account.
- **User Login**: Provides a login form with password authentication.
- **OAuth Login**: Offers a GitHub OAuth login integration.
- **Dashboard**: A placeholder dashboard page where additional content or features can be added.
- **Logout**: Clears authentication tokens and redirects users to the login page.
- **Responsive Design**: Built using Material UI components to ensure responsiveness across devices.

## Tech Stack

### Frontend:

- **React**: A JavaScript library for building user interfaces.
- **Material-UI (MUI)**: A popular React UI framework for fast and simple design.
- **React Router**: For navigating between pages in the app.
- **Axios**: For making API requests to the backend.

### Backend (not included in this repo):

- **Django**: Python web framework that powers the backend, handling user creation, authentication, and OAuth.
- **Django REST Framework**: For building REST APIs to communicate with the frontend.

## Getting Started

### Prerequisites

- Node.js installed (you can use `nvm` to manage Node.js versions).
- A running Django backend with user authentication (including OAuth for GitHub). You can find the backend repository [here](https://github.com/your-backend-repo).

### Setup Instructions

1. Install dependencies using your preferred package manager.
2. Configure the backend URL:

   - The frontend expects the Django backend to run on `http://localhost:8000`.
   - If your backend is running on a different URL, update the Axios requests in the components like `LoginForm.js` and `RegisterForm.js`.

3. Run the React app in your local environment.

### Django Backend

The backend is powered by Django and should include endpoints for:

- **User registration**: Handles new user signups.
- **User login**: Authenticates users and returns a token.
- **OAuth login**: Allows users to log in with GitHub via OAuth.

Make sure your Django backend is configured with CORS settings to allow requests from the React frontend (e.g., using `django-cors-headers`), and that it's running on `localhost:8000` or whatever URL your Axios calls are pointing to.

## Deployment

To deploy both the frontend and backend on the same EC2 instance using Docker:

1. **Containerize the Frontend**: Create a Dockerfile for the frontend and build the image.
2. **Containerize the Backend**: Create a Dockerfile for the Django backend.
3. **Deploy on EC2**: Use Docker Compose or standalone Docker containers to deploy both the frontend and backend on the same EC2 instance.
