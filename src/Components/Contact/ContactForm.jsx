import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return <AlertBox>This field is required!</AlertBox>;
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return <AlertBox>This is not a valid email.</AlertBox>;
  }
};

const ContactForm = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const userReportMessage = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    subject: subject,
    body: userMessage,
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      axios
        .post(
          "https://wpatbilisicongress.com/Server/API/Contact/SendMessage",
          userReportMessage
        )
        .then(
          (response) => {
            setMessage(response.data.msg);
            setSuccessful(true);
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
    <ContactWrapper>
      <Description>
        Have a question, feedback or idea regarding the WPA Thematic Congres in
        Tbilisi? Use the form below and a member of our team will contact you
        shortly.
      </Description>
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
        <InputForm onSubmit={handleSendMessage} ref={form}>
          <InputWrapper>
            <label>
              <span>
                First Name <span className="required">*</span>
              </span>
              <StyledInput
                type="text"
                required
                placeholder="Enter your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                validations={[required]}
              />
            </label>
            <label>
              <span>
                Last Name <span className="required">*</span>
              </span>
              <StyledInput
                type="text"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                validations={[required]}
              />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Email <span className="required">*</span>
              </span>
              <StyledInput
                type="email"
                required
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                validations={[required, validEmail]}
              />
            </label>
            <label>
              <span>
                Subject <span className="required">*</span>
              </span>
              <StyledInput
                type="text"
                placeholder="Enter your Company Name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                validations={[required]}
              />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Message <span className="required">*</span>
              </span>
              <StyledTextarea
                rows="5"
                required
                placeholder="Enter your Message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                validations={[required]}
              />
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
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  padding: 100px 0;
`;

const Description = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  color: #717488;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  /* max-width: 530px; */
  margin: 15px auto 30px;
`;

const InputForm = styled(Form)`
  margin: 50px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  max-width: 600px;
  @media only screen and (max-width: 615.98px) {
    padding: 0 20px;
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
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
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

const StyledTextarea = styled(Textarea)`
  background-color: #f4f4f4;
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  &::-webkit-input-placeholder {
    font-family: "Urbanist", sans-serif;
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
  font-family: "Urbanist", sans-serif;
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

export default ContactForm;
