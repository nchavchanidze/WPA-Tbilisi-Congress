import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Pricing = () => {
  return (
    <TableWrapper>
      <Table>
        <tr>
          <th>REGISTRATION CATEGORIES</th>
          <th>
            Early Rate <br /> UNTIL 01 AUGUST 2022
          </th>
          <th>
            Regular Rate <br /> FROM 02 AUGUST 2022 &amp; ONSITE
          </th>
        </tr>
        <tr>
          <td className="category">Participant form High Income Country*</td>
          <td>250 €</td>
          <td>300 €</td>
        </tr>
        <tr>
          <td className="category">Participant from Upper Middle-Income Country*</td>
          <td>200 €</td>
          <td>250 €</td>
        </tr>
        <tr>
          <td className="category">Participant from Low &amp; Lower-income Country*</td>
          <td>150 €</td>
          <td>200 €</td>
        </tr>
        <tr>
          <td className="category">Participant – citizen of Georgia**</td>
          <td>150 €</td>
          <td>200 €</td>
        </tr>
        <tr>
          <td className="category">Students/Residents***</td>
          <td>100 €</td>
          <td>150 €</td>
        </tr>
        <tr>
          <td className="category">Online participant</td>
          <td>100 €</td>
          <td>150 €</td>
        </tr>
        <tr>
          <td className="category">Accompanying person</td>
          <td>50 €</td>
          <td>100 €</td>
        </tr>
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  th {

  }
  tr {
    text-align: center;
    td {
      &.category {
        text-align: left !important;
      }
    }
  }
`;

export default Pricing;
