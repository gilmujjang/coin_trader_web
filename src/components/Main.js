import React from 'react';
import Welcome from './Welecome'
import QuantLogic from './QuantLogic';
import Make from './Make';
import Chart from './Chart';
import styled from 'styled-components';

// const BackgrondOdd = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #4facfe calc(72% + 1px), #4facfe 100%); 
//   `;

// const BackgrondEven = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(55deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #4facfe calc(72% + 1px), #4facfe 100%); 
//   `;

const Main = () => {
  return(
    <div>
      {/* <BackgrondOdd> */}
        <Welcome/>
      {/* </BackgrondOdd>
      <BackgrondEven> */}
        <QuantLogic/>
      {/* </BackgrondEven>
      <BackgrondOdd> */}
        <Make/> 
      {/* </BackgrondOdd>
      <BackgrondEven> */}
        <Chart/>
      {/* </BackgrondEven> */}
    </div>
  )
}

export default Main;