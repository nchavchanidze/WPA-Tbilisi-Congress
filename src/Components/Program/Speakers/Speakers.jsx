import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import SpeakerCard from "./SpeakerCard";

import Speaker01 from "../../../Assets/Images/Speakers/speaker-1.jpg";
import Speaker02 from "../../../Assets/Images/Speakers/speaker-2.jpg";
import Speaker03 from "../../../Assets/Images/Speakers/speaker-3.jpg";
import Speaker04 from "../../../Assets/Images/Speakers/speaker-4.jpg";
import Speaker05 from "../../../Assets/Images/Speakers/speaker-5.jpg";
import Speaker06 from "../../../Assets/Images/Speakers/speaker-6.jpg";
import Speaker07 from "../../../Assets/Images/Speakers/speaker-7.jpg";
import Speaker08 from "../../../Assets/Images/Speakers/speaker-8.jpeg";

import Background from "../../../Assets/Images/Home/SummitReasons/background.png";

const Speakers = () => {
  const SpeakersList = [
    {
      id: 1,
      position: "WPA President, Congress President (UK & Pakistan)",
      name: "Afzal Javed",
      image: Speaker01,
      description:
        "Professor Afzal Javed was appointed President-Elect at the 2017 World Congress of Psychiatry in Berlin.  In 2020, he assumed the role of President and launched the 2020-2023 Action Plan. As President, Professor Afzal leads the work of the Executive Committee, ensuring the group remains focused on fulfilling the vision of WPA and on reaching its goals as outlined in its charter and in the current Action Plan. In addition to his roles as a Consultant Psychiatrist at the UK NHS, Honorary Clinical Associate Teacher at Warwick Medical School, University of Warwick UK and honorary Chairman of the Pakistan Psychiatric Research Centre, Fountain House, Lahore, Pakistan, Professor Afzal Javed also fulfils his role as WPA President by liaising with member societies across the globe, supporting their local endeavors and sharing knowledge and information between them.",
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 2,
      position:
        "WPA President Elect, Head and Founder of National Centre for Suicide Research and Prevention of Mental lll-Health (NASP) (Sweden)",
      name: "Danuta Wasserman",
      image: Speaker02,
      description:
        "Prof.Dr.Danuta Wasserman M.D., Ph.D. is Professor of Psychiatry and Suicidology; Head and Founder of National Centre for Suicide Research and Prevention of Mental lll-Health (NASP); Director for WHO Collaborating Centre for Research, Methods Development and Training in Suicide Prevention; President for European Psychiatric Association (EPA) 2013-2014. Member of the EPA Board 2013-2021; President-elect for World Psychiatric Association (WPA) 2020-2023.",
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 3,
      position: "Professor of Community Psychiatry Center for Global Mental Health & Centre for Implementation Science Institute of Psychiatry, Psychology and Neuroscience King’s College London (UK)",
      name: "Sir Graham Thornicroft",
      image: Speaker03,
      description:
        "Sir Graham Thornicroft also works as a Consultant Psychiatrist at South London & Maudsley NHS Foundation Trust in a local community mental health team in Lambeth. He is a Fellow of the Academy of Medical Sciences, is a National Institute of Health Research Senior Investigator Emeritus and is a Fellow of the Royal Society of Arts, King’s College London and the Royal College of Psychiatrists. He is the Director of the World Health Organization Collaborating Centre for research and teaching at the Institute of Psychiatry, Psychology and Neuroscience. Thornicroft has made significant contributions to the development of mental health policy in England, including Chairing the External Reference Group for the National Service Framework for Mental Health, the national mental health plan for England for 1999-2009. He is also active in global mental health. He co-chaired the WHO Guideline Development Group for the Mental Health Gap Action Programme (mhGAP) Intervention Guide (1st and 2nd editions), which is now used in over 100 countries worldwide. He also chaired the External Reference Group for the WHO guidelines on the Management of Physical Health Conditions in adults with severe mental disorders (2018). His areas of research expertise include: stigma and discrimination, evaluations of mental health treatments, services and systems, implementation science, and global mental health. Graham has authored or edited 30 books and over 540 peer-reviewed papers in Pubmed. Graham received a Knighthood in the Queen’s Birthday Honours Awards in 2017.",
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 4,
      position: "President of the Association for the Improvement of Mental Health Programmes (Switzerland)",
      name: "Norman Sartorius",
      image: Speaker04,
      description:
        "Professor Norman Sartorius, MD, MA, DPM, PhD, FRCPsych, obtained his MD in Zagreb (Croatia). He specialized in neurology and psychiatry and subsequently obtained a Master’s Degree and a Doctorate in psychology (Ph.D). He carried out clinical work and research and taught at graduate and postgraduate levels at the University of Zagreb, at the Institute of Psychiatry in London, at the University of Geneva and elsewhere. Professor Sartorius joined the World Health Organization (WHO) in 1967 and soon assumed charge of the programme of epidemiology and social psychiatry. In 1977, Professor Sartorius was appointed Director of the Division of Mental Health of WHO. He was the principal investigator of several major international studies on schizophrenia, depression and of mental and neurological disorders. In 1993 Professor Sartorius was elected President of the World Psychiatric Association (WPA) and served as President-elect and then President until August 1999, after which he was elected President of the European Psychiatric Association. Professor Sartorius is currently the President of the Association for the Improvement of Mental Health Programmes and he is a member of the Geneva Prize Foundation, having been its President from 2004 to 2008. Professor Sartorius holds professorial appointments at universities in different countries including China, UK, and USA. Professor Sartorius has published more than 400 articles in scientific journals, authored or co-authored twelve books and edited more than 80 others. He is the co-editor of three scientific journals and is a member of editorial and advisory boards of many scientific journals. Professor Sartorius is also a corresponding member and fellow of a large number of international organizations and advisory boards. He has several honorary doctorates and is a member of Academies of Science and of Medicine in different countries. He speaks Croatian, English, French, German, Russian and Spanish.",
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
        Keynote Speakers
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
              description={speaker.description}
            />
          );
        })}
      </SpeakersContainer>
    </SpeakerWrapper>
  );
};

const SpeakerWrapper = styled.section`
  padding: 100px 0;
  /* background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; */
`;

const Title = styled.h1`
  margin: 0 auto 100px;
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #000;
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
