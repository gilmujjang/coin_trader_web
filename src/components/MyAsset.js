import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { dbService } from '../fbase';
import { Line } from 'react-chartjs-2'

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
  width: 48rem;
  height: 24rem;
  padding: 1rem;
  background-color: #eee;
  border-radius: 0.8rem;
`;

const MyAsset = () => {
  const [assets, setAssets] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    dbService.collection("balance").orderBy("time", "desc").limit(30).get().then(snapshot  => {
      const snapshotReverse = snapshot.docs.reverse();
      snapshotReverse.map(doc => {
        const totalMoney = doc.data().btc +  doc.data().eth+ doc.data().bnb+ doc.data().cash;
        setAssets(assets => [...assets, totalMoney])
        setDate(date => [...date,doc.data().time.substr(0,8)])
      })
    })
  },[])

  const dataset = [{
      label: 'Daily Assets',
      data: assets,
      fill: true,
      borderColor: 'rgb(100, 100, 100)',
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
            options={{ responsive: true}}
          />
        </ChartImage>
      </WelecomeView>
  )
}

export default MyAsset;