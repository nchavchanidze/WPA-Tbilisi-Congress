import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import axios from "axios";

const validEmail = (value) => {
  if (!isEmail(value)) {
    return <AlertBox>This is not a valid email.</AlertBox>;
  }
};

const required = (value) => {
  if (!value) {
    return <AlertBox role="alert">This field is required!</AlertBox>;
  }
};

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const form = useRef();
  const checkBtn = useRef();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      axios
        .post("https://wpatbilisicongress.com/Server/API/Auth/Reset", {
          email: email,
        })
        .then(
          (response) => {
            setMessage(response.data.msg);
            setSuccessful(true);
            toast.success("The message with password recovery instruction has been sent to your email.", {
              position: "bottom-right",
              autoClose: 7000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            console.log(response.data);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.msg) ||
              error.message ||
              error.toString();
            setMessage(resMessage);
            setSuccessful(false);
          }
        );
    }
  };

  return (
    <StyledContainer>
      {successful ? (
        <AlertWrapper>
          <SuccessMessageWrapper
            className={successful ? "success" : "error"}
            role="alert"
          >
            <SuccessMessage>
              {successful ? (
                <>
                  The message with password recovery instruction has been sent
                  to your email.
                </>
              ) : (
                <>
                  A problem has occurred during the process. Please, try again!
                </>
              )}
            </SuccessMessage>
          </SuccessMessageWrapper>
          <LinkButton to="/">Go to Home Page</LinkButton>
        </AlertWrapper>
      ) : (
        <>
          <About>
            If you forgot password, please enter your Email address.
          </About>
          <InputForm onSubmit={handleReset} ref={form}>
            <InputWrapper>
              <label htmlFor="Email">Email</label>
              <StyledInput
                type="email"
                name="Email"
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
                placeholder="Enter your Email"
              />
            </InputWrapper>
            <Button disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Send</span>
            </Button>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </InputForm>
        </>
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
  align-items: flex-end;
  /* flex-direction: column; */
  gap: 25px;
  width: 600px;

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
  width: 100%;
  div {
    width: 100%;
  }
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
  min-width: 280px;
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
  height: 58px;
  width: 50%;
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
    /* background-color: #bbfff1; */
    /* border: 2px solid #2ea58d; */
    p {
      color: #000;
    }
  }
  &.error {
    /* background-color: #ffa5ac; */
    /* border: 2px solid #f15360; */
    p {
      color: #bc1a21;
    }
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

const About = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  line-height: 1.6;
  margin: 0 auto 25px;
  text-align: center;
`;
export default PasswordReset;
