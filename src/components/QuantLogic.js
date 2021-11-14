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
        <div>
          <Title>볼린저밴드 & 돈키언추세 혼합전략</Title>
          <DescriptionBox>
            <Description>매수시점은 20일 이동평균선 표준편차 1.5를 기준으로한 볼린저 밴드 상단선을 이용하고 </Description>
            <Description>매도시점은 고가에서 10%하락한 돈키언 추세 하단선을 이용합니다.</Description>
            <Description>논문링크</Description>
          </DescriptionBox>
        </div>
      </WelecomeView>
  )
}

export default QuantLogic;