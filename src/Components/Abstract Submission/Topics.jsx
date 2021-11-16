import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const Topics = () => {
  const TopicList = [
    {
      id: 0,
      name: "Anxiety Disorders and Somatoform Disorders",
    },
    {
      id: 1,
      name: "Bipolar Disorders",
    },
    {
      id: 2,
      name: "Child and Adolescent Psychiatry",
    },
    {
      id: 3,
      name: "Classification of Mental Disorders",
    },
    {
      id: 4,
      name: "Comorbidity/Dual Pathologies",
    },
    {
      id: 5,
      name: "Consultation Liaison Psychiatry and Psychosomatics",
    },
    {
      id: 6,
      name: "COVID-19 and related topics",
    },
    {
      id: 7,
      name: "Cultural Psychiatry",
    },
    {
      id: 8,
      name: "Depressive Disorders",
    },
    {
      id: 9,
      name: "E-mental Health",
    },
    {
      id: 10,
      name: "Eating Disorders",
    },
    {
      id: 11,
      name: "Emergency Psychiatry",
    },
    {
      id: 12,
      name: "Epidemiology and Social Psychiatry",
    },
    {
      id: 13,
      name: "Ethics and Psychiatry",
    },
    {
      id: 14,
      name: "Forensic Psychiatry",
    },
    {
      id: 15,
      name: "Genetics and Molecular Neurobiology",
    },
    {
      id: 16,
      name: "Guidelines/Guidance",
    },
    {
      id: 17,
      name: "Intellectual Disability",
    },
    {
      id: 18,
      name: "Mental Health Care",
    },
    {
      id: 19,
      name: "Mental Health Policies",
    },
    {
      id: 20,
      name: "Migration and Mental health of Immigrants",
    },
  ];

  return (
    <>
      <Title>Abstract Topics</Title>
      <TopicsContainer>
        <Row>
          <Col md={4} sm={12}>
            <TopicsUl>
              {TopicList.slice(0, 8).map((topic) => (
                <TopicItem key={topic.id}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                  {topic.name}
                </TopicItem>
              ))}
            </TopicsUl>
          </Col>
          <Col md={4} sm={12}>
            <TopicsUl className="topic-list">
              {TopicList.slice(9, 17).map((topic) => (
                <TopicItem key={topic.id}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                  {topic.name}
                </TopicItem>
              ))}
            </TopicsUl>
          </Col>
          <Col md={4} sm={12}>
            <TopicsUl className="topic-list">
              {TopicList.slice(18).map((topic) => (
                <TopicItem key={topic.id}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                  {topic.name}
                </TopicItem>
              ))}
            </TopicsUl>
          </Col>
        </Row>
      </TopicsContainer>
    </>
  );
};

const Title = styled.h1`
  margin: 30px auto 50px;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  text-transform: capitalize;
`;

const TopicsContainer = styled(Container)`
  padding: 50px 0 100px;
`;

const TopicsUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 45px;
  height: 100%;
  &.topic-list {
    @media only screen and (max-width: 767.98px) {
      margin-top: 45px;
    }
  }
`;

const TopicItem = styled.li`
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #39364f;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
`;

export default Topics;
