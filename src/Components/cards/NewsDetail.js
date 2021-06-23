import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const NewsDetail = ({ title, source, date, summary, url, impact }) => {
  let borderColor = "#424242";
  if (impact == "Positive") {
    borderColor = "#00c853";
  } else if (impact == "Negative") {
    borderColor = "#dc3545";
  }
  return (
    <Card
      variant="elevation"
      style={{ marginBottom: "10px", borderRight: `5px solid ${borderColor}` }}
    >
      <CardActionArea
        onClick={(e) => {
          e.preventDefault();
          window.open(url);
        }}
      >
        <CardContent>
          <Typography variant="h6" color="primary">
            {title}
          </Typography>
          <div>
            <Typography variant="caption">Source: {source} | </Typography>
            <Typography variant="caption">{date} | </Typography>
          </div>
          <Typography variant="body2">{summary}</Typography>
          <Typography variant="subtitle1" style={{ color: `${borderColor}` }}>
            Impact: {impact}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsDetail;
