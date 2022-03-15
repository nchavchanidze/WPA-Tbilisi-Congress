import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import AuthService from "../../services/auth.service";

const UpdateProfile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
      <DashboardWrapper>
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
      </DashboardWrapper>
    </>
  );
};

const DashboardWrapper = styled(Container)`
  padding: 100px 0;
`;

export default UpdateProfile;
