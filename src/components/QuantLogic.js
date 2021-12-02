import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 3rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
`;

const WhiteBox = styled.div`
  padding: 2.5rem 2rem 2rem 2rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const DescriptionBox = styled.div`
`;

const QuantLogic = () => {
  return(
    <WhiteBox>
      <Title>볼린저밴드 & 돈키언추세 혼합전략</Title>
      <DescriptionBox>
        <Description>매수시점은 20일 이동평균선 표준편차 1.5를 기준으로한 볼린저 밴드 상단선을 이용하고 </Description>
        <Description>매도시점은 고가에서 10%하락한 돈키언 추세 하단선을 이용합니다.</Description>
        <Description>빗썸에서 시가총액이 가장 큰 3개인 비트코인, 이더리움, 바이낸스코인을 거래합니다.</Description>
        <Description>논문링크 달 예정</Description>
      </DescriptionBox>
    </WhiteBox>
  )
}

export default QuantLogic;