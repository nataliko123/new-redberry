'use client';

import styled from 'styled-components';

const TaskBtn = styled.button`
  background-color: #8338EC;
  color: #FFFFFF;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  width: 268px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #8e49e9;
  }
`;

const PlusIcon = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  line-height: 1;
`;

const ButtonText = styled.span`
  font-size: 15px;
  line-height: 1;
  display: flex;
  align-items: center;
`;

export default function NewTaskButton() {
  return (
    <TaskBtn>
      <PlusIcon>＋</PlusIcon>
      <ButtonText>შექმენი ახალი დავალება</ButtonText>
    </TaskBtn>
  );
}
