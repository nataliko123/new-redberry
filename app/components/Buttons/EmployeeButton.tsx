'use client';

import styled from 'styled-components';

const EmployeeBtn = styled.button`
  border: 1px solid #8338EC;
  color: #1a1a1f;
  background: transparent;
  width: 225px;
  height: 39px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s;
  color:#212529;

  &:hover {
    background: #f3e8ff;
  }
`;

export default function EmployeeButton() {
  return <EmployeeBtn>თანამშრომლის ძიება</EmployeeBtn>;
}
