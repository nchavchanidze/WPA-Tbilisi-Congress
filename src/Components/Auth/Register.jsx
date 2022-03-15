import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../services/auth.service";

import Countries from "./Country.json";
import PhoneCodes from "./PhoneCodes.json";

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
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <AlertBox>The username must be between 3 and 20 characters.</AlertBox>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <AlertBox>The password must be between 6 and 40 characters.</AlertBox>
    );
  }
};

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [title, setTitle] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [addressType, setAddressType] = useState("Office");
  const [institution, setInstitution] = useState("");
  const [department, setDepartment] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const cpassword = (value) => {
    if (value !== password) {
      return <AlertBox>The password is not same.</AlertBox>;
    }
  };

  const onChangeFirstname = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const onChangeLastname = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };
  const onChangeMiddlename = (e) => {
    const middleName = e.target.value;
    setMiddleName(middleName);
  };
  const onChangeTitle = (e) => {
    const Title = e.target.value;
    setTitle(Title);
  };
  const onChangeGender = (e) => {
    const Gender = e.target.value;
    setGender(Gender);
  };
  const onChangeProfession = (e) => {
    const Profession = e.target.value;
    setProfession(Profession);
  };
  const onChangeInstitution = (e) => {
    const Institution = e.target.value;
    setInstitution(Institution);
  };
  const onChangeDepartment = (e) => {
    const Department = e.target.value;
    setDepartment(Department);
  };
  const onChangeCountry = (e) => {
    const Country = e.target.value;
    setCountry(Country);
  };
  const onChangeCity = (e) => {
    const City = e.target.value;
    setCity(City);
  };
  const onChangePhoneCode = (e) => {
    const phoneCode = e.target.value;
    setPhoneCode(phoneCode);
  };
  const onChangePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const userData = {
    firstname: firstName,
    lastname: lastName,
    middlename: middleName,
    salutation: title,
    gender: gender,
    profession: profession,
    addressType: addressType,
    institution: institution,
    department: department,
    country: country,
    city: city,
    phone: phoneCode + phoneNumber,
    username: username,
    email: email,
    password: password,
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (password === confirmPassword) {
      if (checkBtn.current.context._errors.length === 0) {
        axios
          .post(
            "https://wpatbilisicongress.com/Server/API/Auth/SignUp",
            userData
          )
          .then(
            () => {
              navigate("/");
            },
            (response) => {
              setMessage(response.data.msg);
              setSuccessful(true);
              console.log(response.data);
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              setMessage(resMessage);
              setSuccessful(false);
            }
          );
      }
    }
  };

  console.log(userData);

  return (
    <SigupWrapper>
      <Title>Sign Up</Title>
      <Container className="d-flex justify-content-center align-items-center">
        <InputForm onSubmit={handleRegister} ref={form}>
          {!successful && (
            <>
              <InputWrapper>
                <label>
                  <span>
                    Firstname <span className="required">*</span>
                  </span>
                  <StyledInput
                    type="text"
                    value={firstName}
                    onChange={onChangeFirstname}
                    validations={[required]}
                    placeholder="Enter your Firstname"
                  />
                </label>
                <label>
                  <span>
                    Lastname <span className="required">*</span>
                  </span>
                  <StyledInput
                    type="text"
                    value={lastName}
                    onChange={onChangeLastname}
                    validations={[required]}
                    placeholder="Enter your Lastname"
                  />
                </label>
              </InputWrapper>
              <InputWrapper>
                <label>
                  <span>Middle Name</span>
                  <StyledInput
                    type="text"
                    value={middleName}
                    onChange={onChangeMiddlename}
                    validations={[required]}
                    placeholder="Enter your Middle Name"
                  />
                </label>
                <label htmlFor="email">
                  <span>
                    Email <span className="required">*</span>
                  </span>
                  <StyledInput
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                    placeholder="Enter your Email"
                  />
                </label>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="Academic">
                  <span>
                    Title<span className="required">*</span>
                  </span>
                  <Select
                    required
                    name="Academic"
                    value={title}
                    onChange={onChangeTitle}
                  >
                    <option defaultValue={"DEFAULT"}>Please Select</option>
                    <option value="Assoc.Prof.">Assoc.Prof.</option>
                    <option value="Dipl.Phys">Dipl.Phys</option>
                    <option value="Doz. Dr.">Doz. Dr.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="OA Dr.">OA Dr.</option>
                    <option value="PD Dr.">PD Dr.</option>
                    <option value="Prof.">Prof.</option>
                    <option value="Prof.Dr.">Prof.Dr.</option>
                    <option value="Prof.Dr.Dr.">Prof.Dr.Dr.</option>
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
                      value="1"
                      onChange={onChangeGender}
                    />
                    Male
                  </label>
                  <label htmlFor="Female">
                    <input
                      required
                      type="radio"
                      id="female"
                      name="Gender"
                      value="0"
                      onChange={onChangeGender}
                    />
                    Female
                  </label>
                  <label htmlFor="Other">
                    <input
                      required
                      type="radio"
                      id="other"
                      name="Gender"
                      value="2"
                      onChange={onChangeGender}
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
                  <Select
                    required
                    name="Profession"
                    value={profession}
                    onChange={onChangeProfession}
                  >
                    <option defaultValue={"DEFAULT"}>Please Select</option>
                    <option value="Allergology">Allergology</option>
                    <option value="Anaesthesiology">Anaesthesiology</option>
                    <option value="Cardiology (incl. Paediatric Cardiology)">
                      Cardiology (incl. Paediatric Cardiology)
                    </option>
                    <option value="Cardiothoracic Surgery">
                      Cardiothoracic Surgery
                    </option>
                    <option value="Child and Adolescent Psychiatry and Psychotherapy">
                      Child and Adolescent Psychiatry and Psychotherapy
                    </option>
                    <option value="Clinical Neurophysiology">
                      Clinical Neurophysiology
                    </option>
                    <option value="Dermatology and Venereology">
                      Dermatology and Venereology
                    </option>
                    <option value="Emergency Medicine">
                      Emergency Medicine
                    </option>
                    <option value="Endocrinology">Endocrinology</option>
                    <option value="Gastroenterology">Gastroenterology</option>
                    <option value=" General Practice"> General Practice</option>
                    <option value="Genetics">Genetics</option>
                    <option value="Geriatrics">Geriatrics</option>
                    <option value="Gynaecology and Obstetrics">
                      Gynaecology and Obstetrics
                    </option>
                    <option value="Hand Surgery">Hand Surgery</option>
                    <option value="Infectious Diseases">
                      Infectious Diseases
                    </option>
                    <option value="Intensive Care Medicine">
                      Intensive Care Medicine
                    </option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="Medical Biopathology">
                      Medical Biopathology
                    </option>
                    <option value="Medical Microbiology">
                      Medical Microbiology
                    </option>
                    <option value="Nephrology">Nephrology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Neurosurgery">Neurosurgery</option>
                    <option value="Nuclear Medicine">Nuclear Medicine</option>
                    <option value="Occupational Medicine">
                      Occupational Medicine
                    </option>
                    <option value="Oncology">Oncology</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Oro-Maxillo-Facial Surgery and Stomatology">
                      Oro-Maxillo-Facial Surgery and Stomatology
                    </option>
                    <option value="Orthopaedics">Orthopaedics</option>
                    <option value="Otorhinolaryngology">
                      Otorhinolaryngology
                    </option>
                    <option value="Paediatric Surgery">
                      Paediatric Surgery
                    </option>
                    <option value="Paediatrics">Paediatrics</option>
                    <option value="Pathology (surgical)">
                      Pathology (surgical)
                    </option>
                    <option value="Physical Medicine and Rehabilitation">
                      Physical Medicine and Rehabilitation
                    </option>
                    <option value="Plastic, Reconstructive and Aesthetic Surgery">
                      Plastic, Reconstructive and Aesthetic Surgery
                    </option>
                    <option value="Pneumology">Pneumology</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Public Health Medicine">
                      Public Health Medicine
                    </option>
                    <option value="Radiology">Radiology</option>
                    <option value="Radiotherapy">Radiotherapy</option>
                    <option value="Rheumatology">Rheumatology</option>
                    <option value="Sports Medicine">Sports Medicine</option>
                    <option value="Surgery">Surgery</option>
                    <option value="Urology">Urology</option>
                    <option value="Vascular Surgery">Vascular Surgery</option>
                    <option value="Other">Other</option>
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
                      checked={addressType === "Office"}
                      onChange={() => setAddressType("Office")}
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
                      checked={addressType === "Private"}
                      onChange={() => setAddressType("Private")}
                    />
                    Private
                  </label>
                </RadioRow>
              </RadioWrapper>
              <InputWrapper
                className={addressType !== "Office" ? "d-none" : " "}
              >
                <label>
                  <span>
                    Instituion <span className="required">*</span>
                  </span>
                  <StyledInput
                    type="text"
                    required
                    placeholder="Enter your Instituion"
                    value={institution}
                    onChange={onChangeInstitution}
                  />
                </label>
                <label>
                  <span>
                    Department <span className="required">*</span>
                  </span>
                  <StyledInput
                    type="text"
                    placeholder="Enter your Department"
                    value={department}
                    onChange={onChangeDepartment}
                  />
                </label>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="Country">
                  <span>
                    Country <span className="required">*</span>
                  </span>
                  <Select
                    required
                    name="Country"
                    value={country}
                    onChange={onChangeCountry}
                  >
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
                  <StyledInput
                    type="text"
                    placeholder="Enter your City"
                    value={city}
                    onChange={onChangeCity}
                  />
                </label>
              </InputWrapper>
              <InputWrapper className="mt-5">
                <label htmlFor="username">
                  <span>
                    Username <span className="required">*</span>
                  </span>
                  <StyledInput
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                    placeholder="Enter your Username"
                  />
                </label>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="password">
                  <span>
                    Password <span className="required">*</span>
                  </span>
                  <StyledInput
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                    placeholder="Enter your Password"
                  />
                </label>
                <label>
                  <span>
                    Confirm Password <span className="required">*</span>
                  </span>
                  <StyledInput
                    type="password"
                    className="form-control"
                    name="password"
                    value={confirmPassword}
                    onChange={onChangeConfirmPassword}
                    validations={[required]}
                    placeholder="Confirm Password"
                  />
                  {confirmPassword !== password ? (
                    <AlertBox>The password is not same.</AlertBox>
                  ) : (
                    ""
                  )}
                </label>
              </InputWrapper>
              <PhoneWrapper className="mt-5 mb-5">
                <label htmlFor="phone-code">
                  <span>
                    Phone <span className="required">*</span>
                  </span>
                  <Select
                    required
                    name="phone-code"
                    value={phoneCode}
                    onChange={onChangePhoneCode}
                  >
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
                  <StyledInput
                    type="text"
                    placeholder="Enter your Phone Number"
                    value={phoneNumber}
                    onChange={onChangePhoneNumber}
                  />
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
              <Button>Sign Up</Button>
            </>
          )}
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </InputForm>
      </Container>
    </SigupWrapper>
  );
};

const SigupWrapper = styled.div`
  margin-top: 200px;
  padding-bottom: 100px;
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
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  span {
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    .required {
      color: #bd1b21;
    }
  }
`;

const RadioRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  label {
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
`;

const TermsCheckbox = styled.label`
  font-family: "Titillium Web", sans-serif;
  font-size: 14px;
  color: #bd1b21;
  font-weight: 600;
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  p {
    span {
      color: #bd1b21;
      transition: all 0.3s ease-out;
      text-decoration: underline;
      &:hover {
        color: #bd1b21;
        transition: all 0.3s ease-out;
        cursor: pointer;
      }
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

const Select = styled.select`
  background-color: #f4f4f4;
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 280px;
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  width: 100%;
  option {
    transition: all 0.3s ease-out;
    &:hover {
      transition: all 0.3s ease-out;
    }
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

export default Register;
