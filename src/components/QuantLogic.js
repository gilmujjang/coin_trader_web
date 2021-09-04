import React from 'react';
import styled from 'styled-components';

const WelecomeView = styled.div`
color: black;
margin-top: 10rem;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Do Hyeon', sans-serif;
`;

const ChartImage = styled.img`
  width: 48rem;
  height: 24rem;
  padding: 1rem;
  background-color: #eee;
  border-radius: 0.8rem;
`;

const Title = styled.div`
  font-size: 3rem;
  padding-top: 3rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
`;

const ChartDescription = styled.p`
  font-size: 1rem;
`;

const DescriptionBox = styled.div`
`;

const QuantLogic = () => {
  return(
      <WelecomeView className="quantLogic">
        <Title>투자전략</Title>
        <div>
          <Title>볼린저밴드</Title>
          <DescriptionBox>
            <Description>N 기간 동안의 이동편균 MA에 표준편차의 K배 더하거나 빼서 상단과 하단선을 그린 밴드 이다.</Description>
            <Description>표준편차를 이용하기 때문에 변동성이 높은 장세에서는 더 보수적인 판단을 한다.</Description>
          </DescriptionBox>
          <ChartImage src="images/chart.png" alt="some chart"/>
          <ChartDescription>최근 60일 동안의 비트코인의 볼린저밴드</ChartDescription>
          <Title>돈키언추세</Title>
          <DescriptionBox>
            <Description>N 기간 동안의 고가와 저가가 각각 채널의 상단과 하단을 그린 밴드 이다.</Description>
            <Description>표준편차를 이용하기 때문에 변동성이 높은 장세에서는 더 보수적인 판단을 한다.</Description>
          </DescriptionBox>
          <ChartImage src="images/chart.png" alt="some chart"/>
          <ChartDescription>최근 60일 동안의 비트코인의 돈키언채널</ChartDescription>
          <Title>섞어 쓰는 이유</Title>
          <Description>~~~ 이러해서 좋다</Description>
        </div>
      </WelecomeView>
  )
}

export default QuantLogic;