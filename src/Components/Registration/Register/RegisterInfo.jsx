import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import axios from "axios";

const RegisterInfo = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const data = JSON.stringify({
    token: localStorage.getItem("user"),
    product_id: category,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setLoading(true);
    axios
      .post("https://wpatbilisicongress.com/Server/API/Banking/Create", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setLoading(false);
        clearInputs();
        console.log(res);
        window.location.replace(res.data.msg[1].uri);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const clearInputs = () => {
    setCategory("");
    setPrice(0);
  };

  console.log(JSON.stringify(localStorage.getItem("user")));
  console.log(data);
  return (
    <InfoWrapper>
      <RadioForm onSubmit={handleSubmit}>
        <RadioLabel htmlFor="">
          <input
            type="radio"
            name="categories"
            value="1"
            onChange={(e) => {
              setCategory(e.target.value);
              setPrice(250);
            }}
          />
          Participants form High Income Country*
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input
            type="radio"
            name="categories"
            value="2"
            onChange={(e) => {
              setCategory(e.target.value);
              setPrice(200);
            }}
          />
          Participants from Upper Middle-Income Country*
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input
            type="radio"
            name="categories"
            value="3"
            onChange={(e) => {
              setCategory(e.target.value);
              setPrice(150);
            }}
          />
          Participants from Low & Lower-income Country*
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input
            type="radio"
            name="categories"
            value="4"
            onChange={(e) => {
              setCategory(e.target.value);
              setPrice(150);
            }}
          />
          Georgian citizens**
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input
            type="radio"
            name="categories"
            value="5"
            onChange={(e) => {
              setCategory(e.target.value);
              setPrice(150);
            }}
          />
          Students/Residents, Service users & carers, Allied professionals,
          Others
        </RadioLabel>
        <RadioLabel htmlFor="">
          <input
            type="radio"
            name="categories"
            value="6"
            onChange={(e) => {
              setCategory(e.target.value);
              setPrice(100);
            }}
          />
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
        <p>
          Total: <span className="strong">{price} €</span>
        </p>
      </TotalWrapper>
      <SubmitBtn disabled={loading} onClick={handleSubmit}>
        {loading && <span className="spinner-border spinner-border-sm"></span>}{" "}
        Register Here
      </SubmitBtn>
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
const SubmitBtn = styled.button`
  margin: 50px auto 0;
  max-width: 500px;
  width: 100%;
  padding: 13px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: #fff;
  transition: all 0.3s ease-out;
  /* pointer-events: none; */
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff !important;
    color: #bd1b21 !important;
    transition: all 0.3s ease-out;
  }
  &.disabled {
    pointer-events: none;
    background-color: #ffd2d3 !important;
  }
`;
export default RegisterInfo;
