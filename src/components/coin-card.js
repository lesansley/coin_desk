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
  if (!props.name) return;
  const { image, name, marketCap, price, symbol, volume, high, low } = props;
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt={`${name} logo`} src={image} />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {symbol}
        </CardSubtitle>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>Price: {price}</ListGroupItem>
        <ListGroupItem>Market Cap: {marketCap}</ListGroupItem>
        <ListGroupItem>Volume: {volume}</ListGroupItem>
        <ListGroupItem>24h Low: {low}</ListGroupItem>
        <ListGroupItem>24h High: {high}</ListGroupItem>
      </ListGroup>
      <CardBody>
        <Button>View details</Button>
      </CardBody>
    </Card>
  );
}

export default CoinCard;
