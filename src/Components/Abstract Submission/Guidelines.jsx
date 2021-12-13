import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const Guidelines = () => {
  return (
    <GuidelinesSection>
      <Title>Guidelines for Submission</Title>
      <Container>
        <Paragraph>
          Before you begin, please prepare the following information:
        </Paragraph>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Presenting author’s contact details</h4>
          </UlTitle>
          <UlList>
            <GuideList>Full first and family name(s)</GuideList>
            <GuideList>Email address</GuideList>
            <GuideList>Full postal address</GuideList>
            <GuideList>Daytime and evening phone number</GuideList>
          </UlList>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Author and co-authors’ details</h4>
          </UlTitle>
          <UlList>
            <GuideList>Full first and family name(s)</GuideList>
            <GuideList>
              Affiliation details: department, institution / hospital, city,
              state (if relevant), country
            </GuideList>
          </UlList>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Abstract text – <span>Limited to 250 words.</span>
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Abstract topic –{" "}
              <span>
                Select the abstract topic from the{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer "
                  to="/abstract-topics"
                >
                  LIST OF TOPICS.
                </Link>
              </span>
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Abstract layout –
              <span>Abstracts should use the following structured format:</span>
            </h4>
          </UlTitle>
          <UlList>
            <GuideList>Introduction</GuideList>
            <GuideList>Objectives</GuideList>
            <GuideList>Methods</GuideList>
            <GuideList>Results</GuideList>
            <GuideList>Conclusions</GuideList>
          </UlList>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Use generic names of drugs. The presentation must be balanced and
              contain no commercial promotional content.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Submissions may not contain patient names, hospital ID numbers or
              other identifying information.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              The submission form allows you to{" "}
              <span>store your abstract as a DRAFT</span> until the deadline.{" "}
              <span>
                After the deadline, if not submitted, drafts will be deleted.
              </span>
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Click on the <span>SUBMIT</span> button at the end of the process
              in order to submit your abstract.{" "}
              <span>
                Changes will not be possible to your abstract after it is
                submitted.
              </span>
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              You will receive an abstract ID number via email after you have
              submitted your abstract. Please refer to this abstract number in
              all correspondence regarding the abstract.
            </h4>
          </UlTitle>
          <UlList>
            <GuideList>
              Please{" "}
              <Link to="/contact" target="_blank" rel="noopener noreferrer">
                contact us
              </Link>{" "}
              if you have not received confirmation that your abstract has been
              submitted.
            </GuideList>
          </UlList>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Please do not submit multiple copies of the same abstract.</h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <GuideTitle>Tables, graphs and images</GuideTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              A maximum of 3 tables of up to 10 rows x 10 columns can be
              included per abstract. Words in added tables will be accounted as
              part of the total abstract body word count.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>A maximum of 3 images can be included per abstract.</h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              All tables, figures, and reference citations must be referred to
              in the text of the abstract.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Tables and figures must be sized to one column. Tables submitted
              in figure format will be reproduced as such.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              The maximum file size of each graph/image is 500 KB. The maximum
              pixel size of the graph/image is 600(w) x 800(h) pixel. You may
              upload graphs in JPG, PNG or GIF format only.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <GuideTitle>Rules for Submission</GuideTitle>
          <Paragraph>
            Please read the submission rules before submitting an abstract.
          </Paragraph>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Abstracts must be submitted online via the website only. ABSTRACTS
              SUBMITTED BY EMAIL WILL NOT BE ACCEPTED.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Presentation Type: Abstracts may be submitted for Oral
              Communication Session, E-Poster Presentation or E-Poster Viewing.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              The Scientific Committee will determine whether the abstract will
              be accepted for presentation, with consideration given to the
              author’s preference.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Abstracts must be received by the announced deadline. Abstracts
              received after the deadline will not be considered.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              All abstracts must be submitted and presented in clear English
              with accurate grammar and spelling of a quality suitable for
              publication. If you need help, please arrange for the review of
              your abstract by a colleague who is a native English speaker, by a
              university-specific publications office (or another similar
              facility) or by a copy editor, prior to submission.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Abstracts must be original and must not be or have been published
              or presented at any other meeting prior to the Congress.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Please note that each person may submit up to 5 abstracts as a
              presenting author.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Only abstracts of authors who have paid their registration fees by
              the Early Registration Deadline, Tuesday, 18 January 2022, will be
              scheduled and included in the Congress Abstract e-Supplement.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Disclosure of Conflicts of Interest: Abstract Submitters will be
              required to disclose any conflict of interests in the submission
              form.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Upon submission, the Abstract Submitter confirms that the abstract
              has been reviewed and that all information is correct, and accepts
              that the content of this abstract cannot be modified or corrected
              after final submission and is aware that it will be published
              exactly as submitted.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Upon submission, the Abstract Submitter confirms that the contact
              details saved in the system are those of the corresponding author,
              who will be notified about the status of the abstract. The
              corresponding author is responsible for informing the other
              authors about the status of the abstract.
            </h4>
          </UlTitle>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Submission of the abstract constitutes the authors’ consent to
              publication (e.g. in the European Psychiatry Journal, the Congress
              Abstract e-Supplement, the website, congress programmes and other
              promotion, etc.).All abstracts must be submitted and presented in
              clear English with accurate grammar and spelling of a quality
              suitable for publication. If you need help, please arrange for the
              review of your abstract by a colleague who is a native English
              speaker, by a university-specific publications office (or another
              similar facility) or by a copy editor, prior to submission.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <GuideTitle>
            The Local Organising Committee will review abstracts. Following the
            information regarding acceptance, scheduling information will be
            sent to the Abstract Submitter
          </GuideTitle>
          <Paragraph>
            The EPA reserves the right to withdraw any abstracts that do not
            meet the scientific standards of the association at any point before
            or after acceptance and subsequent publication in the digital
            congress abstract book.
          </Paragraph>
        </GuideWrapper>
      </Container>
    </GuidelinesSection>
  );
};

const GuidelinesSection = styled.section`
  padding: 100px 0 50px;
  width: 100%;
`;
const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  color: #39364f;
  margin: 0 auto 50px;
  @media only screen and (max-width: 1019.98px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #39364f;
  font-weight: 400;
`;

const GuideTitle = styled.h2`
  font-family: "Urbanist", sans-serif;
  font-size: 46px;
  font-weight: 700;
  text-transform: capitalize;
  color: #39364f;
  margin: 50px 0;
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
    font-family: "Urbanist", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #39364f;
    font-weight: 500;
    span {
      font-weight: 600;
    }
  }
  svg {
    color: #486ff8;
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
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #39364f;
  position: relative;
  ${'' /* display: flex; */}
  ${'' /* justify-content: flex-start; */}
  ${'' /* align-items: baseline; */}
  ${'' /* gap: 10px; */}
  padding-left: 20px;
  &:before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #486ff8;
    position: absolute;
    top: 50%;
    left: 0;
    margin-right: 10px;
    transform: translateY(-50%);
  }
  span {
    font-weight: 700;
  }
`;

export default Guidelines;
