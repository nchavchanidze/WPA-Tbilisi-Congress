import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import TopicList from "./Topics.json";

const Topics = () => {
  return (
    <>
      <Title>Abstract Topics</Title>
      <TopicsContainer>
        <Row>
          <Col md={4} sm={12}>
            <TopicsUl>
              {TopicList.slice(0, 11).map((topic) => (
                <TopicItem key={topic.id}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                  {topic.title}
                </TopicItem>
              ))}
            </TopicsUl>
          </Col>
          <Col md={4} sm={12}>
            <TopicsUl className="topic-list">
              {TopicList.slice(12, 23).map((topic) => (
                <TopicItem key={topic.id}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                  {topic.title}
                </TopicItem>
              ))}
            </TopicsUl>
          </Col>
          <Col md={4} sm={12}>
            <TopicsUl className="topic-list">
              {TopicList.slice(23).map((topic) => (
                <TopicItem key={topic.id}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                  {topic.title}
                </TopicItem>
              ))}
            </TopicsUl>
          </Col>
        </Row>
        <Button to="/abstract-submission">Submit your Abstract</Button>
      </TopicsContainer>
    </>
  );
};

const Title = styled.h1`
  margin: 150px auto 50px;
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

const Button = styled(Link)`
  background-color: #486ff8;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 250px;
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  @media only screen and (max-width: 575.98px) {
    width: 100%;
  }
  &:hover {
    border: 2px solid #486ff8;
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;
export default Topics;
