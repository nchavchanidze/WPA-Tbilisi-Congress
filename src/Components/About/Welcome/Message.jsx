import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Message = () => {
  return (
    <StyledContainer>
      <Paragraph>
        It is a matter of great honour for me to share with you the details
        about WPA’s 2022 Thematic Congress on{" "}
        <span>
          &quot;Treatment and Management of Mental Disorders in a Post-Pandemic
          Era&quot;
        </span>{" "}
        being held in Tbilisi, Georgia during October 14-16,2022.
      </Paragraph>
      <Paragraph>
        I am pleased that Georgian Psychiatric Association, a highly prestigious
        professional organisation working in different areas of mental health in
        Georgia is organising this congress. WPA’s support to this congress will
        indeed add a lot of value to the success of this meeting.
      </Paragraph>
      <Paragraph>
        This Congress is focusing on important topics and the topics covered in
        the congress will be highly relevant to current practice of mental
        health in Georgia as well as in the region. I am pleased that the
        meeting also plans to include many other important topics of interest
        covering entire field of mental health with a strong focus on the issues
        of practice of psychiatry looking at diversity, inclusion and setting
        priorities for our future work.
      </Paragraph>
      <Paragraph>
        The presence of several eminent speakers from all over the globe along
        with a number of academic and clinical psychiatrists from Georgia &amp;
        the region highlights the importance of this academic activity. I am
        glad that this conference is also looking at strengthening
        collaborations among different mental health professionals. This will
        indeed prove beneficial in improving our future links with these groups.
      </Paragraph>
      <Paragraph>
        I wish the organisers and the participants of this conference a big
        susses and I am sure the delegates attending this meeting will have a
        happy stay in one of the most beautiful cities of the Europe.
      </Paragraph>
      <Paragraph>
        <span>Welcome to Georgia!</span> <br /> Welcome to the world of professionals and thanks for
        joining us and exchanging experiences and presenting the best practices
        of national and international strategies in the scientific programme of
        the congress!
      </Paragraph>
      <Paragraph>
        I wish the organisers and the participants of this conference a big
        susses and I am sure the delegates attending this meeting will have a
        happy stay in Tbilisi!
      </Paragraph>
    </StyledContainer>
  );
};
const StyledContainer = styled(Container)`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  span {
    font-weight: 700;
  }
`;

const Paragraph = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #717488;
`;

export default Message;
