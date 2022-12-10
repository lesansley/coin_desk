import React from "react";
import { useParams } from "react-router-dom";
import { sanitize } from "dompurify";
import { Spinner } from "reactstrap";
import { useCoinRequest } from "../hooks";

function CoinInfo() {
  const coin = useParams();
  const { data, error } = useCoinRequest(coin.id);
  if (error) return <h3>Oops. Something went wrong!</h3>;
  if (!data) return <Spinner>Loading...</Spinner>;
  const description = data.description.en;
  return <div dangerouslySetInnerHTML={{ __html: sanitize(description) }} />;
}

export default CoinInfo;
