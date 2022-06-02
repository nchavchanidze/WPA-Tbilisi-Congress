import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const SponsorshipInfo = () => {
  return (
    <AboutWrapper>
      <Container>
        <ParagraphWrapper>
          <ParagraphTitle>
            The local organizers of the congress are the Society of Georgian
            Psychiatrists and the Alliance for Better Mental Health. For the
            bank transfers, please, use information below:
          </ParagraphTitle>
          <br />
          <Paragraph>
            Bank account for the{" "}
            <span className="strong">Society of Georgian Psychiatrists:</span>
            <br />
            <span className="strong">Beneficiary:</span> AVLIP ZURABASHVILI
            SOCIETY OF GEORGIAN PSYCHIATRISTS
            <br />
            <span className="strong">Account:</span> GE58BG0000000117633800 EUR
            <br />
            <span className="strong">Bank details:</span> Bank of Georgia. 29a
            Gagarin street, Tbilisi, Georgia
            <br />
            <span className="strong">SWIFT:</span> BAGAGE22
            <br />
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            Bank account for the{" "}
            <span className="strong">Alliance for Better Mental Health:</span>
            <br />
            <span className="strong">Beneficiary:</span> Aliansi uketesi psikikuri janmrtelobistvis
            <br />
            <span className="strong">Account:</span> GE86TB7667136120100001 EUR
            <br />
            <span className="strong">Bank details:</span> JSC TBC Bank. Tbilisi, Georgia
            <br />
            <span className="strong">SWIFT:</span> TBCBGE22
            <br />
          </Paragraph>
        </ParagraphWrapper>
      </Container>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: 0 0 100px ;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const ParagraphWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
const ParagraphTitle = styled.h3`
  color: #000;
  font-family: "Titillium Web", sans-serif;
  font-size: 22.5px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  line-height: 1.6;
  span {
    font-weight: 700;
    color: #bd1b21;
    &.strong {
      color: #000;
    }
  }
`;
export default SponsorshipInfo;
