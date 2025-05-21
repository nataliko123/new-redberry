"use client";
import React from "react";
import styled from "styled-components";

// Define types for props
type Props = {
  color: "pink" | "orange" | "blue" | "yellow";
  text: "დიზაინი" | "მარკეტინგი" | "ლოგისტიკა" | "ინფ.ტექ.";
};

// Styled component for the button
const StyledButton = styled.button<{ color: Props["color"] }>`
  width: 88px;
  height: 24px;
  border-radius: 15px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: ${({ color }) => {
    switch (color) {
      case "pink":
        return "#ff66a8";
      case "orange":
        return "#fd9a6a";
      case "blue":
        return "#89b6ff";
      case "yellow":
        return "#ffd86d";
      default:
        return "#ff66a8"; // Fallback color
    }
  }};
`;

// Styled container (if needed)
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomButton = ({ color, text }: Props) => {
  return <StyledButton color={color}>{text}</StyledButton>;
};

export default CustomButton;
