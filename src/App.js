import './App.css';
import Header from './components/Header'
import Main from './components/Main'

import styled from 'styled-components';

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #3E64FF calc(72% + 1px), #3E64FF 100%);  `;

function App() {
  return (
    <BackgroundImage>
      <Header/>
      <Main/>
    </BackgroundImage>
  );
}

export default App;
