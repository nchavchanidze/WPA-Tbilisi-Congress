import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import AboutImg from "../../Assets/Images/Abstact Submission/about.jpg";
import RegistrationCards from "./RegistrationCards";
import Pricing from "./Pricing";

const AboutRegistration = () => {
  return (
    <AboutWrapper>
      <Container>
        <AboutTitle>will be OPEN on 31st May</AboutTitle>
        <About style={{ width: "100%" }}>
          Dear colleagues, if you are still unsure about travelling to Tbilisi,
          then first register for ONLINE participation and benefit from Early
          rates until 1st August 2022.
        </About>
        <About>
          The Congress is currently being planned as a hybrid event with
          physical presence and a virtual component. As we understand the
          uncertainty during these unprecedented times, we offer our
          participants the flexibility of changing their registration until 4
          September 2022 and, upon availability, from ONLINE to ONSITE or vice
          versa.
        </About>
      </Container>
      <RegistrationCards />
      <Container>
        <About>
          Please note that ON-SITE registration cannot be totally cancelled; you
          will only be able to change your ON-SITE event registration to ONLINE
          in case you want to.
          <br /> <br /> To make changes in your registration type, please send
          an email to the Congress Secretariat indicating the change you want to
          make:{" "}
          <a href="mailto:wpatbilisicongress@gmail.com">
            wpatbilisicongress@gmail.com
          </a>
          . Please note that only one change is allowed per participant. For
          further details see the section Conversion of Registration Category
          below.
          <br /> <br /> For further details, see the section Conversion of
          Registration Category below.
        </About>
        <ParagraphWrapper>
          <ParagraphTitle>Registration Fees</ParagraphTitle>
          <Paragraph>
            <span>WARNING:</span> There is an increasing number of fraudulent
            websites. We recommend you only register via this website, directly
            with the official meeting organizer.
          </Paragraph>
          <Paragraph>
            ONSITE and ONLINE Participation Fees (in EUR) apply to payments
            received prior to the indicated deadlines.
          </Paragraph>
        </ParagraphWrapper>
        <Pricing />
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
            <span>**</span> Georgian citizens may transfer equivalent in
            Georgian LARI as per daily course of National Bank of Georgia on the
            day of payment.
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <span className="strong">Please, note:</span> when letters,
            certifying status, are sent after the early/late registration
            deadline, the next registration fee will be applicable even when the
            registration is processed online and fully paid.
          </Paragraph>
        </ParagraphWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>ONSITE participation registration fee includes:</h4>
          </UlTitle>
          <UlList>
            <GuideList>
              Admittance to Opening Ceremony & Welcome Reception
            </GuideList>
            <GuideList>Participation in all scientific sessions</GuideList>
            <GuideList>Admittance to the exhibition</GuideList>
            <GuideList>Participation in the courses</GuideList>
            <GuideList>Open access to the virtual sessions</GuideList>
            <GuideList>Congress materials</GuideList>
            <GuideList>Certificate of Attendance</GuideList>
            <GuideList>
              Refreshments/Meals as per breaks indicated in the program
            </GuideList>
          </UlList>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>ONLINE participation registration fee includes:</h4>
          </UlTitle>
          <UlList>
            <GuideList>
              Access to all Plenary Lectures and Scientific Sessions
            </GuideList>
            <GuideList>Access to all Industry-Sponsored Symposia</GuideList>
            <GuideList>Access to posters</GuideList>
            <GuideList>Networking with colleagues </GuideList>
            <GuideList>Certificate of Attendance</GuideList>
            <GuideList>To join debates during live-streamed sessions</GuideList>
          </UlList>
        </GuideWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Registration Terms</ParagraphTitle>
          <Paragraph>
            Full payment of your registration is required to confirm your
            participation in the Congress.
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Methods of payment</ParagraphTitle>
          <Paragraph>
            <span className="strong">
              All payments are to be made in Euro (EUR)
            </span>
          </Paragraph>

          <Paragraph>
            <span className="strong">By Credit Card</span> (Visa, MasterCard)
            <br />
            Follow the process through the Congress’s online services system.
            Upon completion of payment, the online system will redirect you to a
            confirmation of service and the respective payments page.
            <br />
            <br />
            <br />
            <span className="strong">By Bank Transfer</span> (Additional 30 EUR
            handling fee is required)
            <br />
            <br />
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
            <br />
            Bank account for the{" "}
            <span className="strong">Alliance for Better Mental Health:</span>
            <br />
            <span className="strong">Beneficiary:</span> Aliansi uketesi
            psikikuri janmrtelobistvis
            <br />
            <span className="strong">Account:</span> GE86TB7667136120100001 EUR
            <br />
            <span className="strong">Bank details:</span> JSC TBC Bank. Tbilisi,
            Georgia
            <br />
            <span className="strong">SWIFT:</span> TBCBGE22
            <br />
            <br />
            Please ensure that the name of the event and of the participant is
            stated on the bank transfer. <br />
            Bank charges are the responsibility of the participant and should be
            paid at source in addition to the registration fees.
          </Paragraph>
          <Paragraph>
            Registration will only be valid upon receipt of the full payment by
            the registration department according to the deadline indicated. An
            email confirming registration will only be sent after receiving the
            required fee. Onsite participants will receive the badges with their
            names upon presentation of the Confirmation letter at the
            registration counter at the congress venue.
            <br />
            <br />
            Outstanding payments will be collected on-site and charged by
            on-site rate. A copy of the bank transfer (or other proof of
            payment) will be required if registration fees were not credited to
            the congress account on time.
            <br />
            <br />
            For further information, please contact at{" "}
            <Link to="mailto:wpatbilisicongress@gmail.com">
              wpatbilisicongress@gmail.com
            </Link>
            .
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Group Registration</ParagraphTitle>
          <Paragraph>
            For groups of 10 or more registrations, please contact at{" "}
            <Link to="mailto:wpatbilisicongress@gmail.com">
              wpatbilisicongress@gmail.com
            </Link>
            {""} for assistance.
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Registration Cancellation Policy</ParagraphTitle>
          <Paragraph>
            All cancellations and amendments must be submitted by email to the
            Congress Secretariat at{" "}
            <a href="mailto:wpatbilisicongress@gmail.com">
              wpatbilisicongress@gmail.com
            </a>{" "}
            to receive refund of the registration fee.
          </Paragraph>
          <GuideWrapper>
            <UlTitle>
              <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
              <h4>
                All cancellations must be emailed prior to the below deadlines:
              </h4>
            </UlTitle>
            <UlList>
              <GuideList>
                Cancellations received until and including{" "}
                <span> 4 September 2022</span> – full refund
              </GuideList>
              <GuideList>
                As of <span>5 September 2022</span> – no refund will be made In
                case of cancellation bank transfer handling fee (30 EUR) will
                not be refunded (applicable to bank transfer payments only).
              </GuideList>
            </UlList>
          </GuideWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Conversion of Registration Category</ParagraphTitle>
          <Paragraph>
            Upon request, the Congress Secretariat will change your initial
            ONLINE registration to an ONSITE registration or vice versa.
            <br />
            For ONLINE to ONSITE change you will be required to pay the
            difference between these registration categories before the Congress
            starting date.
            <br />
            For ONSITE to ONLINE change we will refund the difference in fees
            (withholding 30 EUR as international bank transfer fee). Please note
            that all refunds will be made after the Congress.
            <br />
            Up to <span className="strong">4 September 2022</span> you will be
            able to change your registration category at no charge.
            <br />
            As of <span className="strong">5 September 2022</span>, there will
            be no refunds for changing your registration category.
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Confirmation of Registration</ParagraphTitle>
          <Paragraph>
            Participants will receive a registration confirmation letter as soon
            as the appropriate fees have been received. The confirmation letter
            will be automatically provided during online registration for online
            payments through the Congress system as soon as the credit card
            charges have been completed and confirmed. For bank transfers the
            confirmation letter will be sent by email. Please check your email
            inbox for the Registration Confirmation. If not received, please
            check your Spam folder before{" "}
            <Link to="/contact">contacting us</Link> for assistance.
          </Paragraph>
        </ParagraphWrapper>
      </Container>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: 100px 0;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const AboutImage = styled.img`
  width: 100%;
`;

const AboutTextWrapper = styled.div`
  padding-left: 120px;
  @media only screen and (max-width: 991.98px) {
    padding-left: 0;
    margin-top: 60px;
    text-align: center;
  }
  a {
    background-color: #486ff8;
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    border-radius: 5px;
    height: 50px;
    width: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 2px solid transparent;
    margin-top: 25px;
    transition: all 0.3s ease-out;
    @media only screen and (max-width: 991.98px) {
      width: 100%;
    }
    &:hover {
      border: 2px solid #486ff8;
      background-color: #fff;
      color: #486ff8;
      transition: all 0.3s ease-out;
    }
  }
`;
const AboutTitle = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 600;
  color: #000;
`;

const About = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  line-height: 1.6;
  margin-top: 25px;
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

const GuideWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  width: 100%;
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
    font-weight: 500;
    span {
      font-weight: 600;
    }
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

export default AboutRegistration;
