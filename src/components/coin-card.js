import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { formatNumber } from "../helpers";
import useCurrencyStore from "../hooks/useCurrencyStore";

function CoinCard(props) {
  const { currency } = useCurrencyStore();
  const {
    id,
    image,
    name,
    marketCap,
    price,
    symbol,
    volume,
    high,
    low,
    change,
    sparkline,
    onClick,
  } = props;
  const increase = change < 0;
  return (
    <div className="m-5">
      <Card
        key={symbol}
        style={{
          width: "16rem",
        }}
      >
        <Button color="link" onClick={onClick}>
          <img
            className="img-fluid img-thumbnail"
            alt={`${name} logo`}
            src={image}
            name={id}
          />
        </Button>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {symbol}
          </CardSubtitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            Price: {formatNumber(price, currency)}{" "}
            <div className={`${increase ? "text-danger" : "text-success"}`}>
              ({change}%)
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <Sparklines data={sparkline}>
              <SparklinesLine color="blue" />
            </Sparklines>
          </ListGroupItem>
          <ListGroupItem>Market Cap: {formatNumber(marketCap)}</ListGroupItem>
          <ListGroupItem>Volume: {formatNumber(volume)}</ListGroupItem>
          <ListGroupItem>24h Low: {formatNumber(low, currency)}</ListGroupItem>
          <ListGroupItem>
            24h High: {formatNumber(high, currency)}
          </ListGroupItem>
        </ListGroup>
        <CardBody>
          <Button name={id} onClick={onClick}>
            View details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CoinCard;
