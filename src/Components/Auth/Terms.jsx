import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Terms = () => {
  return (
    <StyledContainer>
      <ParagraphWrapper>
        <ParagraphTitle>Data Processing Consent</ParagraphTitle>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Why we ask your consent</h4>
          </UlTitle>
          <UlList>
            <Paragraph>
              According to the new personal data laws, your consent to process
              your personal data is required in order to be registered otherwise
              we will not be able to send you confirmations, information,
              reminders and other necessary details.
            </Paragraph>
          </UlList>
        </GuideWrapper>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Why are we asking for your personal data?</h4>
          </UlTitle>
          <UlList>
            <Paragraph>
              We ask for your personal data to proceed with your registration
              for this Congress and for organising any other services you wish
              to book (i.e. tickets, transfers, restaurant bookings, etc.).
            </Paragraph>
          </UlList>
        </GuideWrapper>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Who has access to your personal data?</h4>
          </UlTitle>
          <UlList>
            <Paragraph>
              The Congress Secretariat, all committees related to the congress
              (i.e. Organising Committee, Scientific Committee, etc.), sponsors
              and third parties handling services related to the congress. Third
              parties will receive only the information required for their
              operation.
            </Paragraph>
          </UlList>
        </GuideWrapper>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>How long will your personal data be available to us?</h4>
          </UlTitle>
          <UlList>
            <Paragraph>
              Your personal data will be available to the Congress Secretariat,
              the committees and the sponsors, for up to 6 months after the
              closing of the Congress. Third parties will retain your personal
              data for up to 30 days after the conclusion of the Congress.
            </Paragraph>
          </UlList>
        </GuideWrapper>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Feel free to request information on your data or withdraw your
              consent
            </h4>
          </UlTitle>
          <UlList>
            <Paragraph>
              You may contact us at any time to request any type of information
              regarding the data we keep for you. You may also withdraw your
              consent to have access to your data and process them, at any time.
            </Paragraph>
          </UlList>
        </GuideWrapper>
      </ParagraphWrapper>

      <ParagraphWrapper>
        <ParagraphTitle>Terms and Conditions</ParagraphTitle>
        <GuideWrapper>
          <UlList>
            <GuideList>
              All registration fees are quoted in Euro (€).Fees are exempted
              from VAT.
            </GuideList>
            <GuideList>
              Registration fees are based on the date of the receipt. The prices
              indicated are only applicable if both the registration request and
              the payment are received before midnight, Tbilisi Time (GMT +4),
              on the relevant registration deadline date, otherwise the higher
              registration fee will be applied.
            </GuideList>
            <GuideList>
              An email of receipt the amount will be sent to you upon completion
              of your registration. This letter must be presented at the
              registration desk at the meeting venue and only if outstanding
              amount is zero, you will be able to receive the congress
              documents.
            </GuideList>
          </UlList>
        </GuideWrapper>
      </ParagraphWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding: 100px 0;
`;

const ParagraphWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`;
const ParagraphTitle = styled.h3`
  color: #000;
  font-family: "Titillium Web", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  /* margin-bottom: 30px; */
`;

const Paragraph = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  line-height: 1.6;
`;

const GuideWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
const UlTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 10px;
  h4 {
    font-family: "Titillium Web", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #000;
    font-weight: 600;
  }
  svg {
    color: #bd1b21;
    font-size: 15px;
  }
`;

const UlList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;
`;

const GuideList = styled.li`
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
    min-width: 12px;
    min-height: 12px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #bd1b21;
  }
  span {
    font-weight: 700;
  }
`;
export default Terms;
