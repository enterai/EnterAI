import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Link, NavLink } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import TextField from "../components/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LoginRegisterSvg from "../assets/online_learning.svg";
import "./Login.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="main">
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
              firstName: Yup.string()
                .max(255)
                .required("First name is required"),
              lastName: Yup.string().max(255).required("Last name is required"),
              phoneNumber: Yup.string()
                .max(255)
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
            }) => {
              const submitBtnDisabled = Object.keys(errors).length > 0;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="loginForm">
                    <div className="nameContainer">
                      <div className="firstNameContainer">
                        <TextField
                          label="First Name"
                          type="text"
                          name="firstName"
                          placeholder="Enter your first name"
                          required
                          icon={<PersonOutlineIcon />}
                          helperText={touched.firstName && errors.firstName}
                          error={Boolean(touched.firstName && errors.firstName)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                        />
                      </div>
                      <div>
                        <TextField
                          label="Last Name"
                          type="text"
                          name="lastName"
                          placeholder="Enter your last name"
                          required
                          icon={<PersonOutlineIcon />}
                          helperText={touched.lastName && errors.lastName}
                          error={Boolean(touched.lastName && errors.lastName)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                        />
                      </div>
                    </div>
                    <TextField
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
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
                      required
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
                      required
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
                    <div className="submitBtns">
                      <Link to="/" className="homeBtn">
                        <Button
                          variant="outlined"
                          size="medium"
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "40px",
                            textTransform: "none",
                            color: "black",
                            borderColor: "#9d9d9d",
                            fontWeight: "bold",
                          }}
                        >
                          Go to Home
                        </Button>
                      </Link>
                      <Tooltip
                        title={
                          submitBtnDisabled ? "Please fill all the fields" : ""
                        }
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="medium"
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "40px",
                            textTransform: "none",
                            fontWeight: "bold",
                            backgroundColor:
                              submitBtnDisabled || isSubmitting
                                ? "#9d9d9d"
                                : "#0057ff",
                            color: "white",
                            cursor:
                              submitBtnDisabled || isSubmitting
                                ? "not-allowed"
                                : "pointer",
                          }}
                        >
                          Register
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
      <img className="loginImg" src={LoginRegisterSvg} alt="Register" />
    </div>
  );
};

export default Register;
