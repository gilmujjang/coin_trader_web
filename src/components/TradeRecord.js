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

const Card = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${props =>
    props.type === 'ask' ? 'rgba(18,99,206,0.7)' : 'rgba(206,17,23,0.7)'}
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 12rem;
`;

const TradeRecord = () => {
  const [trade, setTrade] = useState([]);

  useEffect(() => {
    let data = [];
    dbService.collection("trade").orderBy("order_date", "desc").limit(10).get().then(snapshot  => {
      snapshot.docs.map(doc => {
        data.push(doc.data());
      })
      setTrade(data);
    })
  },[])

  function Unix_timestamp(t){
    const date = new Date(t);
    const year = date.getFullYear();
    const month = "0" + (date.getMonth()+1);
    const day = "0" + date.getDate();
    const hour = "0" + date.getHours();
    const minute = "0" + date.getMinutes();
    return year + "년" + month.substr(-2) + "월" + day.substr(-2) + "일 " + hour.substr(-2) +"시 "+ minute.substr(-2)+"분";
  }
  
  const TradeCard = (data) => {
    console.log(data.data)
    const time = Unix_timestamp(Number(data.data.order_date.substring(0,13)))
    return(
      <Card type={data.data.type}>
        <CardHeader>
          <div>{data.data.order_currency}</div>
          <Box/>
          {data.data.type === 'ask' ? (
            <div>매도</div>
          ):(
            <div>매수</div>
          )}
        </CardHeader>
        <CardBody>
          <div>{time}</div>
        </CardBody>
      </Card>
    )
  }

  return(
      <WelecomeView className="chart">
        <Title>거래기록</Title>
        {trade.map(data => (
          <TradeCard data={data}/>
        ))}
      </WelecomeView>
  )
}

export default TradeRecord;