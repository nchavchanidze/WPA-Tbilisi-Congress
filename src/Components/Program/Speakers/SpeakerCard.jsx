import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SpeakerCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SpeakerCardWrapper onClick={openModal}>
        <SpeakerImage>
          <img src={props.image} alt={props.name} />
        </SpeakerImage>
        <SpeakerName>{props.name}</SpeakerName>
        <SpeakerPosition>{props.position}</SpeakerPosition>
      </SpeakerCardWrapper>
      <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalSpeakerWrapper>
          <SpeakerImage>
            <img src={props.image} alt={props.name} />
          </SpeakerImage>
          <SpeakerName>{props.name}</SpeakerName>
          <SpeakerPosition>{props.position}</SpeakerPosition>
        </ModalSpeakerWrapper>
        <ModalSpeakerDescription>{props.description}</ModalSpeakerDescription>
        <ModalCloseButton onClick={closeModal}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </ModalCloseButton>
      </StyledModal>
    </>
  );
};

const SpeakerCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const SpeakerImage = styled.div`
  max-width: 160px;
  max-height: 160px;
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
  font-family: "Titillium Web", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  text-align: center;
  line-height: 1.6;
`;

const SpeakerName = styled.h3`
  font-family: "Titillium Web", sans-serif;
  font-size: 22.5px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

const StyledModal = styled(Modal)`
  max-width: 880px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 25px 0 rgb(0 0 0 / 9%);
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 920px) {
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`;
const ModalCloseButton = styled.button`
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transition-delay: 0.6s;
  -o-transition-delay: 0.6s;
  transition-delay: 0.6s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  background: none;
  width: 36px;
  padding: 0;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  .line {
    width: 30px;
    height: 2px;
    background-color: #000;
    display: block;
    /* margin: 6px auto; */
    margin-top: 6px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:nth-child(2) {
      width: 0px;
    }
    &:nth-child(1) {
      -webkit-transition-delay: 0.3s;
      -o-transition-delay: 0.3s;
      transition-delay: 0.3s;
      -webkit-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
      transform: translateY(5px);
    }
    &:nth-child(3) {
      -webkit-transition-delay: 0.3s;
      -o-transition-delay: 0.3s;
      transition-delay: 0.3s;
      -webkit-transform: translateY(-11px) rotate(90deg);
      -ms-transform: translateY(-11px) rotate(90deg);
      -o-transform: translateY(-11px) rotate(90deg);
      transform: translateY(-11px) rotate(90deg);
    }
  }
`;

const ModalSpeakerWrapper = styled.div`
  /* width: 300px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  /* margin-top: 50px; */
  min-width: 180px;
`;
const ModalSpeakerDescription = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  line-height: 1.6;
  /* margin-top: 50px; */
  max-height: 246px;
  height: 100%;
  overflow-y: scroll;
  padding-right: 20px;
  @media only screen and (max-width: 920px) {
    margin-top: 0;
  }
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
