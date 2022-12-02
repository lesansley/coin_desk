import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "reactstrap";
import CoinInfo from "../components/coin-info";
import CoinChart from "../components/coin-chart";
import CoinNews from "../components/coin-news";

function Coin() {
  const coin = useParams();
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back to dashboard
        </Button>
      </div>
      <h1>{coin.id.toUpperCase()} Coin Page</h1>
      <Row xs="1">
        <Col>
          <CoinInfo coin={coin.id} />
        </Col>
      </Row>

      <Row lg="12" sm="1">
        <Col lg="7">
          <CoinChart />
        </Col>
        <Col lg="5">
          <CoinNews />
        </Col>
      </Row>
    </Container>
  );
}

export default Coin;
