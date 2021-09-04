import React from 'react';
import styled from 'styled-components';

const WelecomeView = styled.div`
color: black;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;

const Text1 = styled.div`
  font-size: 3rem;
  font-weight: 500;
  font-family: 'Do Hyeon', sans-serif;
  margin: 2rem;
`;

const Text2 = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
`;

const TextBox = styled.div`
  width: 32rem;
  margin-top: 4rem;
`;

const LogoBox = styled.div`
  width: 24rem;
`;

const BithumbLogo = styled.img`
  width: 18rem;
`;

const Welcome = () => {
  return(
      <WelecomeView className="welcome">
        <FlexBox>
          <TextBox>
            <Text1>가상화폐 투자 봇</Text1>
            <Text2>가상화폐 투자 봇인 길무봇의 투자결과를 모니터링 하는 사이트 입니다</Text2>
          </TextBox>
          <LogoBox>
            <BithumbLogo src="images/bithumb.png" alt="bithumb logo"/>
            <Text2>근데 빗썸을 곁들인</Text2>
          </LogoBox>
        </FlexBox>
      </WelecomeView>
  )
}

export default Welcome;