'use client';

import styled from 'styled-components';
import Image from 'next/image';
import EmployeeButton from './Buttons/EmployeeButton';
import NewTaskButton from './Buttons/NewTaskButton';
import logoImage from '../../public/momentum.png'

const HeaderContainer = styled.header`
  width: 100%;
  padding:30px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 20px;
    font-weight: 700;
    color: #8338EC;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 40px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Image src={logoImage} alt="Momentum logo" width={210} height={38} />
      </LogoWrapper>
      <ButtonGroup>
        <EmployeeButton />
        <NewTaskButton />
      </ButtonGroup>
    </HeaderContainer>
  );
}
