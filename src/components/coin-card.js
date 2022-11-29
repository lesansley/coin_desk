import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function CoinCard(props) {
  const { image, name, marketCap, price, symbol, volume, high, low } = props;
  return (
    <div className="m-5">
      <Card
        style={{
          width: "15rem",
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
    </div>
  );
}

export default CoinCard;
