import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import useStore from "../hooks/useStore";
import useNewsRequest from "../hooks/useNewsRequest";

function CoinNews() {
  const [state, setState] = React.useState(null);
  const [news, setNews] = React.useState([]);
  const coin = useParams();
  const { coinList } = useStore();

  useEffect(() => {
    coinList.forEach((element) => {
      if (element.id === coin.id) {
        setState(element.symbol);
      }
    });

    fetch(
      "https://cryptopanic.com/api/v1/posts/?auth_token=50ee9992b081a3bf092e04aa82963c207378dd65&currencies=btc&kind=news&public=true&regions=en",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, [coin.id, coinList, setNews]);

  console.log("news", news);
  return <div>Lastest news for </div>;
}

export default CoinNews;
