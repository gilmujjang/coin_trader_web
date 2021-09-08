import React, {useEffect} from 'react';
import styled from 'styled-components';
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

const ChartImage = styled.img`
  width: 48rem;
  height: 24rem;
  padding: 1rem;
  background-color: #eee;
  border-radius: 0.8rem;
`;

const Chart = () => {

  useEffect(() => {
    dbService.collection("balance").orderBy("time", "desc").limit(3).get().then(snapshot  => {
      snapshot.docs.map(doc => {
        console.log(doc.data())
      })
    })
  },[])

  return(
      <WelecomeView className="chart">
        <Title>차트</Title>
        <ChartImage src="images/chart.png" alt="some chart"/>

      </WelecomeView>
  )
}

export default Chart;