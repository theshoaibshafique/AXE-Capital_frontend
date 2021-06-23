import { Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import companyContext from "../../context/companycontext";
import NewsCard from "../cards/newsCard";
import PriceCard from "../cards/priceCard";
import Axios from "axios";
import $ from "jquery";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import Prediction from "../Company/Prediction";
import News from "../Company/News";
import AlertSignal from "../Company/Alert";
const Width = $(window).width() - 340;

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Companydetail() {
  const { companyData, setcompanyData } = useContext(companyContext);
  const [stockData, setstockData] = useState([]);
  const [currentData, setcurrentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modelData, setModelData] = useState([]);
  const [toggleComponent, settoggleComponent] = useState(true);
  const [newsData, setnewsData] = useState([]);
  const classes = useStyles();
  var ticker = companyData.ticker;
  const apikey = "F9D24TUFO3WGIOBW";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const req = await Axios.get("http://127.0.0.1:5000/stockdata/" + ticker);
      setstockData(req.data);
      await $.getJSON(
        "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
          ticker +
          "&outputsize=full&apikey=" +
          apikey
      ).done(function (response) {
        const temp = Object.values(response);
        const temp2 = Object.values(temp[0]);
        setcurrentData(temp2);
        console.log(currentData);
        setLoading(false);
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchdata() {
      const req = await Axios.get("http://127.0.0.1:5000/getdata/" + ticker);
      setModelData(req.data);
    }
    fetchdata();
  }, []);
  useEffect(() => {
    async function fetchdata() {
      const req = await Axios.get(
        `https://stocknewsapi.com/api/v1?tickers=${ticker}&items=50&token=9lm7ltiiw2rwvmeuxussf9akqzrpybzfrllbxndj`
      );
      setnewsData(Object.values(req.data)[0]);
    }
    fetchdata();
  }, []);

  console.log(stockData);
  console.log(newsData);
  console.log(modelData);
  if (loading == true) {
    return (
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  } else {
    return (
      <div
        style={{
          maxWidth: Width,
        }}
      >
        <Typography variant="h6">{companyData.title}</Typography>
        <div
          style={{
            display: "flex",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              marginRight: 40,
            }}
          >
            <PriceCard
              price={currentData[4]}
              settoggleComponent={settoggleComponent}
              toggleComponent={toggleComponent}
            />
          </div>
          <div>
            <NewsCard
              settoggleComponent={settoggleComponent}
              toggleComponent={toggleComponent}
            />
          </div>
        </div>
        {toggleComponent ? (
          <>
            <AlertSignal newsData={newsData} />
            <Prediction
              stockData={stockData}
              modelData={modelData}
              currentData={currentData}
            />
          </>
        ) : (
          <News newsData={newsData} />
        )}
      </div>
    );
  }
}

export default Companydetail;
