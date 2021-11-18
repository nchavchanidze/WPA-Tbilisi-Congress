import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Abstract = () => {
  return (
    <>
      <Title>Submit Your Absract</Title>
      <AbstractWrapper>
        <InputForm>
          <InputWrapper>
            <label>
              <span>Input 1</span>
              <Input type="text" placeholder="Enter your Data" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Email <span className="required">*</span>
              </span>
              <Input type="email" placeholder="Enter your Email" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="select">
              <span>
                Select <span className="required">*</span>
              </span>
              <Select required name="select">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                <option value="select-1">Select 1</option>
                <option value="select-2">Select 2</option>
                <option value="select-3">Select 3</option>
              </Select>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Upload your Abstract <span className="required">*</span>
              </span>
              <Input
                type="file"
                id="absract"
                name="absract"
                accept=".doc, .docx"
              />
            </label>
          </InputWrapper>
          <Button type="submit" value="Submit Abstract" />
        </InputForm>
      </AbstractWrapper>
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

const AbstractWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
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
      color: #486FF8;
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
      color: #486FF8;
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
    border: 2px solid #486FF8;
    transition: all 0.3s ease-out;
  }
  &[type="file"] {
    background-color: transparent;
  padding: 0;
    &::-webkit-file-upload-button {
      background-color: #486ff8;
      font-family: "Urbanist", sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      border-radius: 5px;
      height: 50px;
      padding: 0 20px;
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
      outline: none;
      border: 2px solid transparent;
      transition: all 0.3s ease-out;
      &:hover {
        border: 2px solid #486FF8;
        background-color: #fff;
        color: #486ff8;
        transition: all 0.3s ease-out;
      }
    }
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
    border: 2px solid #486FF8;
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
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #486ff8;
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

export default Abstract;
