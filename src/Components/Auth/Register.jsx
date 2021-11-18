import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Countries from "./Country.json";
import PhoneCodes from "./PhoneCodes.json";

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
            <label>
              <span>Middle Name</span>
              <Input type="text" placeholder="Enter your Middle Name" />
            </label>
            <label>
              <span>
                Email <span className="required">*</span>
              </span>
              <Input type="email" placeholder="Enter your Email" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Salutation">
              <span>
                Salutation <span className="required">*</span>
              </span>
              <Select required name="Salutation">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                <option value="mr">Mr.</option>
                <option value="mrs">Mrs.</option>
                <option value="ms">Ms.</option>
              </Select>
            </label>
            <label htmlFor="Academic">
              <span>
                Academic Title<span className="required">*</span>
              </span>
              <Select required name="Academic">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                <option value="title-1">Title 1</option>
                <option value="title-2">Title 2</option>
                <option value="title-3">Title 3</option>
              </Select>
            </label>
          </InputWrapper>
          <RadioWrapper>
            <span>
              Gender <span className="required">*</span>
            </span>
            <RadioRow>
              <label htmlFor="Male">
                <input
                  required
                  type="radio"
                  id="male"
                  name="Gender"
                  value="Male"
                />
                Male
              </label>
              <label htmlFor="Female">
                <input
                  required
                  type="radio"
                  id="female"
                  name="Gender"
                  value="Female"
                />
                Female
              </label>
              <label htmlFor="Other">
                <input
                  required
                  type="radio"
                  id="other"
                  name="Gender"
                  value="Other"
                />
                Other
              </label>
            </RadioRow>
          </RadioWrapper>
          <InputWrapper>
            <label htmlFor="Profession">
              <span>
                Profession <span className="required">*</span>
              </span>
              <Select required name="Profession">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Profession 1</option>
                <option value="male">Profession 2</option>
                <option value="female">Profession 3</option>
                <option value="other">Profession 4</option>
              </Select>
            </label>
          </InputWrapper>

          <RadioWrapper className="mt-5">
            <span>
              Address Type <span className="required">*</span>
            </span>
            <RadioRow>
              <label htmlFor="Office">
                <input
                  required
                  type="radio"
                  id="office"
                  name="address_type"
                  value="Office"
                />
                Office
              </label>
              <label htmlFor="Private">
                <input
                  required
                  type="radio"
                  id="private"
                  name="address_type"
                  value="Private"
                />
                Private
              </label>
            </RadioRow>
          </RadioWrapper>
          <InputWrapper>
            <label>
              <span>
                Instituion <span className="required">*</span>
              </span>
              <Input type="text" required placeholder="Enter your Instituion" />
            </label>
            <label>
              <span>
                Department <span className="required">*</span>
              </span>
              <Input type="text" placeholder="Enter your Department" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Country">
              <span>
                Country <span className="required">*</span>
              </span>
              <Select required name="Country">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                {Countries.map((country) => (
                  <option value={country.name} key={country.code}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </label>
            <label>
              <span>
                City <span className="required">*</span>
              </span>
              <Input type="text" placeholder="Enter your City" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <InputWrapper>
              <label>
                <span>
                  Zip Code <span className="required">*</span>
                </span>
                <Input type="text" placeholder="Enter your Zip Code" />
              </label>
            </InputWrapper>
            <label>
              <span>Street</span>
              <Input type="text" placeholder="Enter your Street Name" />
            </label>
          </InputWrapper>
          <InputWrapper className="mt-5">
            <label>
              <span>
                Username <span className="required">*</span>
              </span>
              <Input type="text" placeholder="Enter your Username" />
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
          <PhoneWrapper className="mt-5">
            <label htmlFor="phone-code">
              <span>
                Phone <span className="required">*</span>
              </span>
              <Select required name="phone-code">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                {PhoneCodes.map((phonecode) => (
                  <option
                    className="flag-icon flag-icon-gr flag-icon-squared"
                    value={phonecode.dial_code}
                    key={phonecode.code}
                  >
                    {phonecode.name} ({phonecode.dial_code})
                  </option>
                ))}
                <option value="phone-code-1">Phone Code 1</option>
                <option value="phone-code-2">Phone Code 2</option>
                <option value="phone-code-3">Phone Code 3</option>
              </Select>
            </label>
            <label>
              <Input type="text" placeholder="Enter your Phone Number" />
            </label>
          </PhoneWrapper>
          <PhoneWrapper>
            <label htmlFor="phone-code">
              <span>
                Fax <span className="required">*</span>
              </span>
              <Select required name="phone-code">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                <option value="phone-code-1">Phone Code 1</option>
                <option value="phone-code-2">Phone Code 2</option>
                <option value="phone-code-3">Phone Code 3</option>
              </Select>
            </label>
            <label>
              <Input type="text" placeholder="Enter your Phone Number" />
            </label>
          </PhoneWrapper>
          <PhoneWrapper className="mb-5">
            <label htmlFor="phone-code">
              <span>
                Cellphone <span className="required">*</span>
              </span>
              <Select required name="phone-code">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                <option value="phone-code-1">Phone Code 1</option>
                <option value="phone-code-2">Phone Code 2</option>
                <option value="phone-code-3">Phone Code 3</option>
              </Select>
            </label>
            <label>
              <Input type="text" placeholder="Enter your Phone Number" />
            </label>
          </PhoneWrapper>
          <TermsCheckbox htmlFor="terms">
            <input
              required
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
            />
            <p>
              I agree to the <span>Terms and Conditions</span>.
            </p>
          </TermsCheckbox>
          <Link to="/login">Already have an account? Sign In.</Link>
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
const PhoneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  span {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #39364f;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    .required {
      color: #486FF8;
    }
  }
`;

const RadioRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  label {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #39364f;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
`;

const TermsCheckbox = styled.label`
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  color: #486ff8;
  font-weight: 600;
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  p {
    span {
      color: #486ff8;
      transition: all 0.3s ease-out;
      text-decoration: underline;
      &:hover {
        color: #486FF8;
        transition: all 0.3s ease-out;
        cursor: pointer;
      }
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
    border: 2px solid #486FF8;
    transition: all 0.3s ease-out;
  }
`;

export default Register;
