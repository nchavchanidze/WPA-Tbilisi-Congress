import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Deadlines = () => {
  return (
    <TableWrapper>
      <Title>Dates &amp; Deadlines</Title>
      <Table>
        {/* <tr>
          <th>DATES</th>
          <th className="regular">DEADLINES</th>
        </tr> */}
        <tr>
          <td className="category">Online Registration Open</td>
          <td className="regular">31 May 2022</td>
        </tr>
        <tr>
          <td className="category">Symposium Proposal Submission Open</td>
          <td className="regular">15 March 2022</td>
        </tr>
        <tr>
          <td className="category">Proposal Submission Deadline</td>
          <td className="regular">15 June 2022</td>
        </tr>
        <tr>
          <td className="category">Notification of Proposal Acceptance</td>
          <td className="regular">15 July 2022</td>
        </tr>
        <tr>
          <td className="category">Abstract Submission Open</td>
          <td className="regular">01 April 2022</td>
        </tr>
        <tr>
          <td className="category">Abstract Submission Deadline</td>
          <td className="regular">01 July 2022</td>
        </tr>
        <tr>
          <td className="category">Notification of Abstract Acceptance</td>
          <td className="regular">01 August 2022</td>
        </tr>
        <tr>
          <td className="category">Early Registration Deadline</td>
          <td className="regular">01 August 2022</td>
        </tr>
        <tr>
          <td className="category">Congress dates</td>
          <td className="regular">14-16 October 2022</td>
        </tr>
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
`;

const Title = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 100px;
`;

const Table = styled.table`
  max-width: 920px;
  width: 100%;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  th {
    /* border: 1px solid rgba(57, 54, 79, .3); */
    border-bottom: none;
    padding: 30px 20px;
    background-color: #e1e1e1;
    font-weight: 700;
    &.early {
      background-color: #bd1b21;
      color: #fff;
      font-weight: 700;
    }
    &.regular {
      background-color: #7190c1;
      color: #fff;
      font-weight: 700;
    }
  }
  tr {
    text-align: center;
    border: 1px solid #fff;
    td {
      border: 1px solid #fff;
      padding: 15px 20px;
      width: 50%;
      &.category {
        text-align: left !important;
        background-color: #f1f1f1;
      }
      &.early {
        background-color: #ffd2d3;
        color: #000;
        font-weight: 600;
      }
      &.regular {
        background-color: #eaeef5;
        color: #000;
        font-weight: 600;
        text-align: left !important;
      }
    }
  }
`;

export default Deadlines;
