import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        window.scrollTo(0, 0)
    }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  return (
    <>
      {scroll > 140 ? (
        <ScrollBtn onClick={handleScroll}>
          <FontAwesomeIcon icon={faChevronUp} />
        </ScrollBtn>
      ) : (
        <></>
      )}
    </>
  );
};

const ScrollBtn = styled.button`
  min-height: 70px;
  min-width: 70px;
  background-color: #486ff8;
  border-radius: 50%;
  border: none;
  position: fixed;
  right: 2%;
  bottom: 4%;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #f0f4ff;
    transition: all 0.3s ease-out;
    svg {
      transition: all 0.3s ease-out;
      color: #486ff8;
    }
  }
  svg {
    transition: all 0.3s ease-out;
    font-size: 24px;
    color: #fff;
  }
`;

export default ScrollButton;
