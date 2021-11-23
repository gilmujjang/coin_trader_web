import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { dbService } from '../fbase';
import { Doughnut } from 'react-chartjs-2'

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
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36rem;
  padding: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const MyAsset = () => {
  const [assets, setAssets] = useState({cash: 1000000, btc: 0, eth: 0, bnb: 0});

  useEffect(() => {
    dbService.collection("balance").orderBy("time", "desc").limit(1).get().then(snapshot  => {
      snapshot.docs.map(doc => {
        const {cash, btc, eth, bnb} = doc.data();
        setAssets({cash: cash, btc: btc, eth: eth, bnb: bnb});
      })
    })
  },[])

  const data = {
      labels: ['현금', '비트코인', '이더리움', '바이낸스코인'],
      datasets: [{
        label: '보유 현황',
        data: [assets.cash, assets.btc, assets.eth, assets.bnb],
        backgroundColor: [
          '#FF6384',
          '#ffd900',
          '#9c9c9c',
          '#00aa00'
        ],
        hoverOffset: 4
      }]
    };
  return(
      <WelecomeView className="chart">
        <Title>보유현황</Title>
        <ChartImage>
          <Doughnut
            data={data} 
            style={{ height: "100%", width: "100%" }}
            options={{ responsive: true},{elements: { point: { radius: 0 } }}}
          />
        </ChartImage>
      </WelecomeView>
  )
}

export default MyAsset;