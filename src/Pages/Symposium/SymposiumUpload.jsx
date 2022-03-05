import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../../Layouts/Layout";
import AuthorCard from "../../Components/Abstract Submission/AuthorCard";
import Countries from "../../Components/Auth/Country.json";

const SymposiumUpload = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [authorsValue, setAuthorsValue] = useState("");
  const [intro, setIntro] = useState("");
  const [counter, setCounter] = useState([]);

  const handleAuthor = (
    e,
    authors,
    setAuthors,
    authorsValue,
    setAuthorsValue
  ) => {
    e.preventDefault();
    if (authorsValue === "") {
      alert("Add Authors");
    } else {
      const id = authors.length ? authors[authors.length - 1].id + 1 : 0;
      setAuthors([...authors, { id: id, message: authorsValue }]);
      setAuthorsValue("");
    }
  };

  const deleteAuthor = (id, authors, setAuthors) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  const dataParser = useCallback(() => {
    let res = [];
    let data = intro;
    let str = data.replace(/(<([^>\t\n\r\\.\\?\\!]+)>)/gi, "").split(" ");
    str.map((s) => {
      let parsedStr = s.trim();
      return res.push(parsedStr);
    });
    setCounter(res.length);
  }, [intro]);

  const toolbarOptions = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image"],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  useEffect(() => {
    dataParser();
  }, [dataParser]);

  return (
    <Layout>
      <Title>Symposium</Title>
      <AbstractWrapper>
        <InputForm>
          {/* <InputWrapper>
            <label>
              <span>Title</span>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Title"
              />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>Authors</span>
              <AuthorWrapper>
                <Input
                  onChange={(e) => setAuthorsValue(e.target.value)}
                  value={authorsValue}
                  placeholder="Enter Authors"
                />

                <AddButton
                  onClick={(e) =>
                    handleAuthor(
                      e,
                      authors,
                      setAuthors,
                      authorsValue,
                      setAuthorsValue
                    )
                  }
                >
                  Add Authors
                </AddButton>
              </AuthorWrapper>
            </label>
            {authors.map((author) => (
              <AuthorCard
                key={author.id}
                author={author.message}
                id={author.id}
                deleteAuthor={(id) => deleteAuthor(id, authors, setAuthors)}
              />
            ))}
          </InputWrapper> */}
          <InputWrapper>
            <label>
              <span>Symposium Proposer</span>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="email"
                  placeholder="Enter Email"
                />
              </InputBox>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>Symposium Title</span>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Title"
              />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                An overall abstract describing the symposium{" "}
              </span>
            </label>
            <RichText
              theme="snow"
              value={intro}
              onChange={setIntro}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>Chair</span>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                <label htmlFor="Country">
                  <Select required name="Country">
                    <option defaultValue={"DEFAULT"}>Select Country</option>
                    <option value="notSpecified">Not specified</option>
                    {Countries.map((country) => (
                      <option value={country.name} key={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                </label>
              </InputBox>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="email"
                placeholder="Enter Email"
              />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>Co-chair</span>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                <label htmlFor="Country">
                  <Select required name="Country">
                    <option defaultValue={"DEFAULT"}>Select Country</option>
                    <option value="notSpecified">Not specified</option>
                    {Countries.map((country) => (
                      <option value={country.name} key={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                </label>
              </InputBox>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="email"
                placeholder="Enter Email"
              />
            </label>
          </InputWrapper>
          <InputWrapper className="mt-5">
            <label>
              <span>Suggested presenters and topics</span>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>#1</span>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                <label htmlFor="Country">
                  <Select required name="Country">
                    <option defaultValue={"DEFAULT"}>Select Country</option>
                    <option value="notSpecified">Not specified</option>
                    {Countries.map((country) => (
                      <option value={country.name} key={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                </label>
              </InputBox>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="email"
                  placeholder="Enter Email"
                />
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Title of presentation"
                />
              </InputBox>
            </label>
          </InputWrapper> <InputWrapper>
            <label>
              <span>#2</span>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                <label htmlFor="Country">
                  <Select required name="Country">
                    <option defaultValue={"DEFAULT"}>Select Country</option>
                    <option value="notSpecified">Not specified</option>
                    {Countries.map((country) => (
                      <option value={country.name} key={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                </label>
              </InputBox>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="email"
                  placeholder="Enter Email"
                />
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Title of presentation"
                />
              </InputBox>
            </label>
          </InputWrapper> <InputWrapper>
            <label>
              <span>#3</span>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                <label htmlFor="Country">
                  <Select required name="Country">
                    <option defaultValue={"DEFAULT"}>Select Country</option>
                    <option value="notSpecified">Not specified</option>
                    {Countries.map((country) => (
                      <option value={country.name} key={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                </label>
              </InputBox>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="email"
                  placeholder="Enter Email"
                />
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Title of presentation"
                />
              </InputBox>
            </label>
          </InputWrapper> <InputWrapper>
            <label>
              <span>#4</span>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                <label htmlFor="Country">
                  <Select required name="Country">
                    <option defaultValue={"DEFAULT"}>Select Country</option>
                    <option value="notSpecified">Not specified</option>
                    {Countries.map((country) => (
                      <option value={country.name} key={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                </label>
              </InputBox>
              <InputBox>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="email"
                  placeholder="Enter Email"
                />
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Title of presentation"
                />
              </InputBox>
            </label>
          </InputWrapper>
          <Button type="submit" value="Submit" />
        </InputForm>
      </AbstractWrapper>
    </Layout>
  );
};

const Title = styled.h1`
  margin: 200px auto 50px;
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
  padding-bottom: 100px;
`;

const InputForm = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  max-width: 750px;
  width: 100%;
  a {
    font-family: "Urbanist", sans-serif;
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
      color: #bd1b21;
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
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
    border: 2px solid #bd1b21;
    transition: all 0.3s ease-out;
  }
  &[type="file"] {
    background-color: transparent;
    padding: 0;
    &::-webkit-file-upload-button {
      background-color: #bd1b21;
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
        border: 2px solid #bd1b21;
        background-color: #fff;
        color: #bd1b21;
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
  /* width: 280px; */
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #39364f;
  width: 360px;
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
    border: 2px solid #bd1b21;
    transition: all 0.3s ease-out;
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const Counter = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #39364f;
  &.over {
    color: #f00;
  }
`;

const RichText = styled(ReactQuill)`
  max-width: 750px;
  width: 100% !important;
  font-family: "Urbanist", sans-serif;
  p {
  }
  ul {
    list-style-type: disc;
    list-style: disc;
    /* padding-left: 32px !important; */
  }
  ol {
    list-style-type: decimal;
    list-style: decimal;
    /* padding-left: 32px !important; */
  }
  strong {
    font-weight: bold;
  }
  em,
  i {
    font-style: italic;
  }
  li {
  }
  .ql-editor {
    height: 300px;
    max-height: 300px;
  }
`;

const Button = styled.input`
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
const AddButton = styled.button`
  background-color: #bd1b21;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  max-width: 120px;
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
export default SymposiumUpload;
