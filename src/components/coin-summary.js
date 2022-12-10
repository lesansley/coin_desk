import React from "react";
import { Container, Col, Row } from "reactstrap";
import useStore from "../hooks/useStore";
import CoinStats from "./coin-stats";
import { formatNumber } from "../helpers";

function CoinSummary(props) {
  const { market_cap_rank, image, last_updated, name } = props;
  const { currency } = useStore();
  const current_price = props.current_price
    ? formatNumber(props.current_price, currency)
    : "--";
  const high_24h = props.high_24h ? formatNumber(props.high_24h) : "--";
  const low_24h = props.low_24h ? formatNumber(props.low_24h) : "--";
  const ath = props.ath ? formatNumber(props.ath) : "--";
  const atl = props.atl ? formatNumber(props.atl) : "--";
  const total_supply = props.total_supply
    ? formatNumber(props.total_supply)
    : "--";
  const total_volume = props.total_volume
    ? formatNumber(props.total_volume)
    : "--";
  const market_cap = props.market_cap ? formatNumber(props.market_cap) : "--";

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
                    body: current_price,
                  },
                  { head: "Market Cap", body: market_cap },
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
                    body: `${high_24h} / ${low_24h}`,
                  },
                  {
                    head: "Highest/Lowest",
                    body: `${ath} / ${atl}`,
                  },
                ],
                [
                  { head: "Supply", body: `${total_supply}` },
                  { head: "Volume", body: `${total_volume}` },
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
