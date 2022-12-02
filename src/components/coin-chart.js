import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonGroup } from "reactstrap";
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
import { DEFAULT_CHART_DURATION, CHART_DURATION_ARRAY } from "../config";
import formatRawGraphData from "../helpers/format-raw-graph-data";
import useCoinMarketChartRequest from "../hooks/useCoinMarketChartRequest";
import ButtonListItems from "./button-list-items";

function CoinChart() {
  const [duration, setDuration] = useState(DEFAULT_CHART_DURATION);
  const coin = useParams();
  const { data, error } = useCoinMarketChartRequest(coin.id, duration);
  if (error) return <h3>Oops. Something went wrong!</h3>;

  const formattedData = formatRawGraphData(data);
  function handleClick(e) {
    console.log(e);
    const val = e.target.value;
    setDuration(val);
  }

  return (
    <div>
      <div>
        <ButtonGroup className="my-2" size="sm">
          <ButtonListItems
            buttons={CHART_DURATION_ARRAY}
            onClick={handleClick}
            duration={duration}
          />
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
