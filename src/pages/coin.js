import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "reactstrap";
import useStore from "../hooks/useStore";
import { BASE_URL } from "../config";
import CoinInfo from "../components/coin-info";
import CoinChart from "../components/coin-chart";
import CoinSummary from "../components/coin-summary";

function Coin() {
  const [state, setState] = React.useState(null);
  const { currency } = useStore();
  const coin = useParams();
  const navigate = useNavigate();

  const queryObj = {
    vs_currency: currency,
    ids: coin.id,
    order: "market_cap_desc",
    per_page: 100,
    page: 1,
    sparkline: false,
    price_change_percentage:
      "1h % 2C24h % 2C7d % 2C14d % 2C30d % 2C200d % 2C1y",
  };
  const queryStr = "?" + new URLSearchParams(queryObj).toString();
  const url = `${BASE_URL}/coins/markets/${queryStr}`;
  const getMarketData = React.useCallback(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setState(data[0]));
  }, [url]);
  React.useEffect(() => {
    getMarketData();
  }, [getMarketData]);

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
          <CoinSummary {...state} />
        </Col>
      </Row>
      <Row lg="12" sm="1">
        <Col lg="7">
          <CoinChart />
        </Col>
        <Col lg="5">
          <CoinInfo coin={coin.id.toUpperCase()} />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <CoinNews />
        </Col>
      </Row> */}
    </Container>
  );
}

export default Coin;
