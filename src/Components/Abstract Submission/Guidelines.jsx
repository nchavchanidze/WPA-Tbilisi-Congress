import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Guidelines = () => {
  const [ruleCheck, setRuleCheck] = useState(false);

  const handleRule = () => {
    setRuleCheck(!ruleCheck);
  };

  console.log(ruleCheck);
  return (
    <GuidelinesSection>
      <Title>Guidelines for Submission</Title>
      <Container>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            Rules for Submission
            <FontAwesomeIcon icon={faAngleDown} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Paragraph>
              It will be possible to participate with online presentation.
              Online presenters who are not present in Tbilisi will be asked to
              pre-record their presentations. Presentations will be available to
              view on demand with no live element. Presenters who are sure they
              will only be able to participate online and will not be coming to
              Tbilisi should inform the Congress Secretariat
              (wpatbilisicongress@gmail.com) by … 2022.
              <br />
              <br />
              <Strong>
                Abstracts must be submitted via this website only. Emailed
                abstracts will not be accepted.
              </Strong>
            </Paragraph>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  <span>Presentation type.</span> Abstracts may be submitted for
                  oral or e-poster presentation:
                </h4>
              </UlTitle>
              <UlList>
                <GuideList>
                  Oral Presentation (A small number of abstracts will be
                  selected as a 15+3 min oral presentations in a symposium on
                  the topic in question. If you are not comfortable providing an
                  oral presentation, please only select poster presentation
                  during submission.)
                </GuideList>
                <GuideList>
                  Poster Presentation (abstracts not selected for oral
                  presentation will be provided a poster presentation)
                </GuideList>
              </UlList>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  The Scientific Committee will determine whether the abstract
                  will be accepted for presentation, with consideration given to
                  the author’s preference.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Abstracts must be received by the announced deadline.
                  Abstracts received after the deadline will not be considered.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Presenting authors must be registered participants. Only
                  abstracts of authors who have paid their registration fees
                  will be scheduled for presentation.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  There is no limit to the amount of abstracts one person may
                  submit. Submitters and co-authors can be listed on as many
                  abstracts as needed.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Submission of an abstract acknowledges your acceptance for the
                  abstract to be published in the official Congress
                  publications.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  The presenting author is required to ensure that all
                  co-authors are aware of the content of the abstract and agree
                  to its submission, before submitting the abstract.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>Abstracts must be submitted in clear English.</h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Disclosure of Conflicts of Interest: Abstract submitters will
                  be required to disclose any conflict of interests in the
                  submission form.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Instructions for preparation of presentations are available on
                  the Congress website.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  The Scientific Committee will review all submitted abstracts.
                  Following the notification about acceptance the scheduling
                  information will be sent to the abstract submitter.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  The WPA reserves the right to withdraw any abstracts that do
                  not meet the scientific standards of the Association at any
                  point before or after acceptance and subsequent publication in
                  the digital congress abstract book.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  If an author needs to withdraw a submitted abstract, a written
                  request should be sent to the Congress Secretariat no later
                  than … 2022.
                </h4>
              </UlTitle>
            </GuideWrapper>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            Guidelines for Submission
            <FontAwesomeIcon icon={faAngleDown} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
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
                <GuideList>
                  Affiliation details: department, institution / hospital, city,
                  state (if relevant), country
                </GuideList>
                <GuideList>Phone number</GuideList>
              </UlList>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>Author and co-authors’ details</h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Abstract title – must be in <span>UPPER CASE</span> and{" "}
                  <span>limited to 25 words</span>.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Abstract topic –
                  <span>
                    Select from the{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer "
                      to="/abstract-topics"
                    >
                      Topics
                    </Link>
                  </span>
                </h4>
              </UlTitle>
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
                <h4>Abstract layout:</h4>
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
                  <span>Tables/Images/Graphs</span> - maximum of 1
                  table/Image/Graph can be uploaded in the abstract word
                  template. The maximum file size of each image is 500 KB. The
                  maximum pixel size of the graph/image is 600(w) x 800(h)
                  pixel. You may upload images in JPG, GIF or PNG format.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Use generic names of drugs. The presentation must be balanced
                  and contain no commercial promotional content.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Submissions may not contain patient names, hospital ID numbers
                  or other identifying information.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  Click on the <span>Submit</span> button at the end of the
                  process in order to save your abstract. You may log in to the
                  system later to make changes to your abstract, up to the
                  submission deadline.
                  <span>
                    After the deadline, changes will not be possible.
                  </span>{" "}
                  Drafts, not finally submitted by the deadline will not be
                  accepted.
                </h4>
              </UlTitle>
            </GuideWrapper>
            <GuideWrapper>
              <UlTitle>
                <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
                <h4>
                  <span>
                    Your abstract is not successfully submitted until you
                    receive a confirmation email after clicking the submit
                    button. If you do not receive a confirmation email, please{" "}
                    <Link to="/contact">contact us.</Link>
                  </span>
                </h4>
              </UlTitle>
            </GuideWrapper>
          </Dropdown.Menu>
        </Dropdown>
        <DeclarationWrapper>
        <DeclarationTitle>Abstract Submitters' Declaration</DeclarationTitle>
        <Paragraph>
          During abstract submission you will be asked to confirm that you agree
          to the following:
        </Paragraph>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              I confirm that I previewed this abstract and that all information
              is correct. I accept that the content of this abstract{" "}
              <span>
                cannot be modified or corrected after final submission
              </span>{" "}
              and I am aware that it will be published as submitted.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Submission of the abstract constitutes{" "}
              <span>the consent of all authors</span> to publication (e.g.
              Congress website, programs, other promotions, etc.)
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              The Abstract Submitter warrants and represents that no part of the
              information and content provided by him/her (hereafter: the{" "}
              <span>Content</span>) to the Congress Organizers (hereafter: the
              <span>Organizers</span>), nor the publication of any such Content
              by the Organizers, on the internet or otherwise infringes any
              third party rights, including but not limited to privacy rights
              and/or intellectual property rights.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              The Abstract Submitter grants the Organizers a copyright license
              to reproduce, publish, translate, distribute, and display the text
              of the Content on a royalty-free, perpetual, irrevocable
              nonexclusive basis.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              I herewith confirm that the contact details saved in this system
              are those of the presenting author, who will be notified about the
              status of the abstract. The presenting author is responsible for
              informing the other authors about the status of the abstract. The
              submitting author may request to be copied on abstract
              correspondence.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              I understand that the presenting author must be a registered
              participant.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              The Organizers reserve the right to remove from publication and/or
              presentation an abstract which does not comply with the above.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              I understand that I must select a specific Theme/Topic/Subtopic
              for my abstract allocation. Although the Committee will work hard
              to honor this selection, this cannot be guaranteed. The Committee
              reserves the right to change the Theme, Topic or Subtopic under
              which the abstract was originally submitted.
            </h4>
          </UlTitle>
        </GuideWrapper>
        </DeclarationWrapper>
        <GuidelineForm>
          <label htmlFor="agree">
            <GuideCheckbox
              type="checkbox"
              name="I agree"
              id="agree"
              checked={ruleCheck}
              onChange={handleRule}
            />
            <span></span>I agree
          </label>
          <AbstractButton
            className={!ruleCheck ? "disabled" : ""}
            to="/abstract-upload"
          >
            Submit your Abstract
          </AbstractButton>
        </GuidelineForm>
      </Container>
    </GuidelinesSection>
  );
};

const GuidelinesSection = styled.section`
  padding: 100px 0 50px;
  width: 100%;
  .dropdown {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
    &.show {
      /* border: 2px solid #bd1b21; */
      border-radius: 5px;

      .dropdown-toggle {
        width: 100%;
        height: 76px;
        background-color: #fff;
        border: none;
        color: #39364f;
        border: 2px solid #bd1b21;
        /* border-bottom: none; */
        border-radius: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all 0.3s ease-out;
      }
    }
    .dropdown-toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 76px;
      background-color: #bd1b21;
      border: none;
      color: #fff;
      font-family: "Urbanist", sans-serif;
      font-size: 22.5px;
      font-weight: 700;
      text-transform: capitalize;
      border-radius: 5px;
      padding: 20px 18px;
      transition: all 0.3s ease-out;
      @media only screen and (max-width: 991.98px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 767.98px) {
        white-space: normal;
      }
      @media only screen and (max-width: 424.98px) {
        font-size: 14px;
        white-space: normal;
      }
      &:after {
        display: none;
      }
      &:focus {
        box-shadow: none !important;
      }
    }
    .dropdown-menu {
      transition: all 0.3s ease-out;
      &.show {
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 18px 35px 30px;
        transition: all 0.3s ease-out;
        position: unset !important;
        transform: translate(0, 0) !important;
        p {
          font-family: "Urbanist", sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #717488;
          transition: all 0.3s ease-out;
          line-height: 1.6;
        }
      }
    }
  }
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


const DeclarationWrapper = styled.div`
  padding-top: 100px;
`

const DeclarationTitle = styled.h4`
  color: #39364f;
  font-family: "Urbanist", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #39364f;
  font-weight: 400;
`;

const Strong = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px !important;
  line-height: 1.6 !important;
  color: #000 !important;
  font-weight: 600 !important;
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
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #39364f;
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

const GuidelineForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-family: "Urbanist", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #39364f;
    font-weight: 500;
    span {
      width: 30px;
      height: 30px;
      border: 2px solid #bd1b21;
      transition: all 0.3s ease-out;
      border-radius: 6px;
    }
    input:checked ~ span {
      background-color: #bd1b21;
      border: 2px solid transparent;
      transition: all 0.3s ease-out;
    }
  }
`;
const GuideCheckbox = styled.input`
  visibility: hidden;
`;
const AbstractButton = styled(Link)`
  background-color: #bd1b21;
  font-family: "Urbanist", sans-serif;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  margin: 50px auto 0;
  &.disabled {
    pointer-events: none;
    background-color: #ffd2d3 !important;
  }
  @media only screen and (max-width: 575.98px) {
    width: 100%;
  }
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;

export default Guidelines;
