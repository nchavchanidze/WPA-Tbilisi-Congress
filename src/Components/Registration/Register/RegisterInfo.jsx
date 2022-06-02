import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const RegisterInfo = () => {
  return (
    <InfoWrapper>
      <RadioForm>
        <RadioLabel htmlFor="">
          <input type="radio" name="categories" value="" />
          Participants form High Income Country*
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input type="radio" name="categories" value="" />
          Participants from Upper Middle-Income Country*
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input type="radio" name="categories" value="" />
          Participants from Low & Lower-income Country*
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input type="radio" name="categories" value="" />
          Georgian citizens**
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input type="radio" name="categories" value="" />
          Students/Residents, Service users & carers, Allied professionals,
          Others
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input type="radio" name="categories" value="" />
          Online participants
        </RadioLabel>
      </RadioForm>
      <ParagraphWrapper>
        <Paragraph style={{ fontStyle: "italic" }}>
          Fees are exempted from VAT.
        </Paragraph>
        <Paragraph>
          <span>*</span> Countries are defined as per{" "}
          <a
            href="https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups"
            target="_blank"
            rel="noopener noreferrer"
          >
            World Bank Classification
          </a>
        </Paragraph>
        <Paragraph>
          <span>**</span> Georgian citizens may transfer equivalent in Georgian
          LARI as per daily course of National Bank of Georgia on the day of
          payment.
        </Paragraph>
        <Paragraph>
          <span className="strong">Please, note:</span> when letters, certifying
          status, are sent after the early/late registration deadline, the next
          registration fee will be applicable even when the registration is
          processed online and fully paid.
        </Paragraph>
      </ParagraphWrapper>
      <TotalWrapper>
        <p>Total: <span className="strong">€ 250</span></p>
      </TotalWrapper>
    </InfoWrapper>
  );
};

const InfoWrapper = styled(Container)`
  padding: 100px 0;
`;

const RadioForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;
const RadioLabel = styled.label`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  input[type="radio"] {
    margin-right: 0.5em;
  }
`;

const ParagraphWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  width: 100%;
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

const TotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  border-top: 1px solid #bd1b21;
  padding-top: 30px;
  p {
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
  }
`;
export default RegisterInfo;
