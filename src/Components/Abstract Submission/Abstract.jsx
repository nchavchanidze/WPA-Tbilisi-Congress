import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AuthorCard from "./AuthorCard";
import KeywordCard from "./KeywordCard";
import EposterUpload from "../Eposter/Eposter";
import topics from "./Topics.json";
import Countries from "../Auth/Country.json";

import { toast } from "react-toastify";

import Form from "react-validation/build/form";
import ValidInput from "react-validation/build/input";
import ValidSelect from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return <AlertBox>This field is required!</AlertBox>;
  }
};

var count = 1;
const Abstract = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [presentationPreference, setPresentationPreference] = useState("");

  const [intro, setIntro] = useState("");
  const [objectives, setObjectives] = useState("");
  const [methods, setMethods] = useState("");
  const [results, setResults] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [counter, setCounter] = useState([]);

  const [authorsList, setAuthorsList] = useState([
    {
      initials: "",
      last_name: "",
      affiliation_1: "",
      affiliation_2: "",
      affiliation_3: "",
    },
  ]);

  const [affiliationsList, setAffiliationList] = useState([
    {
      affiliation_number: count,
      institute_company: "",
      city: "",
      country: "",
    },
  ]);

  const [affiliationCount, setAffiliationCount] = useState([]);

  const [authors, setAuthors] = useState([]);

  const [keywords, setKeywords] = useState([]);
  const [keywordsValue, setKeywordsValue] = useState("");

  const [abstractFile, setAbstractFile] = useState();
  const [audioFile, setAudioFile] = useState();

  const [eposterFile, setEposterFile] = useState();
  const [eposter, setEposter] = useState();

  const vauthors = () => {
    if (authorsList.length <= 0) {
      return <AlertBox>This field is required!</AlertBox>;
    }
  };

  const vkeywords = () => {
    if (keywords.length < 0) {
      return <AlertBox>This field is required!</AlertBox>;
    }
  };

  const clearInputs = () => {
    setTitle("");
    setTopic("");
    setPresentationPreference("");
    setIntro("");
    setObjectives("");
    setMethods("");
    setResults("");
    setConclusion("");
    setAuthorsList([
      {
        initials: "",
        last_name: "",
        affiliation_1: "",
        affiliation_2: "",
        affiliation_3: "",
      },
    ]);
    setAffiliationList([
      {
        affiliation_number: count,
        institute_company: "",
        city: "",
        country: "",
      },
    ]);
    setKeywords([]);
    setKeywordsValue("");
    setAbstractFile("");
    setAudioFile("");
    setEposterFile("");
    setEposter("");
    count = 1;
    final.length = 0;
    console.log(final);
  };

  const handleAuthor = (e, index) => {
    const { name, value } = e.target;
    const list = [...authorsList];
    list[index][name] = value;
    setAuthorsList(list);
  };

  const handleAuthorRemove = (index) => {
    const list = [...authorsList];
    list.splice(index, 1);
    setAuthorsList(list);
  };

  const handleAuthorAdd = () => {
    setAuthorsList([
      ...authorsList,
      {
        initials: "",
        last_name: "",
        affiliation_1: "",
        affiliation_2: "",
        affiliation_3: "",
      },
    ]);
  };

  const handleAffiliation = (e, index) => {
    const { name, value } = e.target;
    const list = [...affiliationsList];
    list[index][name] = value;
    setAffiliationList(list);
  };

  const handleAffiliationRemove = (index) => {
    const list = [...affiliationsList];
    list.splice(index, 1);
    setAffiliationList(list);
  };

  const handleAffiliationAdd = () => {
    count++;
    setAffiliationList([
      ...affiliationsList,
      {
        affiliation_number: count,
        institute_company: "",
        city: "",
        country: "",
      },
    ]);
  };

  const handleKeyword = (
    e,
    keywords,
    setKeywords,
    keywordsValue,
    setKeywordsValue
  ) => {
    e.preventDefault();
    if (keywordsValue === "") {
      alert("Add Keyword");
    } else {
      const id = keywords.length ? keywords[keywords.length - 1].id + 1 : 0;
      setKeywords([...keywords, { id: id, keyword: keywordsValue }]);
      setKeywordsValue("");
    }
  };

  const deleteKeyword = (id, keywords, setKeywords) => {
    setKeywords(keywords.filter((keyword) => keyword.id !== id));
  };

  const dataParser = useCallback(() => {
    let res = [];
    let data = intro + objectives + methods + results + conclusion;
    let str = data.replace(/(<([^>\t\n\r\\.\\?\\!]+)>)/gi, "").split(" ");
    str.map((s) => {
      let parsedStr = s.trim();
      return res.push(parsedStr);
    });
    setCounter(res.length);
  }, [intro, objectives, methods, results, conclusion]);

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

  const handleUploadAbstract = (e) => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("user"));
    formData.append("rule", "abstractionFile");
    formData.append("file", e.target.files[0]);

    e.preventDefault();
    axios
      .post(
        "https://wpatbilisicongress.com/Server/API/Abstractions/UploadFile",
        formData
      )
      .then((response) => {
        setAbstractFile(response.data.file);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUploadEposter = (e) => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("user"));
    formData.append("rule", "eposterFile");
    formData.append("file", e.target.files[0]);
    e.preventDefault();
    axios
      .post(
        "https://wpatbilisicongress.com/Server/API/Abstractions/UploadFile",
        formData
      )
      .then((response) => {
        setEposterFile(response.data.file);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUploadAudio = (e) => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("user"));
    formData.append("rule", "audioFile");
    formData.append("file", e.target.files[0]);

    // setStaticAudioFile(e.target.files[0]);
    e.preventDefault();
    axios
      .post(
        "https://wpatbilisicongress.com/Server/API/Abstractions/UploadFile",
        formData
      )
      .then((response) => {
        setAudioFile(response.data.file);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const uploadAbstract = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      axios
        .post(
          "https://wpatbilisicongress.com/Server/API/Abstractions/Create",
          abstract
        )
        .then(
          (response) => {
            setMessage(response.data.msg);
            setSuccessful(true);
            setLoading(false);
            clearInputs()
            toast.success("Your Abstract has been successfully uploaded.", {
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
              "A problem has occurred during the process. Please, try again!",
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
          return err;
        });
    }
  };

  const AuthorsArr = authors.map((author) => {
    return author.message;
  });

  const KeywordsArr = keywords.map((keyword) => {
    return keyword.keyword;
  });

  const abstract = {
    token: localStorage.getItem("user"),
    title: title,
    topics: topic,
    preference: presentationPreference,
    introduction: intro,
    objectives: objectives,
    methods: methods,
    results: results,
    conclusion: conclusion,
    abstract_file: abstractFile,
    type: "",
    eposter_file: eposterFile,
    eposter_audio: audioFile,
    authors: authorsList,
    affiliations: affiliationsList,
    keywords: KeywordsArr,
  };

  useEffect(() => {
    dataParser();
  }, [dataParser]);

  const final = [];
  for (let i = 0; i < count; i++) {
    final.push(<option value={i + 1}>{i + 1}</option>);
  }

  return (
    <>
      <Title>Submit Your Absract</Title>
      <AbstractWrapper>
        {successful ? (
          <AlertWrapper>
            <SuccessMessageWrapper
              className={successful ? "success" : "error"}
              role="alert"
            >
              <SuccessMessage>
                {successful ? (
                  <>Your Abstract has been successfully uploaded.</>
                ) : (
                  <>
                    A problem has occurred during the process. Please, try
                    again!
                  </>
                )}
              </SuccessMessage>
            </SuccessMessageWrapper>
            <LinkButton to="/">Go to Home Page</LinkButton>
          </AlertWrapper>
        ) : (
          <InputForm onSubmit={uploadAbstract} ref={form}>
            <InputWrapper>
              <label>
                <span>Title</span>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Title in UPPERCASE"
                  // required
                  validations={[required]}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="topic">
                <span>Topic</span>
                <Select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  // required
                  validations={[required]}
                  name="topic"
                >
                  <option value="">Please Select</option>
                  {topics.map((topic) => (
                    <option key={topic.id} value={topic.title}>
                      {topic.title}
                    </option>
                  ))}
                </Select>
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>Authors</span>
                {authorsList.map((x, i) => {
                  return (
                    <>
                      <AuthorWrapper key={i}>
                        <label>
                          Initial(s)
                          <Input
                            name="initials"
                            value={x.initials}
                            onChange={(e) => handleAuthor(e, i)}
                            placeholder="Enter Initial(s)"
                            validations={[vauthors]}
                          />
                        </label>
                        <label>
                          Last name
                          <Input
                            name="last_name"
                            value={x.last_name}
                            onChange={(e) => handleAuthor(e, i)}
                            placeholder="Enter Last name"
                            validations={[vauthors]}
                          />
                        </label>
                        <label>
                          Affiliation number(s)
                          <div className="affilation-select-wrapper">
                            <Select
                              name="affiliation_1"
                              value={x.affiliation_1}
                              onChange={(e) => handleAuthor(e, i)}
                            >
                              <option value=""></option>
                              {final}
                            </Select>
                            <Select
                              name="affiliation_2"
                              value={x.affiliation_2}
                              onChange={(e) => handleAuthor(e, i)}
                            >
                              <option value=""></option>
                              {final}
                            </Select>
                            <Select
                              name="affiliation_3"
                              value={x.affiliation_3}
                              onChange={(e) => handleAuthor(e, i)}
                            >
                              <option value=""></option>
                              {final}
                            </Select>
                          </div>
                        </label>
                        {authorsList.length !== 1 && (
                          <AddButton onClick={() => handleAuthorRemove(i)}>
                            Remove Author
                          </AddButton>
                        )}
                      </AuthorWrapper>
                      {authorsList.length - 1 === i &&
                        authorsList.length !== 10 && (
                          <AddButton onClick={handleAuthorAdd}>
                            Add Author
                          </AddButton>
                        )}
                    </>
                  );
                })}
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>Affiliations</span>
                {affiliationsList.map((x, i) => {
                  return (
                    <>
                      <AuthorWrapper key={i}>
                        <label>
                          {i + 1}. Institute / Company
                          <Input
                            name="institute_company"
                            value={x.institute_company}
                            onChange={(e) => handleAffiliation(e, i)}
                            placeholder="Enter Institute / Company"
                            validations={[vauthors]}
                          />
                        </label>
                        <label>
                          City
                          <Input
                            name="city"
                            value={x.city}
                            onChange={(e) => handleAffiliation(e, i)}
                            placeholder="Enter City"
                            validations={[vauthors]}
                          />
                        </label>
                        <label>
                          Country
                          <div className="affiliation-select-wrapper">
                            <Select
                              name="country"
                              value={x.country}
                              onChange={(e) => handleAffiliation(e, i)}
                            >
                              <option value="">Select Country</option>
                              <option value="Not specified">
                                Not specified
                              </option>
                              {Countries.map((country) => (
                                <option value={country.name} key={country.code}>
                                  {country.name}
                                </option>
                              ))}
                            </Select>
                          </div>
                        </label>
                        {affiliationsList.length !== 1 && (
                          <AddButton onClick={() => handleAffiliationRemove(i)}>
                            Remove Affiliation
                          </AddButton>
                        )}
                      </AuthorWrapper>
                      {affiliationsList.length - 1 === i &&
                        affiliationsList.length !== 10 && (
                          <AddButton onClick={handleAffiliationAdd}>
                            Add Affiliation
                          </AddButton>
                        )}
                    </>
                  );
                })}
              </label>
              {/* {authors.map((author) => (
                <AuthorCard
                  key={author.id}
                  author={author.message}
                  id={author.id}
                  // deleteAuthor={(id) => deleteAuthor(id, authors, setAuthors)}
                />
              ))} */}
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>Keywords</span>
                <AuthorWrapper>
                  <Input
                    onChange={(e) => setKeywordsValue(e.target.value)}
                    value={keywordsValue}
                    placeholder="Enter Keywords"
                    validations={[vkeywords]}
                  />

                  <AddButton
                    onClick={(e) =>
                      handleKeyword(
                        e,
                        keywords,
                        setKeywords,
                        keywordsValue,
                        setKeywordsValue
                      )
                    }
                  >
                    Add Keyword
                  </AddButton>
                </AuthorWrapper>
              </label>
              {keywords.length === 0 ? (
                <></>
              ) : (
                <KeywordsWrapper>
                  {keywords.map((keyword) => (
                    <KeywordCard
                      key={keyword.id}
                      keyword={keyword.keyword}
                      id={keyword.id}
                      deleteKeyword={(id) =>
                        deleteKeyword(id, keywords, setKeywords)
                      }
                    />
                  ))}
                </KeywordsWrapper>
              )}
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>Introduction</span>
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
                <span>Objectives</span>
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
                <span>Methods</span>
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
                <span>Results</span>
              </label>
              <RichText
                theme="snow"
                value={results}
                onChange={setResults}
                modules={toolbarOptions}
                required
              />
              <Counter className={counter > 250 ? "over" : ""}>
                {counter} / 250
              </Counter>
            </InputWrapper>
            <InputWrapper>
              <label>
                <span>Conclusion</span>
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
                <span>Upload your Abstract</span>
                <Rule>**File upload is not nessesary**</Rule>
                <Rule>**Before uploading, please rename the file to: abstract-file</Rule>
                <Input
                  type="file"
                  id="absract"
                  name="absract"
                  accept=".doc, .docx"
                  onChange={handleUploadAbstract}
                />
              </label>
              <RadioWrapper>
                <span>Presentation Preference</span>
                <RadioRow>
                  <label htmlFor="Male">
                    <input
                      // required
                      type="radio"
                      id="oral"
                      name="Type"
                      value="Oral"
                      checked={eposter === false}
                      onChange={(e) => {
                        setPresentationPreference(e.target.value);
                        setEposter(false);
                      }}
                    />
                    Oral
                  </label>
                  <label htmlFor="Female">
                    <input
                      // required
                      type="radio"
                      id="female"
                      name="Gender"
                      value="Eposter"
                      checked={eposter === true}
                      onChange={(e) => {
                        setPresentationPreference(e.target.value);
                        setEposter(true);
                      }}
                    />
                    E-Poster
                  </label>
                </RadioRow>
              </RadioWrapper>
            </InputWrapper>
            <EposterWrapper className={!eposter ? "hidden" : ""}>
              <Foreword>
                We kindly request that you prepare your E-Poster and audio
                recording (at a length of 5 minutes or less) for upload into the
                online system.
              </Foreword>
              <StepWrapper>
                <StepIndicator>Step 1:</StepIndicator>
                <StepTitle>PREPARATIONS FOR YOUR E-POSTER</StepTitle>
                <StepParagraph>
                  Please submit your E-Poster as a 1-page .PPTx file in
                  landscape orientation. If you wish, you may use a template
                  that can be{" "}
                  <a
                    href="https://www.posterpresentations.com/free-poster-templates.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOWNLOAD HERE
                  </a>
                  .
                </StepParagraph>
                <StepList>
                  <StepListItem>
                    Language: All E-Posters should be prepared in English.
                  </StepListItem>
                  <StepListItem>1 Page PPTX file</StepListItem>
                  <StepListItem>
                    File format: <span>.PPT / .PPTX only.</span>
                  </StepListItem>
                  <StepListItem>
                    File size less than <span>10 MB</span>
                  </StepListItem>
                  <StepListItem>E-Poster orientation: landscape</StepListItem>
                  <StepListItem>
                    Font size: ≥16 (please do not use smaller font)
                  </StepListItem>
                  <StepListItem>
                    Animated images and animations are not permitted for
                    e-Posters and will be non-functioning.
                  </StepListItem>
                  <StepListItem>
                    When you insert Images Photos Tables Graphs please use
                    simple copy-paste, and do not use embedded documents – the
                    system does not support embedded files -audio or video
                  </StepListItem>
                  <StepListItem>
                    Please do not use symbols or special characters (ie. +/-@)
                  </StepListItem>
                  <StepListItem>
                    Please do not use headers and footers.
                  </StepListItem>
                </StepList>
              </StepWrapper>
              <InputWrapper>
                <label>
                  <span>
                    Upload your E-Poster <span className="required">*</span>
                  </span>
                <StepRule>**Before uploading, please rename the file to: eposter-file</StepRule>
                  <Input
                    type="file"
                    id="absract"
                    name="absract"
                    accept=".ppt, .pptx"
                    onChange={handleUploadEposter}
                  />
                </label>
              </InputWrapper>
              <StepWrapper>
                <StepIndicator>Step 2:</StepIndicator>
                <StepTitle>RECORDING YOUR 5 MIN MP3 AUDIO FILE</StepTitle>
                <StepParagraph>
                  For instructions on how to record a short <span>5 min</span>{" "}
                  or less audio file for your E-Poster, please{" "}
                  <a
                    href="https://wpatbilisicongress.com/voice-record-guide.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CLICK HERE
                  </a>
                  .
                </StepParagraph>
                <StepRule>
                  **Please note that you may NOT save the file name with any
                  characters or symbols – only letters and numbers and no spaces
                  in the file name.
                </StepRule>
                <StepParagraph>
                  By following the guidelines, you will ensure your E-Poster is
                  displayed correctly. Without following these instructions your
                  E-Poster will be unable to be uploaded.
                </StepParagraph>
                <StepRule>**Audio is not nessesary**</StepRule>
              </StepWrapper>
              <InputWrapper>
                <label>
                  <span>Upload your Audio</span>
                <StepRule>**Before uploading, please rename the file to: eposter-audio</StepRule>

                  <Input
                    type="file"
                    id="absract"
                    name="absract"
                    accept=".mp3, .m4a, .wav, .wma, .ogg"
                    onChange={handleUploadAudio}
                  />
                </label>
              </InputWrapper>
              {/* <Button type="submit" value="Submit E-Poster" /> */}
            </EposterWrapper>
            {/* <EposterUpload eposterChecked={eposter} /> */}
            <Button disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Submit Abstract</span>
            </Button>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </InputForm>
        )}
      </AbstractWrapper>
    </>
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
  max-width: 900px;
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
    div {
      width: 100%;
    }
    .required {
      color: #bd1b21;
    }
  }
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
const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
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
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 100%;
  label {
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  gap: 20px;
  .affilation-select-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    /* flex-direction: row; */
  }
`;

const KeywordsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  max-width: 600px;
  width: 100%;
`;

const AddButton = styled.button`
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 60px;
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

const Select = styled(ValidSelect)`
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
  max-width: 900px;
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
const Rule = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  line-height: 1.6;
  color: #ff3333;
  margin-top: 10px;
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

const EposterWrapper = styled(Container)`
  &.hidden {
    display: none;
  }
`;

const Foreword = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  color: #000;
`;

const StepWrapper = styled.div`
  margin-top: 30px;
`;

const StepIndicator = styled.span`
  font-family: "Titillium Web", sans-serif;
  font-size: 22px;
  font-weight: 900;
  color: #bd1b21;
  text-transform: uppercase;
`;

const StepTitle = styled.h3`
  font-family: "Titillium Web", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  color: #000;
  text-transform: uppercase;
  margin-top: 10px;
`;

const StepParagraph = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #000;
  margin-top: 10px;
  a {
    font-weight: 700;
  }
  span {
    font-weight: 700;
  }
`;

const StepRule = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  line-height: 1.6;
  color: #ff3333;
  margin-top: 10px;
`;

const StepList = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
`;
const StepListItem = styled.li`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #000;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 10px;
  &:before {
    content: "";
    display: block;
    min-width: 10px;
    min-height: 10px;
    border-radius: 50%;
    background-color: #bd1b21;
  }
  span {
    font-weight: 700;
  }
`;
export default Abstract;
