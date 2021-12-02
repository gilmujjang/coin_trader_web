import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { dbService } from '../fbase';

const Title = styled.p`
  margin: 0 0 3rem 0;
  font-size: 4rem;
`;

const Card = styled.div`
  margin: 3rem;
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

const PaddingBox = styled.div`
  padding: 12px;
`;

const WhiteBox = styled.div`
  padding: 2.5rem 2rem 2rem 2rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 3rem;
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

  function CommaMaker(num){
    const result = num; // 뒤에서부터 3글자마다 ,추가하는 로직

    return result;
  }
  
  const TradeCard = (data) => {
    const trade_data = data.data;
    console.log(trade_data);
    const money = trade_data.contract.reduce((money_sum, current_money) => {
      return money_sum + Number(current_money.total);
    }, 0);
    const fee = trade_data.contract.reduce((fee_sum, current_fee) => {
      return fee_sum + Number(current_fee.fee);
    }, 0);
    const time = Unix_timestamp(Number(trade_data.order_date.substring(0,13)))
    return(
      <Card type={trade_data.type}>
        <CardHeader>
          <PaddingBox>{time}</PaddingBox>
          <PaddingBox>{trade_data.order_currency}</PaddingBox>
          {trade_data.type === 'ask' ? (
            <PaddingBox>매도</PaddingBox>
          ):(
            <PaddingBox>매수</PaddingBox>
          )}
        </CardHeader>
        <CardBody>
          <PaddingBox>금액: {money}</PaddingBox>
          <PaddingBox>수수료: {Math.ceil(fee)}</PaddingBox>
        </CardBody>
      </Card>
    )
  }

  return(
      <WhiteBox>
        <Title>거래기록</Title>
        {trade.map(data => (
          <TradeCard data={data}/>
        ))}
      </WhiteBox>
  )
}

export default TradeRecord;