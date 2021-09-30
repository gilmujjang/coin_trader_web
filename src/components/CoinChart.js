import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2'
import request from 'request';
import { dbService } from '../fbase';

const WelecomeView = styled.div`
color: black;
margin-top: 10rem;
display: flex;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-family: 'Do Hyeon', sans-serif;
`;

const Title = styled.p`
  margin: 3rem;
  font-size: 4rem;
`;

const ChartImage = styled.div`
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  padding: 0 1.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Chart = () => {
  const [showBtc, setShowBtc] = useState(true);
  const [assets, setAssets] = useState([]);
  const [btcPrice, setBtcPrice] = useState([]);
  const [ethPrice, setEthPrice] = useState([]);
  const [bnbPrice, setBnbPrice] = useState([]);
  const [composePrice, setComposePrice] = useState([]);
  const [date, setDate] = useState([]);
  const [intervals, setIntervals] = useState('');
  const [len, setLen] = useState(70);

  function Unix_timestamp(t){
    const date = new Date(t);
    const year = date.getFullYear();
    const month = "0" + (date.getMonth()+1);
    const day = "0" + date.getDate();
    const hour = "0" + date.getHours();
    return year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hour.substr(-2);
  }

  async function candle_price(coin, intervals, length){
    const api_url = "https://api.bithumb.com/public/candlestick/"+coin+"_KRW/"+intervals;
    const response = new Promise((resolve, reject) => {
      request({
        uri:api_url,
      },(err, res, result) => {
        if (err) reject(err);
        if (res.statusCode !== 200) {
          reject('Invalid status code <' + response.statusCode + '>');
        }
        resolve(JSON.parse(result));
        }
      )
    })
    const response_json = await response;
    const n = response_json["data"].length-1
    let coin_pices_list = [];
    let coin_date_list = [];
    const initPrice = response_json["data"][n-length][2];
    for(let i=length; i>0; i--){
      const data = response_json["data"][n-i];
      const time = Unix_timestamp(Number(data[0]));
      coin_pices_list.push((Number(data[2]))/initPrice).toFixed(1);
      coin_date_list.push(time);
    }
    const reObj = {price : coin_pices_list, date : coin_date_list}
    return reObj;
  }

  useEffect(() => {
    async function DataRenew(){
      dbService.collection("balance").orderBy("time", "desc").limit(len).get().then(snapshot  => {
        const snapshotReverse = snapshot.docs.reverse();
        const initAsset = snapshotReverse[0].data().btc +snapshotReverse[0].data().eth+snapshotReverse[0].data().bnb+snapshotReverse[0].data().cash
        snapshotReverse.map(doc => {
          const totalMoney =( (doc.data().btc +  doc.data().eth+ doc.data().bnb+ doc.data().cash)/initAsset).toFixed(2);
          setAssets(assets => [...assets, totalMoney])
        })
      })
      const btcObj = await candle_price('BTC',intervals,len);
      const ethObj = await candle_price('ETH',intervals,len);
      const bnbObj = await candle_price('BNB',intervals,len);
      const composePrice = btcObj.price.map((x,y) => (Number((x + ethObj.price[y] + bnbObj.price[y])/3).toFixed(2)));
      setComposePrice(composePrice)
      setBtcPrice(btcObj.price);
      setEthPrice(ethObj.price);
      setBnbPrice(bnbObj.price);
      setDate(btcObj.date)
    }
    DataRenew();
  },[intervals, len])

  
  
  const dataset = [
    {
      label: 'Gilmu',
      data: assets,
      fill: false,
      borderColor: '#000000',
      tension: 0.1
    },
    {
      label: 'BTC+ETH_BNB',
      data: composePrice,
      fill: false,
      borderColor: '#ff0000',
      tension: 0.1
    },
    {
      label: 'BTC',
      data: btcPrice,
      fill: false,
      borderColor: '#ffd900',
      tension: 0.1
    },
    {
      label: 'ETH',
      data: ethPrice,
      fill: false,
      borderColor: '#9c9c9c',
      tension: 0.1
    },
    {
      label: 'BNB',
      data: bnbPrice,
      fill: false,
      borderColor: '#00aa00',
      tension: 0.1
    },
  ];

  return(
      <WelecomeView className="chart">
        <Title>차트</Title>
        <ChartImage>
          <Line
            data={{
              labels: date,
              datasets: dataset
            }}
            style={{ height: "100%", width: "100%" }}
            options={{ responsive: true},{elements: { point: { radius: 0 } }}}
          />
        </ChartImage>
      </WelecomeView>
  )
}

export default Chart;