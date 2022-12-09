import React from "react";
import { Container, Col, Row } from "reactstrap";
import useStore from "../hooks/useStore";
import CoinStats from "./coin-stats";
import { formatNumber } from "../helpers";

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

  const { currency } = useStore();

  return (
    <Container>
      <Row lg="2" md="2" xs="1">
        <Col>
          <Row>
            <img className="img-fluid" src={image} alt={`${name} logo`} />
          </Row>
          <Row>
            <CoinStats
              data={[
                [
                  { head: "Rank", body: market_cap_rank },
                  {
                    head: "Price",
                    body: `${
                      currency ? currency.toUpperCase() : ""
                    } ${formatNumber(current_price)}`,
                  },
                  { head: "Market Cap", body: `${formatNumber(market_cap)}` },
                ],
              ]}
              update={last_updated}
            />
          </Row>
        </Col>
        <Col>
          <Row>
            <CoinStats
              data={[
                [
                  {
                    head: "24h high/low",
                    body: `${formatNumber(high_24h)} / ${formatNumber(
                      low_24h
                    )}`,
                  },
                  {
                    head: "Highest/Lowest",
                    body: `${formatNumber(ath)} / ${formatNumber(atl)}`,
                  },
                ],
                [
                  { head: "Supply", body: `${formatNumber(total_supply)}` },
                  { head: "Volume", body: `${formatNumber(total_volume)}` },
                ],
              ]}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CoinSummary;
