import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "../components/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginPage">
      <div className="loginHeader">
        <h1>Login to your account</h1>
        <div>
          Not a member?{" "}
          <NavLink
            to="/register"
            style={{ textDecoration: "none", color: "#0057ff" }}
          >
            <b>Register</b>
          </NavLink>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .max(255)
              .required("Password is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="loginForm">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  icon={<MailOutlineIcon />}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email && errors.email)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  icon={
                    showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                  }
                  onIconClick={showPasswordHandler}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  style={{ marginBottom: "20px" }}
                />
                <div className="submitBtn">
                  <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    style={{
                      borderRadius: "20px",
                      width: "150px",
                      height: "40px",
                      textTransform: "none",
                      fontWeight: "bold",
                      backgroundColor: "#0057ff",
                      color: "white",
                    }}
                    disabled={
                      isSubmitting ||
                      Boolean(errors.email) ||
                      Boolean(errors.password)
                    }
                  >
                    Login
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
