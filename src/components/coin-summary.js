import React from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Spinner, Table } from "reactstrap";
import useCoinMarketRequest from "../hooks/useCoinMarketRequest";

function CoinSummary() {
  const coin = useParams();
  const { data, error } = useCoinMarketRequest(coin.id);
  if (error) return <h3>Oops. Something went wrong!</h3>;
  if (!data) return <Spinner>Loading...</Spinner>;
  console.log("CoinSummary", data);

  return (
    <Container>
      <Row lg="2" md="2" xs="1">
        <Col></Col>
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
                <th>100/200</th>
                <th>50/300</th>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>24h high/low</th>
                <th>Highest/Lowest</th>
              </tr>
              <tr>
                <th>24h high/low</th>
                <th>Highest/Lowest</th>
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
