import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Eposter = () => {
  const [audio, setAudio] = useState([]);

  console.log(audio);
  return (
    <>
      <Title>Submit Your E-Poster</Title>
      <EposterWrapper>
        <Foreword>
          We kindly request that you prepare your E-Poster and audio recording
          (at a length of 5 minutes or less) for upload into the online system.
        </Foreword>
        <StepWrapper>
          <StepIndicator>Step 1:</StepIndicator>
          <StepTitle>PREPARATIONS FOR YOUR E-POSTER</StepTitle>
          <StepParagraph>
            Please submit your E-Poster as a 1-page .PPTx file in landscape
            orientation. If you wish, you may use a template that can be{" "}
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
              Animated images and animations are not permitted for e-Posters and
              will be non-functioning.
            </StepListItem>
            <StepListItem>
              When you insert Images Photos Tables Graphs please use simple
              copy-paste, and do not use embedded documents – the system does
              not support embedded files -audio or video
            </StepListItem>
            <StepListItem>
              Please do not use symbols or special characters (ie. +/-@)
            </StepListItem>
            <StepListItem>Please do not use headers and footers.</StepListItem>
          </StepList>
        </StepWrapper>
        <InputWrapper>
          <label>
            <span>
              Upload your E-Poster <span className="required">*</span>
            </span>
            <Input type="file" id="absract" name="absract" accept=".pptx" />
          </label>
        </InputWrapper>
        <StepWrapper>
          <StepIndicator>Step 2:</StepIndicator>
          <StepTitle>RECORDING YOUR 5 MIN MP3 AUDIO FILE</StepTitle>
          <StepParagraph>
            For instructions on how to record a short <span>5 min</span> or less
            audio file for your E-Poster, please{" "}
            <a
              href="https://wcp-congress.com/wp-content/uploads/sites/46/2021/01/WCP-2020-How-to-record-audio-for-E-Posters.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CLICK HERE
            </a>
            .
          </StepParagraph>
          <StepRule>
            **Please note that you may NOT save the file name with any
            characters or symbols – only letters and numbers and no spaces in
            the file name.
          </StepRule>
          <StepParagraph>
            By following the guidelines, you will ensure your E-Poster is
            displayed correctly. Without following these instructions your
            E-Poster will be unable to be uploaded.
          </StepParagraph>
        <StepRule>
            **Audio is not nessesary**
          </StepRule>
        </StepWrapper>
        <InputWrapper>
          <label>
            <span>Upload your Audio</span>
            <Input
              type="file"
              id="absract"
              name="absract"
              accept=".mp3, .m4a, .wav, .wma, .ogg"
              value={audio}
              onChange={(e) => setAudio(e.target.value)}
            />
            <audio controls>
              <source
                src="C:\fakepath\Jazz Beat C Blues Scale.mp3"
                type="audio/mp3"
              />
              Your browser does not support the audio tag.
            </audio>
          </label>
        </InputWrapper>
        <Button type="submit" value="Submit E-Poster" />
      </EposterWrapper>
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

const EposterWrapper = styled(Container)``;

const Foreword = styled.h2`
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  color: #39364f;
`;

const StepWrapper = styled.div`
  margin-top: 30px;
`;

const StepIndicator = styled.span`
  font-family: "Urbanist", sans-serif;
  font-size: 22px;
  font-weight: 900;
  color: #486ff8;
  text-transform: uppercase;
`;

const StepTitle = styled.h3`
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  color: #39364f;
  text-transform: uppercase;
  margin-top: 10px;
`;

const StepParagraph = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #39364f;
  margin-top: 10px;
  a {
    font-weight: 700;
  }
  span {
    font-weight: 700;
  }
`;

const StepRule = styled.p`
  font-family: "Urbanist", sans-serif;
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
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #39364f;
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
    background-color: #486ff8;
  }
  span {
    font-weight: 700;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 30px;
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
    gap: 20px;
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

const Button = styled.input`
  background-color: #486ff8;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  margin: 50px auto 0;
  &:hover {
    border: 2px solid #486ff8;
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;
export default Eposter;
