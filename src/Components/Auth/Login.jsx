import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../../Helper/Context";
import axios from "axios";

// import { UserContext } from "../../App";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../services/auth.service";

import { useAuth } from "./Auth";

const required = (value) => {
  if (!value) {
    return <AlertBox role="alert">This field is required!</AlertBox>;
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return <AlertBox>This is not a valid email.</AlertBox>;
  }
};

const Login = (props) => {
  // authenticate(localStorage.getItem("user"))

  const { setUsertoken, setUser } = useContext(LoginContext);

  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from || "/";

  const form = useRef();
  const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const pass = e.target.value;
    setPass(pass);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      return axios
        .post("https://wpatbilisicongress.com/Server/API/Auth/Login", {
          email,
          pass,
        })
        .then(
          (response) => {
            if (response.data.msg) {
              if (response.data.error === false) {
                // console.log(response.data.userData);
                localStorage.setItem("user", response.data.msg);
                localStorage.setItem(
                  "userdata",
                  JSON.stringify({
                    firstname: response.data.userData[0].firstname,
                    lastname: response.data.userData[0].lastname,
                    salutation: response.data.userData[0].salutation,
                    email: response.data.userData[0].email,
                  })
                );
                setUsertoken(response.data.msg);
                setUser({
                  firstname: response.data.userData[0].firstname,
                  lastname: response.data.userData[0].lastname,
                  salutation: response.data.userData[0].salutation,
                  email: response.data.userData[0].email,
                });
              }
            }
            navigate(from);
            return response.data;
          },

          // AuthService.Login(email, pass).then(
          // (response) => {
          // if (response.data.msg) {
          //   if (response.data.error === false) {
          //     // console.log(response.data.userData);
          //     // localStorage.setItem("user", response.data.msg);
          //     // localStorage.setItem(
          //     //   "userdata",
          //     //   JSON.stringify({
          //     //     firstname: response.data.userData[0].firstname,
          //     //     lastname: response.data.userData[0].lastname,
          //     //     salutation: response.data.userData[0].salutation,
          //     //     email: response.data.userData[0].email,
          //     //   })
          //     // );
          //     setUserToken(response.data.msg);
          //   }
          // }
          // console.log(response.data.userData[0].firstname);
          // setLoading(false);
          // console.log(response.data);
          // },
          // () => {
          //   navigate(from);
          // },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.error) ||
              error.message ||
              error.toString();
            setLoading(false);
            setMessage(resMessage);
            toast.error(
              "The specified email or password is invalid or unregistered.",
              {
                position: "bottom-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
          }
        )
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <SignWrapper>
      <Title>Sign In</Title>
      <Container className="d-flex justify-content-center align-items-center">
        <InputForm onSubmit={handleLogin} ref={form}>
          <InputWrapper>
            <label htmlFor="Email">Email</label>
            <StyledInput
              type="email"
              name="Email"
              value={email}
              onChange={onChangeUsername}
              validations={[required, validEmail]}
              placeholder="Enter your Email"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <StyledInput
              type="password"
              className="form-control"
              name="password"
              value={pass}
              onChange={onChangePassword}
              validations={[required]}
              placeholder="Enter your Password"
            />
          </InputWrapper>
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/register">Don’t have an account? Create one.</Link>
          <Button disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </Button>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          {/* {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
                The specified email or password is invalid or unregistered.
              </div>
            </div>
          )} */}
        </InputForm>
      </Container>
    </SignWrapper>
  );
};

const SignWrapper = styled.div`
  padding: 200px 0 100px;
`;

const Title = styled.h1`
  margin: 30px auto 50px;
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #000;
  text-transform: capitalize;
`;

const InputForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  a {
    font-family: "Titillium Web", sans-serif;
    font-size: 14px;
    color: #bd1b21;
    font-weight: 600;
    transition: all 0.3s ease-out;
    &:hover {
      color: #bd1b21;
      transition: all 0.3s ease-out;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  label {
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
`;

const StyledInput = styled(Input)`
  background-color: #f4f4f4;
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 280px;
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
  &[type="email"] {
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }
  &::-webkit-input-placeholder {
    font-family: "Titillium Web", sans-serif;
    font-size: 14px;
    color: #717488;
    font-weight: 400;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #bd1b21;
    transition: all 0.3s ease-out;
  }
`;

const Button = styled.button`
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  /* border: none; */
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;

const AlertBox = styled.div`
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #bd1b21;
  border-radius: 0.25rem;
  background-color: #ffd2d3;
  color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
  font-size: 14px;
`;

export default Login;
