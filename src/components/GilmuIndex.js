import React from 'react';
import styled from 'styled-components';

const WelecomeView = styled.div`
color: black;
width: 100vw;
height: calc(100vh - 5rem);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;

const Text1 = styled.div`
  font-size: 4rem;
  font-weight: 500;
  font-family: 'Do Hyeon', sans-serif;
  margin: 2rem;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const Index = styled.div`
  font-size: 6rem;
  font-family: 'Do Hyeon', sans-serif;
  color: red;
  font-weight: 600;
`;


const GilmuIndex = () => {
  const index = 106;
  return(
      <WelecomeView className="welcome">
        <FlexBox>
          <Text1>길무지수</Text1>
          <Index>{index}</Index>
        </FlexBox>
      </WelecomeView>
  )
}

export default GilmuIndex;