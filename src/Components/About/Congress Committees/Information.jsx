import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Logo00 from "../../../Assets/Images/Home/Banner/logo-0.png";
import Logo01 from "../../../Assets/Images/Home/Banner/logo-1.png";
import Logo03 from "../../../Assets/Images/Home/Banner/logo-2.png";
import Logo02 from "../../../Assets/Images/Home/Banner/logo-3.png";

const Information = () => {
  return (
    <StyledContainer>
      <OrganizationContainer>
        <OrganizationWrapper>
          <Paragraph className="organization-p">Organized by</Paragraph>
          <Organization>
            <Paragraph>
              <span>World Psychiatric Association</span>
            </Paragraph>
            <OrganizationLogo>
              <a
                href="https://www.wpanet.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Logo00} alt="Society of Georgian Psychiatrists" />
              </a>
            </OrganizationLogo>
          </Organization>
        </OrganizationWrapper>
        <OrganizationWrapper>
          <Paragraph className="organization-p">Hosted by</Paragraph>
          <Organization>
            <Paragraph>
              <span>Society of Georgian Psychiatrists</span>
            </Paragraph>
            <OrganizationLogo>
              <a
                href="https://www.facebook.com/Society-of-Georgian-Psychiatrists-%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-%E1%83%A4%E1%83%A1%E1%83%98%E1%83%A5%E1%83%98%E1%83%90%E1%83%A2%E1%83%A0%E1%83%97%E1%83%90-%E1%83%A1%E1%83%90%E1%83%96%E1%83%9D%E1%83%92%E1%83%90%E1%83%93%E1%83%9D%E1%83%94%E1%83%91%E1%83%90-230622757138327"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Logo01} alt="Society of Georgian Psychiatrists" />
              </a>
            </OrganizationLogo>
          </Organization>
        </OrganizationWrapper>
        <OrganizationWrapper>
          <Paragraph className="organization-p">Supported by</Paragraph>
          <DoubleOrganization>
            <Organization>
              <Paragraph>
                <span>Alliance for Better Mental Health</span>
              </Paragraph>
              <OrganizationLogo>
                <a
                  href="https://www.facebook.com/%E1%83%90%E1%83%9A%E1%83%98%E1%83%90%E1%83%9C%E1%83%A1%E1%83%98-%E1%83%A3%E1%83%99%E1%83%94%E1%83%97%E1%83%94%E1%83%A1%E1%83%98-%E1%83%A4%E1%83%A1%E1%83%98%E1%83%A5%E1%83%98%E1%83%99%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%AF%E1%83%90%E1%83%9C%E1%83%9B%E1%83%A0%E1%83%97%E1%83%94%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1%E1%83%97%E1%83%95%E1%83%98%E1%83%A1Alliance-for-Better-Mental-Health-1286629694799058"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Logo03} alt="Alliance for Better Mental Health" />
                </a>
              </OrganizationLogo>
            </Organization>
            <Organization>
              <Paragraph>
                <span>Global Initiative on Psychiatry -Tbilisi</span>
              </Paragraph>
              <OrganizationLogo>
                <a
                  href="https://www.gip-global.org/organization/fgip-member-organizations/global-initiative-on-psychiatry-tbilisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Logo02} alt="Global Initiative on Psychiatry" />
                </a>
              </OrganizationLogo>
            </Organization>
          </DoubleOrganization>
        </OrganizationWrapper>
      </OrganizationContainer>
      <ParagraphWrapper>
        <ParagraphTitle>President of the Congress</ParagraphTitle>
        <Paragraph>
          <span>Afzal Javed</span> (UK &amp; Pakistan)
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Co-President οf the Congress</ParagraphTitle>
        <Paragraph>
          <span>Eka Chkonia</span> (Georgia)
        </Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Organizing Committee</ParagraphTitle>
        <ParagraphFlexbox>
          <Paragraph className="committee-title">Chairs:</Paragraph>
          <ParagraphWrapper className="committees">
            <Paragraph>
              <span>Edmond Pi</span> (USA)
            </Paragraph>
            <Paragraph>
              <span>Nino Okribelashvili</span> (Georgia)
            </Paragraph>
          </ParagraphWrapper>
        </ParagraphFlexbox>
        <ParagraphFlexbox>
          <Paragraph className="committee-title">Members:</Paragraph>
          <ParagraphWrapper className="committees">
            <Paragraph>
              <span>Danuta Wasserman</span> (Sweden)
            </Paragraph>
            <Paragraph>
              <span>Graham Thornicroft</span> (United Kingdom)
            </Paragraph>
            <Paragraph>
              <span>Norman Sartorius</span> (Switzerland)
            </Paragraph>
            <Paragraph>
              <span>Norbert Skokauskas</span> (Norway)
            </Paragraph>
            <Paragraph>
              <span>Geert Dom</span> (Belgium)
            </Paragraph>
            <Paragraph>
              <span>Peter Falkai</span> (Germany)
            </Paragraph>
            <Paragraph>
              <span>Manana Eliashvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>David Zurabashvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Bidzina Mgaloblishvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Khatuna Todadze</span> (Georgia)
            </Paragraph>
          </ParagraphWrapper>
        </ParagraphFlexbox>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Scientific Committee</ParagraphTitle>
        <ParagraphFlexbox>
          <Paragraph className="committee-title">Chairs:</Paragraph>
          <ParagraphWrapper className="committees">
            <Paragraph>
              <span>Nino Makhashvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Armen Soghoyan</span> (Armenia)
            </Paragraph>
          </ParagraphWrapper>
        </ParagraphFlexbox>
        <ParagraphFlexbox>
          <Paragraph className="committee-title">Members:</Paragraph>
          <ParagraphWrapper className="committees">
            <Paragraph>
              <span>Giorgi Geleishvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Nino Naneishvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Nana Zavradashvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Tamar Aladashvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Ketevan Abdushelishvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Irina Pinchuk</span> (Ukraine)
            </Paragraph>
          </ParagraphWrapper>
        </ParagraphFlexbox>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Advisory Committee</ParagraphTitle>
        <ParagraphFlexbox>
          <Paragraph className="committee-title">Members:</Paragraph>
          <ParagraphWrapper className="committees">
            <Paragraph>
              <span>Virginia Rosabal</span> (Costa Rica)
            </Paragraph>
            <Paragraph>
              <span>Tarek Okasha</span> (Egypt)
            </Paragraph>
            <Paragraph>
              <span>Nor Zuraida Zainal</span> (Malaysia)
            </Paragraph>
            <Paragraph>
              <span>Adrian James</span> (United Kingdom)
            </Paragraph>
            <Paragraph>
              <span>Igor Filipcic</span> (Croatia)
            </Paragraph>
            <Paragraph>
              <span>Oleg Alekseevich Skugarevsky</span> (Belarus)
            </Paragraph>
            <Paragraph>
              <span>Robert Van Voren</span> (The Netherlands, Lithuania)
            </Paragraph>
            <Paragraph>
              <span>Simon Surguladze</span> (United Kingdom)
            </Paragraph>
            <Paragraph>
              <span>Manana Gegeshidze</span> (USA)
            </Paragraph>
          </ParagraphWrapper>
        </ParagraphFlexbox>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphTitle>Local Organising Committee</ParagraphTitle>
        <ParagraphFlexbox>
          <Paragraph className="committee-title">Members:</Paragraph>
          <ParagraphWrapper className="committees">
            <Paragraph>
              <span>Temur Silagadze</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Manana Bokuchava</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Vazha Kenchadze</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Giorgi Naneishvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Manana Sharashidze</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Nino Agdgomelashvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Marina Kuratashvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Marina Gegelashvili</span> (Georgia)
            </Paragraph>
            <Paragraph>
              <span>Archil Begiashvili</span> (Georgia)
            </Paragraph>
          </ParagraphWrapper>
        </ParagraphFlexbox>
      </ParagraphWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding: 100px 0;
`;

const OrganizationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 100px;
  flex-wrap: wrap;
`;

const OrganizationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
`;
const DoubleOrganization = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  flex-wrap: wrap;
`;

const Organization = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const OrganizationLogo = styled.div`
  height: 70px;
  img {
    height: 100%;
  }
`;

const ParagraphWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  &.committees {
    padding: 0;
  }
`;
const ParagraphTitle = styled.h3`
  color: #000;
  font-family: "Titillium Web", sans-serif;
  font-size: 22.5px;
  font-weight: 700;
  text-transform: capitalize;
`;

const ParagraphFlexbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  line-height: 1.6;
  span {
    font-weight: 700;
  }
  &.committee-title {
    width: 80px;
  }
  &.organization-p {
    height: 30px;
  }
`;

export default Information;
