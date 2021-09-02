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

const QuantLogic = () => {
  return(
      <WelecomeView className="quantLogic">
        <Introduce>알고리즘</Introduce>
      </WelecomeView>
  )
}

export default QuantLogic;