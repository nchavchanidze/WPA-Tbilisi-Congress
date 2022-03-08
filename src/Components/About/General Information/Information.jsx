import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Information = () => {
  return (
    <StyledContainer>
      <ParagraphWrapper>
        <ParagraphTitle>What is TBILISI & ONLINE</ParagraphTitle>
        <Paragraph>
          The WPA Thematic Congress in Tbilisi will be held in hybrid format. We
          hope that most of you will be able to travel and attend the event
          in-person. At the same time many of you might not be able to do so.
          Therefore, we are planning a full in-person meeting in Tbilisi and an
          online experience.
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
            https://www.geoconsul.gov.ge/HtmlPage/Html/View?id=956&lang=Eng
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
      <ParagraphWrapper>
        <ParagraphTitle>About WPA</ParagraphTitle>
        <Paragraph>
          The{" "}
          <a
            href="http://www.wpanet.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WPA
          </a>{" "}
          is psychiatry’s global association representing national societies
          aimed to increase the knowledge and skills necessary for work in the
          field of mental health.
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
