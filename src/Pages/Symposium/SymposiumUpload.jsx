import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

import { LoginContext } from "../../Helper/Context";

import Layout from "../../Layouts/Layout";
import AuthorCard from "../../Components/Abstract Submission/AuthorCard";
import Countries from "../../Components/Auth/Country.json";

import axios from "axios";
import Form from "react-validation/build/form";
import ValidInput from "react-validation/build/input";
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

const SymposiumUpload = () => {
  const { usertoken, user } = useContext(LoginContext);

  const [counter, setCounter] = useState([]);

  const form = useRef();
  const checkBtn = useRef();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("user"));

  const [proposer, setProposer] = useState("");
  const [proposerEmail, setProposerEmail] = useState("");
  const [symposiumTitle, setSymposiumTitle] = useState("");
  const [symposiumDescription, setSymposiumDescription] = useState("");

  const [chair, setChair] = useState({
    name: "",
    country: "",
    email: "",
  });

  const [coChair, setCoChair] = useState({
    name: "",
    country: "",
    email: "",
  });

  const [firstPresenter, setFirstPresenter] = useState({
    name: "",
    country: "",
    email: "",
    title: "",
  });
  const [secondPresenter, setSecondPresenter] = useState({
    name: "",
    country: "",
    email: "",
    title: "",
  });
  const [thirdPresenter, setThirdPresenter] = useState({
    name: "",
    country: "",
    email: "",
    title: "",
  });
  const [fourthPresenter, setFourthPresenter] = useState({
    name: "",
    country: "",
    email: "",
    title: "",
  });

  const dataParser = useCallback(() => {
    let res = [];
    let data = symposiumDescription;
    let str = data.replace(/(<([^>\t\n\r\\.\\?\\!]+)>)/gi, "").split(" ");
    str.map((s) => {
      let parsedStr = s.trim();
      return res.push(parsedStr);
    });
    setCounter(res.length);
  }, [symposiumDescription]);

  const toolbarOptions = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["link"],
      // [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      // [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const navigate = useNavigate();

  useEffect(() => {
    dataParser();
    setToken(localStorage.getItem("token"));
  }, [dataParser]);

  const Symposium = {
    // token: usertoken,
    // salutation: user.salutation,
    // user: user.firstname,
    token: localStorage.getItem("user"),
    salutation:
      localStorage.getItem("userdata") === null
        ? ""
        : JSON.parse(localStorage.getItem("userdata")).salutation,
    user:
      localStorage.getItem("userdata") === null
        ? ""
        : JSON.parse(localStorage.getItem("userdata")).firstname +
          " " +
          JSON.parse(localStorage.getItem("userdata")).lastname,
    fullname: proposer,
    description: symposiumDescription,
    email: proposerEmail,
    title: symposiumTitle,
    chair_name: chair.name,
    chair_country: chair.country,
    chair_email: chair.email,
    cochair_name: coChair.name,
    cochair_country: coChair.country,
    cochair_email: coChair.email,
    presentator: [
      {
        title: firstPresenter.title,
        name: firstPresenter.name,
        email: firstPresenter.email,
        country: firstPresenter.country,
      },
      {
        title: secondPresenter.title,
        name: secondPresenter.name,
        email: secondPresenter.email,
        country: secondPresenter.country,
      },
      {
        title: thirdPresenter.title,
        name: thirdPresenter.name,
        email: thirdPresenter.email,
        country: thirdPresenter.country,
      },
      {
        title: fourthPresenter.title,
        name: fourthPresenter.name,
        email: fourthPresenter.email,
        country: fourthPresenter.country,
      },
    ],
  };

  const uploadSymposium = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      axios
        .post(
          "https://wpatbilisicongress.com/Server/API/Simposyums/Create",
          Symposium
        )
        .then(
          (response) => {
            setMessage(response.data.msg);
            setSuccessful(true);
            setLoading(false);
            toast.success("Your submission has been successfully uploaded.", {
              position: "bottom-right",
              autoClose: 7000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            // setTimeout(() => {
            //   navigate("/");
            // }, 7000);
            return response.data;
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setMessage(resMessage);
            setLoading(false);
            setSuccessful(false);
            toast.error(
              "A problem has occurred during the submission process. Please, try again!",
              {
                position: "bottom-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
          }
        )
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // setToken(localStorage.getItem("token"));
  }, []);

  // console.log(Symposium);
  // console.log(token);

  return (
    <Layout>
      <Title>Symposium</Title>
      <AbstractWrapper>
        {successful ? (
          <AlertWrapper>
            <SuccessMessageWrapper
              className={successful ? "success" : "error"}
              role="alert"
            >
              <SuccessMessage>
                {successful ? (
                  <>Your submission has been successfully uploaded.</>
                ) : (
                  <>
                    A problem has occurred during the submission process.
                    Please, try again!
                  </>
                )}
              </SuccessMessage>
            </SuccessMessageWrapper>
            <LinkButton to="/">Go to Home Page</LinkButton>
          </AlertWrapper>
        ) : (
          <InputForm onSubmit={uploadSymposium} ref={form}>
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
                <InputBox style={{ alignItems: "flex-start" }}>
                  <Input
                    value={proposer}
                    onChange={(e) => setProposer(e.target.value)}
                    type="text"
                    placeholder="Enter Name"
                    validations={[required]}
                    required
                  />
                  <Input
                    value={proposerEmail}
                    onChange={(e) => setProposerEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email"
                    validations={[required, validEmail]}
                    required
                  />
                </InputBox>
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>Symposium Title</span>
                <Input
                  value={symposiumTitle}
                  onChange={(e) => setSymposiumTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Title"
                  validations={[required]}
                  required
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>An overall abstract describing the symposium </span>
              </label>
              <RichText
                theme="snow"
                value={symposiumDescription}
                onChange={setSymposiumDescription}
                modules={toolbarOptions}
                required
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
                    value={chair.name}
                    onChange={(e) =>
                      setChair({
                        ...chair,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Name"
                    validations={[required]}
                    required
                  />
                  <label htmlFor="Country">
                    <Select
                      required
                      name="Country"
                      value={chair.country}
                      onChange={(e) =>
                        setChair({
                          ...chair,
                          country: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Country</option>
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
                  value={chair.email}
                  onChange={(e) =>
                    setChair({
                      ...chair,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  placeholder="Enter Email"
                  required
                  validations={[required, validEmail]}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>Co-chair</span>
                <InputBox>
                  <Input
                    value={coChair.name}
                    onChange={(e) =>
                      setCoChair({
                        ...coChair,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Name"
                    required
                    validations={[required]}
                  />
                  <label htmlFor="Country">
                    <Select
                      required
                      name="Country"
                      value={coChair.country}
                      onChange={(e) =>
                        setCoChair({
                          ...coChair,
                          country: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Country</option>
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
                  value={coChair.email}
                  onChange={(e) =>
                    setCoChair({
                      ...coChair,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  placeholder="Enter Email"
                  required
                  validations={[required, validEmail]}
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
                    name="name"
                    value={firstPresenter.name}
                    onChange={(e) =>
                      setFirstPresenter({
                        ...firstPresenter,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Name"
                    required
                    validations={[required]}
                  />
                  <label htmlFor="Country">
                    <Select
                      required
                      name="Country"
                      value={firstPresenter.country}
                      onChange={(e) =>
                        setFirstPresenter({
                          ...firstPresenter,
                          country: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Country</option>
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
                    name="email"
                    value={firstPresenter.email}
                    onChange={(e) =>
                      setFirstPresenter({
                        ...firstPresenter,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter Email"
                    required
                    validations={[required, validEmail]}
                  />
                  <Input
                    value={firstPresenter.title}
                    onChange={(e) =>
                      setFirstPresenter({
                        ...firstPresenter,
                        title: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Title of presentation"
                    required
                    validations={[required]}
                  />
                </InputBox>
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>#2</span>
                <InputBox>
                  <Input
                    name="name"
                    value={secondPresenter.name}
                    onChange={(e) =>
                      setSecondPresenter({
                        ...secondPresenter,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Name"
                    required
                    validations={[required]}
                  />
                  <label htmlFor="Country">
                    <Select
                      required
                      name="Country"
                      value={secondPresenter.country}
                      onChange={(e) =>
                        setSecondPresenter({
                          ...secondPresenter,
                          country: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Country</option>
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
                    name="email"
                    value={secondPresenter.email}
                    onChange={(e) =>
                      setSecondPresenter({
                        ...secondPresenter,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter Email"
                    required
                    validations={[required, validEmail]}
                  />
                  <Input
                    value={secondPresenter.title}
                    onChange={(e) =>
                      setSecondPresenter({
                        ...secondPresenter,
                        title: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Title of presentation"
                    required
                    validations={[required]}
                  />
                </InputBox>
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>#3</span>
                <InputBox>
                  <Input
                    name="name"
                    value={thirdPresenter.name}
                    onChange={(e) =>
                      setThirdPresenter({
                        ...thirdPresenter,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Name"
                    required
                    validations={[required]}
                  />
                  <label htmlFor="Country">
                    <Select
                      required
                      name="Country"
                      value={thirdPresenter.country}
                      onChange={(e) =>
                        setThirdPresenter({
                          ...thirdPresenter,
                          country: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Country</option>
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
                    name="email"
                    value={thirdPresenter.email}
                    onChange={(e) =>
                      setThirdPresenter({
                        ...thirdPresenter,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter Email"
                    required
                    validations={[required, validEmail]}
                  />
                  <Input
                    value={thirdPresenter.title}
                    onChange={(e) =>
                      setThirdPresenter({
                        ...thirdPresenter,
                        title: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Title of presentation"
                    required
                    validations={[required]}
                  />
                </InputBox>
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>#4</span>
                <InputBox>
                  <Input
                    name="name"
                    value={fourthPresenter.name}
                    onChange={(e) =>
                      setFourthPresenter({
                        ...fourthPresenter,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Name"
                    required
                    validations={[required]}
                  />
                  <label htmlFor="Country">
                    <Select
                      required
                      name="Country"
                      value={fourthPresenter.country}
                      onChange={(e) =>
                        setFourthPresenter({
                          ...fourthPresenter,
                          country: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Country</option>
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
                    name="email"
                    value={fourthPresenter.email}
                    onChange={(e) =>
                      setFourthPresenter({
                        ...fourthPresenter,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter Email"
                    required
                    validations={[required, validEmail]}
                  />
                  <Input
                    value={fourthPresenter.title}
                    onChange={(e) =>
                      setFourthPresenter({
                        ...fourthPresenter,
                        title: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Title of presentation"
                    required
                    validations={[required]}
                  />
                </InputBox>
              </label>
            </InputWrapper>
            <Button disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Submit</span>
            </Button>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </InputForm>
        )}
      </AbstractWrapper>
    </Layout>
  );
};

const Title = styled.h1`
  margin: 200px auto 50px;
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #000;
  text-transform: capitalize;
`;

const AbstractWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

const InputForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  max-width: 750px;
  width: 100%;
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

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const Input = styled(ValidInput)`
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
  &[type="file"] {
    background-color: transparent;
    padding: 0;
    &::-webkit-file-upload-button {
      background-color: #bd1b21;
      font-family: "Titillium Web", sans-serif;
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
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  width: 360px;
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

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const Counter = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  &.over {
    color: #f00;
  }
`;

const RichText = styled(ReactQuill)`
  max-width: 750px;
  width: 100% !important;
  font-family: "Titillium Web", sans-serif;
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
const AddButton = styled.button`
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
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
  font-weight: 500;
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

export default SymposiumUpload;
