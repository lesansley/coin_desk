import React from "react";
import { Container, Col, Row, Table } from "reactstrap";
import CoinStats from "./coin-stats";

function CoinSummary(props) {
  const {
    market_cap_rank,
    image,
    current_price,
    high_24h,
    low_24h,
    ath,
    atl,
    total_supply,
    total_volume,
    last_updated,
    market_cap,
    name,
  } = props;
  return (
    <Container>
      <Row lg="2" md="2" xs="1">
        <Col>
          <CoinStats
            price={current_price}
            image={image}
            rank={market_cap_rank}
            update={last_updated}
            cap={market_cap}
            name={name}
          />
        </Col>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>24h high/low</th>
                <th>Highest/Lowest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {high_24h} / {low_24h}
                </td>
                <td>
                  {ath} / {atl}
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Supply</th>
                <th>Volume</th>
              </tr>
              <tr>
                <td>{total_supply}</td>
                <td>{total_volume}</td>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default CoinSummary;
