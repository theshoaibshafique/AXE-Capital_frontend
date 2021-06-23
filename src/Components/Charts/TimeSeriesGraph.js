import React from "react";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";

const TimeSeriesGraph = ({ stockData, modelData }) => {
  function unpackDate(data) {
    return data.map((item) => {
      return item.Date;
    });
  }
  function unpacknewDate(data) {
    return data.map((item) => {
      return item.ds;
    });
  }

  function unpackClose(data) {
    return data.map((item) => {
      return item.Close;
    });
  }
  function unpacktrend(data) {
    return data.map((item) => {
      return item.predicted_value;
    });
  }

  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: "Close Price",
    x: unpackDate(stockData),
    y: unpackClose(stockData),
    line: { color: "#17BECF" },
  };

  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: "Predicted Price",
    x: unpacknewDate(modelData),
    y: unpacktrend(modelData),
    line: { color: "#7F7F7F" },
  };

  var data = [trace1, trace2];
  var layout = {
    title: "Predicted and Close Price Chart",
    autosize: true,
    xaxis: {
      autorange: true,
      range: ["2010-06-29", "2021-08-24"],
      rangeselector: {
        buttons: [
          {
            count: 1,
            label: "1m",
            step: "month",
            stepmode: "backward",
          },
          {
            count: 6,
            label: "6m",
            step: "month",
            stepmode: "backward",
          },
          { step: "all" },
        ],
      },
      rangeslider: { range: ["2010-06-29", "2021-08-24"] },
      type: "date",
    },
    yaxis: {
      autorange: true,
      type: "linear",
    },
  };

  const Plot = createPlotlyComponent(Plotly);
  if (!modelData) {
    return <h1>Loading ....</h1>;
  } else
    return (
      <Plot
        data={data}
        layout={layout}
        style={{ width: "100%", height: "700px" }}
        useResizeHandler="true"
      />
    );
};

export default TimeSeriesGraph;
