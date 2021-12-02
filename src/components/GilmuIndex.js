import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { dbService } from '../fbase';

const Text1 = styled.div`
  font-size: 4rem;
  font-weight: 500;
  font-family: 'Do Hyeon', sans-serif;
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
  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const TextBox = styled.div`
  padding: 2rem;
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
      <>
        <FlexBox>
          <TextBox>
              <Text1>가상화폐 투자 봇</Text1>
              <Text2>가상화폐 투자 봇인 길무봇의 투자결과를 모니터링 하는 사이트 입니다</Text2>
              <Text2>길무지수는 길무봇의 (투자결과/초기자금)*100 입니다.</Text2>
            </TextBox>
            <TextBox>
              <Text1>길무지수</Text1>
              <Index>{index}</Index>
            </TextBox>
        </FlexBox>
      </>
  )
}

export default GilmuIndex;