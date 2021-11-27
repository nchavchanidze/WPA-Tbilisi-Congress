import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Modal from "react-modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AuthorCard from "./AuthorCard";

const Abstract = () => {
  const [intro, setIntro] = useState("");
  const [objectives, setObjectives] = useState("");
  const [methods, setMethods] = useState("");
  const [results, setResults] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [counter, setCounter] = useState([]);

  const [modalIsopen, setModalIsopen] = useState(false);

  const [authors, setAuthors] = useState([]);
  const [authorsValue, setAuthorsValue] = useState("");

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

  const dataParser = () => {
    let res = [];
    let data = intro + objectives + methods + results + conclusion;
    console.log(data);
    let str = data.replace(/(<([^>\t\n\r\\.\\?\\!]+)>)/gi, "").split(" ");
    str.map((s) => {
      let parsedStr = s.trim();
      res.push(parsedStr);
      return console.log(res);
    });
    setCounter(res.length);
  };

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

  const openModal = (e) => {
    e.preventDefault();
    setModalIsopen(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setModalIsopen(false);
  };

  useEffect(() => {
    dataParser();
  }, [intro, objectives, methods, results, conclusion]);

  return (
    <>
      <Title>Submit Your Absract</Title>
      <AbstractWrapper>
        <InputForm>
          <InputWrapper>
            <label>
              <span>Title</span>
              <Input type="text" placeholder="Enter Title" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="topic">
              <span>
                Topic <span className="required">*</span>
              </span>
              <Select required name="topic">
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                <option value="select-1">Select 1</option>
                <option value="select-2">Select 2</option>
                <option value="select-3">Select 3</option>
              </Select>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="preference">
              <span>
                Presentation preference <span className="required">*</span>
              </span>
              <Select required name="preference">
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
              <span>Authors</span>
              <Modal isOpen={modalIsopen} onRequestClose={closeModal}>
                <button onClick={closeModal}>Close Modal</button>
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
                    <FontAwesomeIcon icon={faPlus} />
                  </AddButton>
                </AuthorWrapper>
              </Modal>
              <button onClick={openModal}>Open Modal</button>
            </label>
            {authors.map((author) => (
              <AuthorCard
                key={author.id}
                author={author.message}
                id={author.id}
                deleteAuthor={(id) => deleteAuthor(id, authors, setAuthors)}
              />
            ))}
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>Keywords</span>
              <Input type="text" placeholder="Enter Keywords" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>TextArea</span>
              <Textarea type="text" placeholder="Enter Keywords" />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Introduction <span className="required">*</span>
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
              <span>
                Objectives <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={objectives}
              onChange={setObjectives}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Methods <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={methods}
              onChange={setMethods}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Results <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={results}
              onChange={setResults}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Conclusion <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={conclusion}
              onChange={setConclusion}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
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
  max-width: 600px;
  width: 100%;
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
        border: 2px solid #486ff8;
        background-color: #fff;
        color: #486ff8;
        transition: all 0.3s ease-out;
      }
    }
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const AddButton = styled.button`
  min-height: 53px;
  min-width: 53px;
  border: none;
  border-radius: 50%;
  background-color: #486ff8;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f0f4ff;
    transition: all 0.3s ease-out;
    svg {
      transition: all 0.3s ease-out;
      color: #486ff8;
    }
  }
  svg {
    transition: all 0.3s ease-out;
    color: #fff;
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
  max-width: 600px;
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
    height: 400px;
    max-height: 400px;
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
