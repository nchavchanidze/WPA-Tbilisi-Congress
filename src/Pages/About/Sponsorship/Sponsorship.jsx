import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Heading from "../../../Components/About/Sponsorship/Heading";
import Pricing from "../../../Components/Pricing";
import Layout from "../../../Layouts/Layout";

const Sponsorship = () => {
  return (
    <Layout>
      <Heading />
      <Container>
        <ParagraphWrapper>
          <ParagraphTitle>Sponsorship Levels & Benefits</ParagraphTitle>
          <Paragraph>
            Interested in sponsoring or exhibiting at the WPA Thematic Congress
            in Tbilisi? The Congress is pleased to offer a variety of
            opportunities. The levels are determined according to total amount
            invested in the sponsorship. <br /> <br />
            Please contact the Congress Secretariat at{" "}
            <a href="mailto:wpatbilisicongress@gmail.com">
              wpatbilisicongress@gmail.com
            </a>{" "}
            to start discussing how you would like to support, and be involved
            in the Congress.
          </Paragraph>
        </ParagraphWrapper>
      </Container>
      <Pricing />
    </Layout>
  );
};

const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  padding-top: 100px;
`;
const ParagraphTitle = styled.h3`
  color: #39364f;
  font-family: "Urbanist", sans-serif;
  font-size: 22.5px;
  font-weight: 700;
  text-transform: capitalize;
`;

const Paragraph = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #717488;
  line-height: 1.6;
`;

export default Sponsorship;
