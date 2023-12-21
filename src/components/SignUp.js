import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isValidEmail = (email) => {
  // Simple email validation: must contain '@'
  return email.includes('@');
};

const isValidPassword = (password) => {
  // Password validation: min length 8, at least one special character, one number, one upper case, and one lower case
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>0-9a-zA-Z]).{8,}$/;
  return passwordRegex.test(password);
};

const isValidName = (name) => {
  // Name validation: at least one character
  return name.trim().length > 0;
};

const defaultTheme = createTheme();

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!isValidEmail(email)) {
      setError('Invalid email format');
      return;
    }

    // Validate password
    if (!isValidPassword(password)) {
      setError('Invalid password format');
      return;
    }

    // Validate First Name and Last Name
    if (!isValidName(firstName) || !isValidName(lastName)) {
      setError('First Name and Last Name are required');
      return;
    }

    // Your existing logic for storing user data
const existingUserDataString = localStorage.getItem('userArray');
const userArray = existingUserDataString ? JSON.parse(existingUserDataString) : [];

// Add the new user data to the array
const newUser = {
  email: email,
  password: password,
  firstName: firstName,
  lastName: lastName,
};

userArray.push(newUser);

// Store the updated user data array in localStorage
localStorage.setItem('userArray', JSON.stringify(userArray));

console.log('User data stored:', newUser);


    // Display success toast
    toast.success('Sign-up successful', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Redirect to the sign-in page
    navigate('/signin');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <p>Note: Password should contain a minimum length of 8 with at least one special character, one number, and one lowercase and uppercase alphabet</p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isValidEmail(email) || !isValidPassword(password) || !isValidName(firstName) || !isValidName(lastName)}
            >
              Sign Up
            </Button>
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {/* Toast container */}
      <ToastContainer />
    </ThemeProvider>
  );
};

export default SignUp;
