import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const KeywordCard = (props) => {
  return (
    <KeywordCardWrapper>
      <Keyword>{props.keyword}</Keyword>
      <DeleteButton onClick={() => props.deleteKeyword(props.id)}>
        <FontAwesomeIcon icon={faTimes} />
      </DeleteButton>
    </KeywordCardWrapper>
  );
};

const KeywordCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 8px 10px;
  background-color: #486ff8;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: #fff;
    border: 2px solid #486ff8;
    p {
      transition: all 0.3s ease-out;
      color: #486ff8;
    }
    button {
      svg {
        transition: all 0.3s ease-out;
        color: #486ff8;
      }
    }
  }
`;

const Keyword = styled.p`
  color: #fff;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.3s ease-out;
`;

const DeleteButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  svg {
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease-out;
  }
`;

export default KeywordCard;
