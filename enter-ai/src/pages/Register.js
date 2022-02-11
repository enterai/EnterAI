import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "../components/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import "./Login.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="loginPage">
      <div className="loginHeader">
        <h1>Create new account</h1>
        <div>
          Already a member?{" "}
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "#0057ff" }}
          >
            <b>Log In</b>
          </NavLink>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            firstName: Yup.string().max(255).required("First name is required"),
            lastName: Yup.string().max(255).required("Last name is required"),
            phoneNumber: Yup.string()
              .max(10)
              .required("Phone number is required"),
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
                <div style={{ display: "flex", marginBottom: "20px" }}>
                  <TextField
                    label="First Name"
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    icon={<PersonOutlineIcon />}
                    helperText={touched.firstName && errors.firstName}
                    error={Boolean(touched.firstName && errors.firstName)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    style={{ marginRight: "10px" }}
                  />
                  <TextField
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    icon={<PersonOutlineIcon />}
                    helperText={touched.lastName && errors.lastName}
                    error={Boolean(touched.lastName && errors.lastName)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </div>
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
                  label="Phone Number"
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  icon={<PhoneOutlinedIcon />}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  icon={
                    showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )
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
                    Register
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

export default Register;
