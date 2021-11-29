import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SpeakerCard = (props) => {
  return (
    <SpeakerCardWrapper>
      <SpeakerImage>
        <img src={props.image} alt={props.name} />
      </SpeakerImage>
      <SpeakerPosition>{props.position}</SpeakerPosition>
      <SpeakerName>{props.name}</SpeakerName>
      <SocialsWrapper>
        <a href={props.facebook} target="_blank" rel="noreferrer">
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
        </a>
        <a href={props.twitter} target="_blank" rel="noreferrer">
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </a>
        <a href={props.linkedIn} target="_blank" rel="noreferrer">
          <li>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </li>
        </a>
      </SocialsWrapper>
    </SpeakerCardWrapper>
  );
};

const SpeakerCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const SpeakerImage = styled.div`
  max-width: 155px;
  max-height: 155px;
  width: 100%;
  height: 100%;
  background-color: #c4c4c4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const SpeakerPosition = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #486ff8;
`;

const SpeakerName = styled.h3`
  font-family: "Urbanist", sans-serif;
  font-size: 22.5px;
  font-weight: 700;
  color: #39364f;
`;

const SocialsWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  a {
    font-size: 20px;
    color: #fff;
    transition: all 0.3s ease-out;
    &:hover {
      color: #486ff8;
      transition: all 0.3s ease-out;
      li {
        background-color: transparent;
        transition: all 0.3s ease-out;
        border: 1px solid #486ff8;
      }
    }
  }
  li {
    background-color: #486ff8;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s ease-out;
    border: 1px solid transparent;
    &:hover {
      background-color: transparent;
      transition: all 0.3s ease-out;
      border: 1px solid #486ff8;
      i {
        color: #486ff8;
        transition: all 0.3s ease-out;
      }

      i {
        font-size: 20px;
        color: #fff;
      }
    }
  }
`;

export default SpeakerCard;
