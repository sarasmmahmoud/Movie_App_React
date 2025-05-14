import React, { useState } from "react";
import MyButton from "../components/MyButton";
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const validationErrors = {};

    if (!data.name) {
      validationErrors.name = 'Name is required';
    }

    if (!data.email) {
      validationErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
    ) {
      validationErrors.email = 'Invalid email address';
    }

    if (!data.username) {
      validationErrors.username = 'Username is required';
    }

    if (!data.password) {
      validationErrors.password = 'Password is required';
    } else if (data.password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters';
    }

    if (!data.confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (data.password !== data.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", data);
    // Perform registration logic here

    // Redirect to home page
    history.push('/');
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </label>
        <br />

        <label>
          Username:
          <input type="text" name="username" />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </label>
        <br />

        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
          {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        </label>
        <br />

        <MyButton name="Register" type="submit" />
      </form>
    </div>
  );
}

export default Register;
