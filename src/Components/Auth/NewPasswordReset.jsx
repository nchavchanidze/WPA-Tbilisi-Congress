import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return <AlertBox>This field is required!</AlertBox>;
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <AlertBox>The password must be between 6 and 40 characters.</AlertBox>
    );
  }
};

const NewPasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const form = useRef();
  const checkBtn = useRef();
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const params = useParams();

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const data = {
    key: params.token,
    password: password,
  };

  const handleNewPassword = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (password === confirmPassword) {
      if (checkBtn.current.context._errors.length === 0) {
        axios
          .post(
            "https://wpatbilisicongress.com/Server/API/Auth/ResetPassword",
            data
          )
          .then(
            (response) => {
              setMessage(response.data.msg);
              setSuccessful(true);
              console.log(response.data);
            },
            (error) => {
              const resMessage =
                (error.respose &&
                  error.response.data &&
                  error.response.data.msg) ||
                error.msg ||
                error.toString();
              setMessage(resMessage);
              setSuccessful(false);
            }
          );
      }
    }
  };

  return (
    <StyledContainer>
      {message ? (
        <AlertWrapper>
          <SuccessMessageWrapper
            className={successful ? "success" : "error"}
            role="alert"
          >
            <SuccessMessage>{message}</SuccessMessage>
          </SuccessMessageWrapper>
          <LinkButton to="/">Go to Home Page</LinkButton>
        </AlertWrapper>
      ) : (
        <InputForm onSubmit={handleNewPassword} ref={form}>
          <InputWrapper>
            <label htmlFor="Password">
              Enter Password
              <StyledInput
                type="password"
                name="Password"
                value={password}
                onChange={onChangePassword}
                validations={[required, vpassword]}
                placeholder="Enter New Password"
              />
            </label>
            <label>
              Confirm Password
              <StyledInput
                type="password"
                className="form-control"
                name="password"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                validations={[required]}
                placeholder="Confirm New Password"
              />
              {confirmPassword !== password ? (
                <AlertBox>The password is not same.</AlertBox>
              ) : (
                ""
              )}
            </label>
          </InputWrapper>
          <Button disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Send</span>
          </Button>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </InputForm>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding: 100px 0;
`;

const InputForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  max-width: 600px;
  width: 100%;
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
  gap: 30px;
  width: 100%;
  @media only screen and (max-width: 991.98px) {
    flex-wrap: wrap;
  }
  label {
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    .required {
      color: #bd1b21;
    }
    div {
      width: 100%;
    }
  }
`;
const StyledInput = styled(Input)`
  background-color: #f4f4f4;
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
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
const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const SuccessMessageWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 15px;
  border-radius: 8px;
  &.success {
    background-color: #bbfff1;
    border: 2px solid #2ea58d;
  }
  &.error {
    background-color: #ffa5ac;
    border: 2px solid #f15360;
  }
`;
const SuccessMessage = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;

const LinkButton = styled(Link)`
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  margin-top: 50px;
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;
export default NewPasswordReset;
