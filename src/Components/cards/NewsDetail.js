import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen';
import blueGrey from '@material-ui/core/colors/blueGrey';



const NewsDetail = ({title,source,date,summary,url,impact}) => {
  
    let impactColor="textPrimary";
    if(impact==="Positive") {impactColor="primary"}
    else if(impact==="Negative") {impactColor="secondary"}
   return(
    <Card variant="elevation" style={{marginBottom:"10px"}}>
    <CardActionArea onClick={(e)=>{e.preventDefault();
        window.open(url)}}>
    <CardContent>
      <Typography variant="h6" color="primary" >{title}</Typography>
      <div>
        <Typography variant="caption">Source: {source} | </Typography>
        <Typography variant="caption">{date} | </Typography>    
      </div>    
      <Typography variant="body2">{summary}</Typography>
      <Typography variant="subtitle1" color={impactColor}>Impact: {impact}</Typography>
    </CardContent>
    </CardActionArea>
</Card>
   )
}

export default NewsDetail;

