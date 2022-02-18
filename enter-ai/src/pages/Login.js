import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Link, NavLink } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import TextField from "../components/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LoginRegisterSvg from "../assets/ELearning.gif";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main">
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
            }) => {
              const submitBtnDisabled = Object.keys(errors).length > 0;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="loginForm">
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
                          Login
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
      <img className="loginImg" src={LoginRegisterSvg} alt="Login" />
    </div>
  );
};

export default Login;
