import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AuthorCard = (props) => {
  return (
    <AuthorCardWrapper>
      <Author>{props.author}</Author>
      <DeleteButton onClick={() => props.remove(props.id)}>
        <FontAwesomeIcon icon={faTimes} />
      </DeleteButton>
    </AuthorCardWrapper>
  );
};

const AuthorCardWrapper = styled.div`
  padding: 10px;
  background-color: #f0f4ff;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Author = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #39364f;
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

export default AuthorCard;
