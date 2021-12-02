import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Countries from "../Auth/Country.json";
import PhoneCodes from "../Auth/PhoneCodes.json";

const UpdateProfile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [email, setEmail] = useState("");
  const [salutation, setSalutation] = useState("");
  const [academicTitle, setAcademicTitle] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [addressType, setAddressType] = useState("");
  const [institution, setInstitution] = useState("")
  const [department, setDepartment] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState('')
  const [street, setStreet] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('')


  const genderList = [
    {
      gender: "Male",
      value: "1",
    },
    {
      gender: "Female",
      value: "2",
    },
    {
      gender: "Other",
      value: "3",
    },
  ];

  const addressTypeList = [
    {
      name: "Office",
      value: "1",
    },
    {
      name: "Private",
      value: "2",
    },
  ];

  const userInfo = {
    firstname: firstname,
    lastname: lastname,
    middlename: middlename,
    email: email,
    salutation: salutation,
    academicTitle: academicTitle,
    gender: gender,
    profession: profession,
    addressType: addressType,
    institution: institution,
    department: department,
    country: country,
    city: city,
    zipCode: zipCode,
    street: street,
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  }

  console.log(userInfo)
  return (
    <>
      <Title>Profile</Title>
      <DashboardWrapper>
        <InputForm>
          <InputWrapper>
            <label>
              <span>
                Firstname <span className="required">*</span>
              </span>
              <Input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                placeholder="Enter your Firstname"
              />
            </label>
            <label>
              <span>
                Lastname <span className="required">*</span>
              </span>
              <Input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Enter your Lastname"
              />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>Middle Name</span>
              <Input
                type="text"
                value={middlename}
                onChange={(e) => setMiddlename(e.target.value)}
                placeholder="Enter your Middle Name"
              />
            </label>
            <label>
              <span>
                Email <span className="required">*</span>
              </span>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Salutation">
              <span>
                Salutation <span className="required">*</span>
              </span>
              <Select
                value={salutation}
                onChange={(e) => setSalutation(e.target.value)}
                required
                name="Salutation"
              >
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
              <Select
                value={academicTitle}
                onChange={(e) => setAcademicTitle(e.target.value)}
                required
                name="Academic"
              >
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
              {genderList.map((choice, index) => (
                <label htmlFor={choice.gender} key={index}>
                  <input
                    type="radio"
                    name="Gender"
                    value={choice.value}
                    checked={gender === choice.value}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  {choice.gender}
                </label>
              ))}
            </RadioRow>
          </RadioWrapper>
          <InputWrapper>
            <label htmlFor="Profession">
              <span>
                Profession <span className="required">*</span>
              </span>
              <Select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                required
                name="Profession"
              >
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="Profession 1">Profession 1</option>
                <option value="Profession 2">Profession 2</option>
                <option value="Profession 3">Profession 3</option>
                <option value="Profession 4">Profession 4</option>
              </Select>
            </label>
          </InputWrapper>

          <RadioWrapper className="mt-5">
            <span>
              Address Type <span className="required">*</span>
            </span>
            <RadioRow>
              {addressTypeList.map((choice, index) => (
                <label htmlFor={choice.name} key={index}>
                  <input
                    type="radio"
                    name="AddressType"
                    value={choice.value}
                    checked={addressType === choice.value}
                    onChange={(e) => setAddressType(e.target.value)}
                  />
                  {choice.name}
                </label>
              ))}
            </RadioRow>
          </RadioWrapper>
          <InputWrapper>
            <label>
              <span>
                Instituion <span className="required">*</span>
              </span>
              <Input value={institution} onChange={(e) => setInstitution(e.target.value)} type="text" required placeholder="Enter your Instituion" />
            </label>
            <label>
              <span>
                Department <span className="required">*</span>
              </span>
              <Input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" placeholder="Enter your Department" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Country">
              <span>
                Country <span className="required">*</span>
              </span>
              <Select value={country} onChange={(e) => setCountry(e.target.value)} required name="Country">
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
              <Input value={city} onChange={(e) => setCity(e.target.value)} required type="text" placeholder="Enter your City" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <InputWrapper>
              <label>
                <span>
                  Zip Code <span className="required">*</span>
                </span>
                <Input value={zipCode} onChange={(e) => setZipCode(e.target.value)} type="text" placeholder="Enter your Zip Code" />
              </label>
            </InputWrapper>
            <label>
              <span>Street</span>
              <Input value={street} onChange={(e) => setStreet(e.target.value)} type="text" placeholder="Enter your Street Name" />
            </label>
          </InputWrapper>
          <InputWrapper className="mt-5">
            <label>
              <span>
                Username <span className="required">*</span>
              </span>
              <Input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="Enter your Username" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Password <span className="required">*</span>
              </span>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} type="Password" placeholder="Enter your Password" />
            </label>
            <label>
              <span>
                Confirm Password <span className="required">*</span>
              </span>
              <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="Password" placeholder="Confirm Password" />
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
          <Button type="submit" value="Sign Up" />
        </InputForm>
      </DashboardWrapper>
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

const DashboardWrapper = styled(Container)``;

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
      color: #486ff8;
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
      color: #486ff8;
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
      color: #486ff8;
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
      color: #486ff8;
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
    border: 2px solid #486ff8;
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
    border: 2px solid #486ff8;
    transition: all 0.3s ease-out;
  }
`;

export default UpdateProfile;
