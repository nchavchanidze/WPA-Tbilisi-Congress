import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AuthorCard = (props) => {
  const [authorChecked, setAuthorChecked] = useState(false);
  const [presenterChecked, setPresenterChecked] = useState(false);
  return (
    <AuthorCardWrapper>
      <Author>{props.author}</Author>
      <CheckboxWrapper>
        <label>
          <span>Author</span>
          <input
            type="checkbox"
            checked={authorChecked}
            onChange={() => setAuthorChecked(!authorChecked)}
          />
        </label>
        <label>
          <span>Presenter</span>
          <input
            type="checkbox"
            checked={presenterChecked}
            onChange={() => setPresenterChecked(!presenterChecked)}
          />
        </label>
      </CheckboxWrapper>
      <DeleteButton onClick={() => props.deleteAuthor(props.id)}>
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
  max-width: 250px;
  width: 100%;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  @media only screen and (max-width: 991.98px) {
    flex-wrap: wrap;
  }
  label {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #39364f;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    .required {
      color: #486ff8;
    }
  }
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
