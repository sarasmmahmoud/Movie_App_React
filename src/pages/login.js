import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MyButton from "../components/MyButton";
import { useHistory } from 'react-router-dom';


function Login() {
  const history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {

          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Required';
          }
          if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
          }
          // if (values.password.length > 20) {
          //   errors.password = 'Password must be at most 20 characters';
          // }
          // if (!/[a-z]/.test(values.password)) {
          //   errors.password = 'Password must contain at least one lowercase letter';
          // }
          // if (!/[A-Z]/.test(values.password)) {
          //   errors.password = 'Password must contain at least one uppercase letter';
          // }
          // if (!/[0-9]/.test(values.password)) {
          //   errors.password = 'Password must contain at least one number';
          // }
          // if (!/[!@#$%^&*]/.test(values.password)) {
          //   errors.password = 'Password must contain at least one special character';
          // }
          // if (values.password === values.email) {
          //   errors.password = 'Password cannot be the same as email';
          // }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          history.push('/');
        }}
      >
        {({ isSubmitting }) => (

          <Form>

            <Field type="email" name="email" />

            <ErrorMessage name="email" component="div" />

            <Field type="password" name="password" />

            <ErrorMessage name="password" component="div" />

            {/* <button type="submit" disabled={isSubmitting}>

              Submit

            </button> */}
            <MyButton name="Login" type="submit"/>

          </Form>

          )}
      </Formik>
    </div>
  );
}

export default Login;