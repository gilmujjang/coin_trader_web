import React from 'react';
import QuantLogic from './QuantLogic';
import CoinChart from './CoinChart';
import GilmuIndex from './GilmuIndex';
import MyAsset from './MyAsset';
import TradeRecord from './TradeRecord';
import styled from 'styled-components';

const DefaultBox = styled.div`
  min-height: 60vh;
  color: black;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Do Hyeon', sans-serif;
`;

const BackgoundColor = styled.div`
  background-color: rgb(250,249,250);
`;

const Main = () => {
  return(
    <BackgoundColor>
      <DefaultBox>
        <GilmuIndex/>
      </DefaultBox>
      <DefaultBox>
        <QuantLogic/>
      </DefaultBox>
      <DefaultBox>
        {/* <CoinChart/> */}
      </DefaultBox>
      <DefaultBox>
        <MyAsset/>
      </DefaultBox>
      <DefaultBox>
        <TradeRecord/>
      </DefaultBox>
    </BackgoundColor>
  )
}

export default Main;