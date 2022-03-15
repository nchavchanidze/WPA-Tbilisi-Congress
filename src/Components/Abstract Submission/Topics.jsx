import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import TopicList from "./Topics.json";
import Background from "../../Assets/Images/page-cover.png";

const Topics = () => {
  return (
    <>
      <TopicsContainer>
        <Row>
          <Col md={4} sm={12}>
            <TopicsUl>
              {TopicList.slice(0, 13).map((topic) => (
                <TopicItem key={topic.id}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                  {topic.title}
                </TopicItem>
              ))}
            </TopicsUl>
          </Col>
          <Col md={4} sm={12}>
            <TopicsUl className="topic-list">
              {TopicList.slice(14, 27).map((topic) => (
                <TopicItem key={topic.id}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                  {topic.title}
                </TopicItem>
              ))}
            </TopicsUl>
          </Col>
          <Col md={4} sm={12}>
            <TopicsUl className="topic-list">
              {TopicList.slice(27).map((topic) => (
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

const HeadingWrapper = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 269px 0 200px;
  box-shadow: 0 3px 25px 0 rgb(72 111 248 / 9%);
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Title = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-transform: capitalize;
  color: #000;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  @media only screen and (max-width: 1019.98px) {
    text-align: center;
  }
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
  font-family: "Titillium Web", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  svg {
    color: #bd1b21;
  }
`;

const Button = styled(Link)`
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
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
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;
export default Topics;
