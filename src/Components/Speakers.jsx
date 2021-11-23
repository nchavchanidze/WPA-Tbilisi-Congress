import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import SpeakerCard from "./SpeakerCard";

import Speaker01 from "../Assets/Images/Speakers/speaker-1.jpg";
import Speaker02 from "../Assets/Images/Speakers/speaker-2.jpg";
import Speaker03 from "../Assets/Images/Speakers/speaker-3.jpg";
import Speaker04 from "../Assets/Images/Speakers/speaker-4.jpg";
import Speaker05 from "../Assets/Images/Speakers/speaker-5.jpg";
import Speaker06 from "../Assets/Images/Speakers/speaker-6.jpg";
import Speaker07 from "../Assets/Images/Speakers/speaker-7.jpg";
import Speaker08 from "../Assets/Images/Speakers/speaker-8.jpeg";

import Background from "../Assets/Images/Home/SummitReasons/background.png";

const Speakers = () => {
  const SpeakersList = [
    {
      id: 1,
      position: "Web Technologist",
      name: "Cody Fisher",
      image: Speaker01,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 2,
      position: "Co-founder",
      name: "Ralph Edwards",
      image: Speaker02,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 3,
      position: "Chairman",
      name: "Brooklyn Simmons",
      image: Speaker03,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 4,
      position: "Software Development Team Lead",
      name: "Darrell Steward",
      image: Speaker04,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 5,
      position: "Web Technologist",
      name: "Floyd Miles",
      image: Speaker05,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 6,
      position: "Lead Designer",
      name: "Kathryn Murphy",
      image: Speaker06,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 7,
      position: "Chief Research Officer ",
      name: "Darlene Robertson",
      image: Speaker07,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 8,
      position: "UI/UX Designer",
      name: "Cameron Williamson",
      image: Speaker08,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
  ];
  return (
    <SpeakerWrapper>
      <Title data-aos="fade-up" data-aos-duration="800">
        Our Speakers
      </Title>
      <SpeakersContainer data-aos="fade-up" data-aos-duration="800">
        {SpeakersList.map((speaker) => {
          return (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              position={speaker.position}
              image={speaker.image}
              facebook={speaker.socials.facebook}
              twitter={speaker.socials.twitter}
              linkedIn={speaker.socials.linkedIn}
            />
          );
        })}
      </SpeakersContainer>
    </SpeakerWrapper>
  );
};

const SpeakerWrapper = styled.section`
  padding: 100px 0;
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  margin: 0 auto 50px;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
`;

const SpeakersContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
`;

export default Speakers;
