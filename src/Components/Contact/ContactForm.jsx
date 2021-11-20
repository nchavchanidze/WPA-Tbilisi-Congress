import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <ContactWrapper>
      <Title>Drop us a line</Title>
      <Description>
        Have a question, feedback or idea for the Devscave team? Use the form
        below and a member of our team will contact you shortly.
      </Description>
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
          <label>
            <span>
              Email <span className="required">*</span>
            </span>
            <Input type="email" required placeholder="Enter your Email" />
          </label>
          <label>
            <span>
              Company Name <span className="required">*</span>
            </span>
            <Input type="text" placeholder="Enter your Company Name" />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            <span>
              Message <span className="required">*</span>
            </span>
            <Textarea rows="5" required placeholder="Enter your Message" />
          </label>
        </InputWrapper>
        <Button type="submit" value="Submit" />
      </InputForm>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  padding: 100px 0;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  text-align: center;
`;

const Description = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  color: #717488;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  max-width: 530px;
  margin: 15px auto 0;
`;

const InputForm = styled.form`
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
      color: #486ff8;
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
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #39364f;
  &::-webkit-input-placeholder {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #717488;
    font-weight: 400;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #486ff8;
    transition: all 0.3s ease-out;
  }
`;

const Textarea = styled.textarea`
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
  color: #39364f;
  &::-webkit-input-placeholder {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #717488;
    font-weight: 400;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #486ff8;
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
    border: 2px solid #486FF8;
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

export default ContactForm;
