import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonGroup, Button } from "reactstrap";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
} from "recharts";
import formatRawGraphData from "../helpers/format-raw-graph-data";
import useCoinMarketRequest from "../hooks/useCoinMarketRequest";

function CoinChart() {
  const [duration, setDuration] = useState("max");
  const coin = useParams();
  const { data } = useCoinMarketRequest(coin.id, duration);
  const formattedData = formatRawGraphData(data);
  function handleClick(e) {
    const val = e.target.value;
    setDuration(val);
  }
  return (
    <div>
      <div>
        <ButtonGroup className="my-2" size="sm">
          <Button value="1" onClick={handleClick}>
            1 day
          </Button>
          <Button>7 days</Button>
          <Button>1 month</Button>
          <Button>6 months</Button>
          <Button>1 year</Button>
          <Button>5 years</Button>
          <Button>10 years</Button>
          <Button>Max</Button>
        </ButtonGroup>
      </div>
      <h4>Market data for {coin.id}</h4>
      <LineChart
        width={500}
        height={250}
        data={formattedData}
        dot={false}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="prices" stroke="#8884d8" dot={false} />
        <Brush />
      </LineChart>
      <AreaChart
        width={500}
        height={100}
        data={formattedData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="total_volumes"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
      <AreaChart
        width={500}
        height={100}
        data={formattedData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="market_caps"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
}

export default CoinChart;
