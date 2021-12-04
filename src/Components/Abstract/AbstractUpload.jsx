import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import AbstractCard from "./AbstractCard";

const AbstractUpload = () => {
  const [abstracts, setAbstracts] = useState([
    {
      id: 1,
      title: "Network with fellow senior data leaders",
      pending: true,
    },
    {
      id: 2,
      title: "Network with fellow senior data leaders",
      pending: true,
    },
    {
      id: 3,
      title: "Network with fellow senior data leaders",
      pending: true,
    },
    {
      id: 4,
      title: "Network with fellow senior data leaders",
      pending: true,
    },
    {
      id: 5,
      title: "Network with fellow senior data leaders",
      pending: true,
    },
  ]);

  const deleteAbstract = (id, abstracts, setAbstracts) => {
    setAbstracts(abstracts.filter((abstract) => abstract.id !== id));
    console.log(abstracts);
  };

  return (
    <>
      {/* <Title>Abstracts</Title> */}
      <AbstractContainer>
        <AbstractsWrapper>
          <AbstractCategoryTitle>
            In Progress ({abstracts.length})
          </AbstractCategoryTitle>
          <Abstracts>
            {abstracts.map((abstract) => {
              return (
                <AbstractCard
                  key={abstract.id}
                  id={abstract.id}
                  title={abstract.title}
                  pending={abstract.pending}
                  deleteAbstract={(id) =>
                    deleteAbstract(id, abstracts, setAbstracts)
                  }
                />
              );
            })}
          </Abstracts>
        </AbstractsWrapper>
        <AbstractsWrapper>
          <AbstractCategoryTitle>
            Sent ({abstracts.length})
          </AbstractCategoryTitle>
          <Abstracts>
            {abstracts.map((abstract) => {
              return (
                <AbstractCard
                  key={abstract.id}
                  id={abstract.id}
                  title={abstract.title}
                  pending={abstract.pending}
                  deleteAbstract={(id) =>
                    deleteAbstract(id, abstracts, setAbstracts)
                  }
                />
              );
            })}
          </Abstracts>
        </AbstractsWrapper>
        {/* <AbstractsWrapper>
          <AbstractCategoryTitle>
            Uploaded ({abstractsUploaded.length})
          </AbstractCategoryTitle>
          <Abstracts>
            {abstractsUploaded.map((abstract) => {
              return (
                <AbstractCard
                  key={abstract.id}
                  id={abstract.id}
                  title={abstract.title}
                  pending={abstract.pending}
                />
              );
            })}
          </Abstracts>
        </AbstractsWrapper> */}
      </AbstractContainer>
      <Outlet />
    </>
  );
};

const Title = styled.h1`
  margin: 30px auto 50px;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  text-transform: capitalize;
`;

const AbstractContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  margin-top: 100px;
  margin-bottom: 100px;
  flex-wrap: wrap;
`;

const AbstractsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 25px;
  flex-direction: column;
`;

const Abstracts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 25px;
  flex-direction: column;
`;

const AbstractCategoryTitle = styled.h3`
  font-family: "Urbanist", sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #39364f;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;

export default AbstractUpload;
