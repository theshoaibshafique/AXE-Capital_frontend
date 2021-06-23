import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Typography } from "@material-ui/core";

const AlertSignal = ({ newsData }) => {
  let positiveCount = 0;
  let negativeCount = 0;

  newsData.forEach((news) => {
    if (news.sentiment === "Positive") positiveCount++;
    else if (news.sentiment === "Negative") negativeCount++;
  });

  return (
    <div>
      <Alert severity="info">
        <AlertTitle>Market News Sentiment Alert</AlertTitle>
        <Typography>
          {" "}
          Buy:{" "}
          <strong style={{ color: "#4caf50" }}>
            {((positiveCount / (positiveCount + negativeCount)) * 100).toFixed(
              2
            )}
            %
          </strong>
        </Typography>
        <Typography>
          {" "}
          Sell:{" "}
          <strong style={{ color: "#f44336" }}>
            {((negativeCount / (positiveCount + negativeCount)) * 100).toFixed(
              2
            )}
            %
          </strong>
        </Typography>
        <Typography variant="caption">
          *For Detail News Sentiment Analysis go to News Tab
        </Typography>
      </Alert>
    </div>
  );
};

export default AlertSignal;
