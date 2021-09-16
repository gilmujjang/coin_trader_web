import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2'
import request from 'request';

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
  const [targetCoin, setTargetCoin] = useState('BTC');
  const [intervals, setIntervals] = useState('');
  const [len, setLen] = useState(30);
  const [coinPrice, setCoinPrice] = useState([]);
  const [coinMa, setCoinMa] = useState([]);
  const [coinUpper, setCoinUpper] = useState([]);
  const [coinLower, setCoinLower] = useState([]);
  const [date, setDate] = useState([]);

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
    let coin_upper_list = [];
    let coin_lower_list = [];
    let coin_date_list = [];
    const initPrice = response_json["data"][n-length][2];
    for(let i=length; i>0; i--){
      const data = response_json["data"][n-i];
      const time = Unix_timestamp(Number(data[0]));
      coin_pices_list.push((Number(data[2]))/initPrice).toFixed(1);
      coin_date_list.push(time);
    }
    // const sd = 1.5;
    // const ma = 20;
    // const Mean = Math.round(coin_pices_list.reduce((a,b) => a+b,0) / ma);
    // const Std = Math.round(Math.sqrt(coin_pices_list.map(x => Math.pow(x - Mean,2)).reduce((a,b) => a+b)/ma))
    // const bollinger_top = Mean + Std*sd;
    // const high = Math.max(...coin_pices_list)
    // const donkeyonBottom = high*0.9;
    // const coinPrice = coin_pices_list[0]
    // coinUpper();
    setCoinPrice(coin_pices_list);
    setDate(coin_date_list);
  }

  useEffect(() => {
    candle_price(targetCoin,intervals,len);
  },[targetCoin,intervals,len])
  
  const dataset = [
    {
      label: 'coin price',
      data: coinPrice,
      fill: false,
      borderColor: 'rgb(50, 50, 50)',
      tension: 0.1
    }
  ]
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