import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Pricing = () => {
  return (
    <TableWrapper>
      <Table>
        <tr>
          <th>REGISTRATION CATEGORIES</th>
          <th className="early">
            Early Rate <br /> UNTIL 01 AUGUST 2022
          </th>
          <th className="regular">
            Regular Rate <br /> FROM 02 AUGUST 2022 &amp; ONSITE
          </th>
        </tr>
        <tr>
          <td className="category">Participants form High Income Country*</td>
          <td className="early">250 €</td>
          <td className="regular">300 €</td>
        </tr>
        <tr>
          <td className="category">articipants from Upper Middle-Income Country*</td>
          <td className="early">200 €</td>
          <td className="regular">250 €</td>
        </tr>
        <tr>
          <td className="category">Participants from Low & Lower-income Country*</td>
          <td className="early">150 €</td>
          <td className="regular">200 €</td>
        </tr>
        <tr>
          <td className="category">Georgian citizens**</td>
          <td className="early">150 €</td>
          <td className="regular">200 €</td>
        </tr>
        <tr>
          <td className="category">
          Students/Residents, Service users & carers, Allied professionals, Others
          </td>
          <td className="early">150 €</td>
          <td className="regular">200 €</td>
        </tr>
        <tr>
          <td className="category">Online participant</td>
          <td className="early">100 €</td>
          <td className="regular">150 €</td>
        </tr>
        
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Table = styled.table`
  width: 100%;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #39364f;
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
      &.category {
        text-align: left !important;
        background-color: #f1f1f1;
      }
      &.early {
        background-color: #ffd2d3;
        color: #39364f;
        font-weight: 600;
      }
      &.regular {
        background-color: #eaeef5;
        color: #39364f;
        font-weight: 600;
      }
    }
  }
`;

export default Pricing;
