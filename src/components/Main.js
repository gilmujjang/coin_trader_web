import React from 'react';
import Welcome from './Welecome'
import QuantLogic from './QuantLogic';
import CoinChart from './CoinChart';
import GilmuIndex from './GilmuIndex';
import MyAsset from './MyAsset';
import TradeRecord from './TradeRecord';

const Main = () => {
  return(
    <div>
      <GilmuIndex/>
      <Welcome/>
      <QuantLogic/>
      <CoinChart/>
      <MyAsset/>
      <TradeRecord/>
    </div>
  )
}

export default Main;