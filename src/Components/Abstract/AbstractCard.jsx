import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";

const AbstractCard = (props) => {
  return (
    <Card>
      <Title>
        <span>{props.id}.</span> {props.title}
      </Title>
      {props.pending === true ? (
        <IconsWrapper>
          <FontAwesomeIcon icon={faEdit} />
          <FontAwesomeIcon icon={faTimes} />
        </IconsWrapper>
      ) : (
        <></>
      )}
    </Card>
  );
};

const Card = styled.div`
  padding: 25px;
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h4`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #39364f;
  span {
  font-weight: 700;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export default AbstractCard;
