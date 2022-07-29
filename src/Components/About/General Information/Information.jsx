import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Information = () => {
  return (
    <StyledContainer>
      <ParagraphWrapper>
        <ParagraphTitle>About the Congress</ParagraphTitle>
        <Paragraph>
          WPA Thematic Congress “Treatment and Management of Mental Disorders in
          a Post-Pandemic Era” will be held on 14-16 October
          2022 in Tbilisi, Georgia.
          <br />
          <br />
          COVID Pandemic has significantly changed our lives and negatively
          affected people's mental health. Psychiatry faced new demands in
          treating and managing mental disorders, mental health complications of
          covid infected patients, and stress-related conditions in the general
          population.
          <br />
          <br />
          The thematic congress is focused on sharing knowledge and experience
          dealing with pandemic-related pharmacological and psychosocial issues.
          The leading experts will discuss the current and anticipated
          challenges and solutions.
          <br />
          <br />
          The Congress is organized by the World Psychiatric Association (WPA)
          and hosted by the Society of Georgian Psychiatrists (SGP) with support
          of the Alliance for Better Mental Health (ABMH) and the Foundation
          Global initiative on Psychiatry (GIP-Tbilisi).
          <br />
          <br />
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Congress venue</ParagraphTitle>
        <Paragraph>
          Radisson Blu Iveria Hotel, Tbilisi City Centre <br /> Address: 1,
          First Republic Square, Tbilisi, Georgia <br />
          <a
            href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-tbilisi"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.radissonhotels.com/en-us/hotels/radisson-blu-tbilisi
          </a>
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Badges</ParagraphTitle>
        <Paragraph>
          Each in-person registered participant will receive a name badge upon
          arrival. For organisational and security reasons, we request that all
          participants and industry partners wear their badges at all times
          during the congress activities. Re-print due to loss of badges or due
          to misspelled names can be asked at the registration desk.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Language</ParagraphTitle>
        <Paragraph>The official language of the Congress is English.</Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Congress time</ParagraphTitle>
        <Paragraph>
          The Congress will officially run on Georgia Standard Time (GMT +4) –
          Tbilisi time.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Guest attendance policy</ParagraphTitle>
        <Paragraph>
          All event activities (including educational sessions, exhibition hall,
          etc.) are exclusively reserved for registered attendees.
          Non-registered guests (including children, family members, colleagues,
          etc.) are not allowed in any of the event areas. Badges provided at
          registration are required for entrance into all functions and will be
          strictly enforced.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Visa information</ParagraphTitle>
        <Paragraph>
          Certain international travelers may be eligible to travel to Georgia
          without a visa if they meet the requirements for visa-free travel. It
          is preferable to collect all necessary documents and carefully read
          the information{" "}
          <a
            href="https://www.geoconsul.gov.ge/HtmlPage/Html/View?id=956&lang=Eng"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.geoconsul.gov.ge
          </a>{" "}
          <br />
          For e-visa apply{" "}
          <a
            href="https://www.evisa.gov.ge/GeoVisa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.evisa.gov.ge/GeoVisa/
          </a>
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Certificate of Attendance /CME</ParagraphTitle>
        <Paragraph>
          The Congress intends to apply for CME accreditation. Registered
          participants will be able to obtain a certificate of attendance (COA)
          as well as CME points when attending sessions during the Congress.
          They may obtain their certificate by accessing the Congress system
          activated soon after the end of the Congress.
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
const ParagraphTitle = styled.h3`
  color: #000;
  font-family: "Titillium Web", sans-serif;
  font-size: 22.5px;
  font-weight: 700;
  text-transform: capitalize;
`;

const Paragraph = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  line-height: 1.6;
`;

export default Information;
