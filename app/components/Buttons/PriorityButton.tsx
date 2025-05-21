"use client";
import React from "react";
import styled from "styled-components";
import HighIcon from "../../../public/high.svg";
import MediumIcon from "../../../public/medium.svg";
import LowIcon from "../../../public/low.svg";
import Image from "next/image";

type Priority = "high" | "medium" | "low";
type Size = "big" | "small";

const getPriorityIcon = (priority: Priority) => {
  switch (priority) {
    case "high":
      return { icon: HighIcon, label: "მაღალი", color: "red" };
    case "medium":
      return { icon: MediumIcon, label: "საშუალო", color: "yellow" };
    case "low":
      return { icon: LowIcon, label: "დაბალი", color: "green" };
    default:
      return { icon: MediumIcon, label: "საშუალო", color: "none" };
  }
};

type Props = {
  priority: Priority;
  size: Size;
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Container = styled.div<{ size: Size; color: string }>`
  display: flex;
  gap: 4px;
  border-radius: 3px;
  border-width: 0.5px;
  border-style: solid;
  line-height: 150%;
  font-family: FiraGO;
  font-weight: 500;
  align-items: center;

  ${({ color }) =>
    color === "red" &&
    `
    color: #fa4d4d;
    border-color: #fa4d4d;
  `}

  ${({ color }) =>
    color === "yellow" &&
    `
    color: #ffbe0b;
    border-color: #ffbe0b;
  `}

  ${({ color }) =>
    color === "green" &&
    `
    color: #08a508;
    border-color: #08a508;
  `}

  ${({ size }) =>
    size === "small" &&
    `
    width: 86px;
    height: 26px;
    padding: 4px;
    font-size: 12px;

    & > :first-child {
      width: 16px;
      height: 18px;
    }
  `}

  ${({ size }) =>
    size === "big" &&
    `
    width: 106px;
    height: 32px;
    padding: 4px 5px;
    font-size: 16px;

    & > :first-child {
      width: 18px;
      height: 20px;
    }
  `}
`;

const PriorityButton = ({ priority, size }: Props) => {
  const { icon, label, color } = getPriorityIcon(priority);
  return (
    <ButtonContainer>
      <Container size={size} color={color}>
        <Image src={icon} alt={label} />
        <p>{label}</p>
      </Container>
    </ButtonContainer>
  );
};

export default PriorityButton;
