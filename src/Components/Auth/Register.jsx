import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Title>Sign Up</Title>
      <Container className="d-flex justify-content-center align-items-center">
        <InputForm>
          <InputWrapper>
            <label>
              <span>
                Firstname <span className="required">*</span>
              </span>
              <Input type="text" required placeholder="Enter your Firstname" />
            </label>
            <label>
              <span>
                Lastname <span className="required">*</span>
              </span>
              <Input type="text" placeholder="Enter your Lastname" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Salutation">
              <span>
                Salutation <span className="required">*</span>
              </span>
              <Select required name="Salutation">
                <option disabled defaultValue>
                  Please Select
                </option>
                <option value="notSpecified">Not specified</option>
                <option value="mr">Mr.</option>
                <option value="mrs">Mrs.</option>
                <option value="ms">Ms.</option>
              </Select>
            </label>
            <label>
              <span>
                Email <span className="required">*</span>
              </span>
              <Input type="email" placeholder="Enter your Email" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Password <span className="required">*</span>
              </span>
              <Input type="Password" placeholder="Enter your Password" />
            </label>
            <label>
              <span>
                Confirm Password <span className="required">*</span>
              </span>
              <Input type="Password" placeholder="Confirm Password" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Profession">
              <span>
                Profession <span className="required">*</span>
              </span>
              <Select required name="Profession">
                <option disabled defaultValue>
                  Please Select
                </option>
                <option value="notSpecified">Profession 1</option>
                <option value="male">Profession 2</option>
                <option value="female">Profession 3</option>
                <option value="other">Profession 4</option>
              </Select>
            </label>
          </InputWrapper>
          <Link to="/register">Already have an account? Sign In.</Link>
          <Button type="submit" value="Sign Up" />
        </InputForm>
      </Container>
    </>
  );
};

const Title = styled.h1`
  margin: 30px auto 50px;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  text-transform: capitalize;
`;

const InputForm = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  width: 600px;
  a {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #486ff8;
    font-weight: 600;
    transition: all 0.3s ease-out;
    &:hover {
      color: #f6699e;
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
  label {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #39364f;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    .required {
      color: #f6699e;
    }
  }
`;

const Input = styled.input`
  background-color: #f4f4f4;
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
  &[type="email"] {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #39364f;
  }
  &::-webkit-input-placeholder {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #717488;
    font-weight: 400;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #f6699e;
    transition: all 0.3s ease-out;
  }
`;

const Button = styled.input`
  background-color: #486ff8;
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
  /* border: 2px solid transparent; */
  border: none;
  transition: all 0.3s ease-out;
  &:hover {
    /* border: 2px solid #486FF8; */
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

const Select = styled.select`
  background-color: #f4f4f4;
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 280px;
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #39364f;
  width: 100%;
  option {
    transition: all 0.3s ease-out;
    &:hover {
      transition: all 0.3s ease-out;
    }
  }
  &::-webkit-input-placeholder {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #717488;
    font-weight: 400;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #f6699e;
    transition: all 0.3s ease-out;
  }
`;

export default Register;
