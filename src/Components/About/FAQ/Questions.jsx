import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Questions = () => {
  return (
    <StyledContainer>
      <ParagraphWrapper>
        <ParagraphTitle>How do I register for the Congress?</ParagraphTitle>
        <Paragraph>
          In order to register for the Congress, please, visit the{" "}
          <Link to="/">Registration</Link> page.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          What do I need in order to attend the virtual Congress? How to join
          live sessions?
        </ParagraphTitle>
        <Paragraph>
          To attend the Congress online you need your device or computer, a good
          internet connection, ZOOM platform and a valid registration. After
          registration, you will receive a code by e-mail. Find SCHEDULES in
          web-menu and use this code to enter in it. The SCHEDULES will be
          activated and ZOOM links will appear across the sessions 1 day prior
          the Congress. Please, use your full name for ZOOM!
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Can I register onsite?</ParagraphTitle>
        <Paragraph>
          Yes. Onsite registration is available during the congress days.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>How is my registration confirmed?</ParagraphTitle>
        <Paragraph>
          A confirmation letter will be sent to you as soon as payment is
          received and registration is completed.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          Is it possible to change the Registration Category (ONSITE/ONLINE)?
        </ParagraphTitle>
        <Paragraph>
          Upon request, the Congress Secretariat will change your initial ONLINE
          registration to an ONSITE registration or vice versa.
          <br />
          For ONLINE to ONSITE change you will be required to pay the difference
          between these registration categories before the Congress starting
          date.
          <br />
          For ONSITE to ONLINE change we will refund the difference in fees
          (withholding 30 EUR as international bank transfer fee). Please note
          that all refunds will be made after the Congress.
          <br />
          Up to 4 September 2022 you will be able to change your registration
          category at no charge. As of 5 September 2022, there will be no
          refunds for changing your registration category.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          What is included in my registration fee for in-person attendance?
        </ParagraphTitle>
        <Paragraph>
          The full registration fee for onsite attendance allows access to all
          events and functions during the event and includes: congress
          materials, plenary and concurrent sessions, the welcome reception,
          meals and breaks as specified in the program. You will receive a name
          badge and program when you arrive onsite. Badge is your “ticket” into
          Congress activities and must be worn at all times. It is not
          transferable at any time.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          Does the registration fee include travel costs for the Congress?
        </ParagraphTitle>
        <Paragraph>
          All travel costs including air and hotel accommodations are the
          responsibility of the participants.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Who can attend the Welcome Reception?</ParagraphTitle>
        <Paragraph>
          All registered ONSITE participants are invited to attend the Congress
          Opening &amp;Welcome Reception on 14 October evening. Attendance is
          included with your registration.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Can I cancel my registration?</ParagraphTitle>
        <Paragraph>
          Yes. If you need to cancel your congress participation, please notify
          the Congress Secretariat by email{" "}
          <a href="mailto:wpatbilisicongress@gmail.com">
            wpatbilisicongress@gmail.com
          </a>{" "}
          to receive refund of the registration fee.
        </Paragraph>
        <Paragraph>
          All cancellations must be emailed prior to the below deadlines:
        </Paragraph>
        <UlList>
          <GuideList>
            Cancellations received until and including 4 September 2022 will be
            fully refunded.
          </GuideList>
          <GuideList>
            As of 5 September 2022 - no refund will be made.
          </GuideList>
          <GuideList>
            Bank transfer handling fee (30 EUR) will not be refunded (applicable
            to bank transfer payments only).
          </GuideList>
        </UlList>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          How can I find out when someone is scheduled to present?
        </ParagraphTitle>
        <Paragraph>
          The <Link to="/">Scientific program</Link> includes information about
          each of the sessions being presented at the Congress.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          Where can I find information about Poster Sessions?
        </ParagraphTitle>
        <Paragraph>
          During the presentation time, attendees are able to interact with
          authors of the Posters, and discuss their research with them. Poster
          authors do not give formal presentations. You can visit{" "}
          <Link to="/">E-poster submission</Link> for detailed information.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>What are the plenary sessions?</ParagraphTitle>
        <Paragraph>
          Plenary sessions are usually lectures or speeches designed to appeal
          to all meeting attendees.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          I have submitted abstract, when will I know if it has been accepted?
        </ParagraphTitle>
        <Paragraph>
          Only after all abstracts have been reviewed by the Scientific
          Committee notifications will be sent to the abstract submitters.
          Conclude the process wil within one month after submission or extended
          submission deadline if there will be extension.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          How can I make changes to an abstract I have already submitted?
        </ParagraphTitle>
        <Paragraph>
          You may enter the Abstract Submission system and making changes in
          your abstract until the submission deadline date. No changes will be
          accepted after this date.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          Where will be published my abstract if accepted?
        </ParagraphTitle>
        <Paragraph>
          Accepted abstracts of registered participants will be published in the{" "}
          <Link to="/">e-Abstracts Book</Link> of the Congress.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          How do I apply for a visa to visit Georgia?
        </ParagraphTitle>
        <Paragraph>
          Certain international travelers may be eligible to travel to Georgia
          without a visa if they meet the requirements for visa-free travel. For
          more, please, attend e-visa site:{" "}
          <a
            href="https://www.evisa.gov.ge/GeoVisa/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.evisa.gov.ge/GeoVisa/
          </a>{" "}
          or <br />
          <a
            href="https://www.geoconsul.gov.ge/HtmlPage/Html/View?id=956&lang=Eng"
            target="_blank"
            rel="noreferrer"
          >
            https://www.geoconsul.gov.ge/HtmlPage/Html/View?id=956&lang=Eng
          </a>
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          Can I get a Congress invitation letter for applying for a visa?
        </ParagraphTitle>
        <Paragraph>
          Yes. Invitation letters for visa purposes are available only to
          registered participants. For this purpose,{" "}
          <Link to="/">contact us</Link>. Please, take in account that we do not
          send official invitation letters directly to consulates. Invitation
          letters are prepared for individuals and are mailed directly to them.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Is the Congress CME- accredited?</ParagraphTitle>
        <Paragraph>
          Yes. For more information, please, visit{" "}
          <Link to="/">CME Accreditation</Link>.
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>
          How can I claim my CME credits after the Congress?
        </ParagraphTitle>
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
export default Questions;
