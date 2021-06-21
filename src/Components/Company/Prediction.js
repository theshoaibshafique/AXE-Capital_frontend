import React from 'react'
import TimeSeriesGraph from "../Charts/TimeSeriesGraph";
import StockDetailCard from "../cards/stockDetailCard";

const Prediction = ({stockData,modelData,currentData}) => {
    return (
        <>
        <div>
        <TimeSeriesGraph stockData={stockData} modelData={modelData} />
      </div>
        <div>
        <StockDetailCard
          open={currentData[1]}
          close={currentData[7]}
          high={currentData[2]}
          low={currentData[3]}
          volume={currentData[5]}
          change={currentData[8]}
          changePercent={currentData[9]}
        />
      </div>
      </>
    )
}

export default Prediction
