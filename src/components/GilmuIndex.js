import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { dbService } from '../fbase';

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

const Index = styled.div`
  font-size: 6rem;
  font-family: 'Do Hyeon', sans-serif;
  color: red;
  font-weight: 600;
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

const GilmuIndex = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  useEffect(() => {
    dbService.collection("balance").orderBy("time", "asc").limit(1).get().then(snapshot  => {
      snapshot.docs.map(doc => {
        setStart(doc.data().btc + doc.data().eth + doc.data().bnb + doc.data().cash);
      })
    })
    dbService.collection("balance").orderBy("time", "desc").limit(1).get().then(snapshot  => {
      snapshot.docs.map(doc => {
        setEnd(doc.data().btc + doc.data().eth + doc.data().bnb + doc.data().cash);
      })
    })
  },[])

  const index = ((end/start)*100).toFixed(1)
  return(
      <WelecomeView className="welcome">
        <FlexBox>
          <TextBox>
              <Text1>가상화폐 투자 봇</Text1>
              <Text2>가상화폐 투자 봇인 길무봇의 투자결과를 모니터링 하는 사이트 입니다</Text2>
            </TextBox>
            <TextBox>
              <Text1>길무지수</Text1>
              <Index>{index}</Index>
            </TextBox>
        </FlexBox>
      </WelecomeView>
  )
}

export default GilmuIndex;