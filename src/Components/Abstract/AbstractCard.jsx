import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AbstractCard = (props) => {
  return (
    <Card>
      <Title>
         {props.title}
      </Title>
        <IconsWrapper>
          <Link to={`/abstracts/${props.id}`}>
          <FontAwesomeIcon icon={faEdit} />
          </Link>
          <DeleteButton onClick={() => props.deleteAbstract(props.id)}>
            <FontAwesomeIcon icon={faTimes} />
          </DeleteButton>
        </IconsWrapper>
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
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const DeleteButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  svg {
    font-size: 16px;
    color: #39364f;
    transition: all 0.3s ease-out;
    &:hover {
      transition: all 0.3s ease-out;
      color: #486ff8;
    }
  }
`;

export default AbstractCard;
