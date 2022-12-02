import React from "react";
import { Container, Row, Table } from "reactstrap";

function CoinStats({ name, price, image, rank, update, cap }) {
  return (
    <Container>
      <Row>
        <img className="img-fluid" src={image} alt={`${name} logo`} />
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Ranking</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{price}</td>
              <td>{rank}</td>
              <td>{cap}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default CoinStats;
