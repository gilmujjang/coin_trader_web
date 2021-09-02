import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const HeaderFixed = styled.header`
  position: fixed;
  height: 5rem;
  width: 100%;
  background-color: #ecfcff;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
`;

const MenuTag = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  padding: 0.3rem 0.6rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  font-family: 'Do Hyeon', sans-serif;
  background-color: white;
  border-radius: 2rem;
`;

const Logo = styled.a`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 2rem;
  text-decoration: none;
  color: black;
`;

const Header = () => {
  return(
    <HeaderFixed>
      <Logo href="#welcome">헤이비트 짝퉁 비슷한거</Logo>
      <nav>
        <MenuTag to="#welcome">사이트 소개</MenuTag>
        <MenuTag to="#quantLogic">투자전략</MenuTag>
        <MenuTag to="#d">투자결과</MenuTag>
        <MenuTag to="#e">만드는 과정</MenuTag>
      </nav>
    </HeaderFixed>
  )
}

export default Header;