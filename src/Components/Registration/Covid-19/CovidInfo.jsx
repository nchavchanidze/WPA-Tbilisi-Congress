import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const CovidInfo = () => {
  return (
    <StyledContainer>
      <ParagraphWrapper>
        <Paragraph>
          The safety of our delegates is our main priority. We are doing
          everything in our capacity to ensure a smooth process, in
          correspondence to the current health regulations. We are monitoring
          the COVID-19 requirements and will be updating the information and
          safety guidelines regularly with alignment to the situation. <br /><br />
          To ensure the safety of all attendees information and guidelines will
          be published closer to the congress. In the meantime please follow the
          latest updates here:<br /><a href="https://stopcov.ge/en" target="_blank" rel="noopener noreferrer">https://stopcov.ge/en</a>
        </Paragraph>
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

const Paragraph = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #717488;
  line-height: 1.6;
`;
export default CovidInfo;
