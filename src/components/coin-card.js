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

function CoinCard(props) {
  const {
    image,
    name,
    marketCap,
    price,
    symbol,
    volume,
    high,
    low,
    change,
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
        <img
          className="img-fluid img-thumbnail"
          alt={`${name} logo`}
          src={image}
        />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {symbol}
          </CardSubtitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            Price: {price}{" "}
            <span className={`${increase ? "text-danger" : "text-success"}`}>
              ({change}%)
            </span>
          </ListGroupItem>
          <ListGroupItem>Market Cap: {marketCap}</ListGroupItem>
          <ListGroupItem>Volume: {volume}</ListGroupItem>
          <ListGroupItem>24h Low: {low}</ListGroupItem>
          <ListGroupItem>24h High: {high}</ListGroupItem>
        </ListGroup>
        <CardBody>
          <Button name={symbol} onClick={onClick}>
            View details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CoinCard;
