import React from 'react';
import styled from 'styled-components';

const WelecomeView = styled.div`
font-size: 4rem;
font-weight: 500;
color: black;
width: 100vw;
height: calc(100vh - 5rem);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-family: 'Do Hyeon', sans-serif;
`;

const Introduce = styled.p`
  margin: 3rem;
`;

const Welcome = () => {
  return(
      <WelecomeView className="welcome">
        <Introduce>이 사이트는 가상화폐 투자 봇인 길무봇의 투자결과를 모니터링 하는 사이트 입니다</Introduce>
      </WelecomeView>
  )
}

export default Welcome;