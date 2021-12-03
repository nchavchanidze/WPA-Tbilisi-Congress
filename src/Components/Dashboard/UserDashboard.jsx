import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import DashboardCard from "./DashboardCard";

const UserDashboard = () => {
  const dashboardCards = [
    {
      id: 1,
      name: "Profile",
      description: "Edit your Profile",
      path: "/profile",
    },
    {
      id: 2,
      name: "Abstracts",
      description: "See your submited Abstracts",
      path: "/abstracts",
    },
    {
      id: 3,
      name: "E-Posters",
      description: "See your submited E-posters",
      path: "/eposter",
    },
  ];

  return (
    <>
      <Title>Dashboard</Title>
      <DashboardWrapper>
        {dashboardCards.map((dashboardCard) => (
          <DashboardCard
            key={dashboardCard.id}
            path={dashboardCard.path}
            name={dashboardCard.name}
            description={dashboardCard.description}
          />
        ))}
      </DashboardWrapper>
    </>
  );
};

const DashboardWrapper = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  margin: 30px auto 50px;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  text-transform: capitalize;
`;
export default UserDashboard;
