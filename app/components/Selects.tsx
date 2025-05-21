"use client";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Static data
const DEPARTMENTS = ["Marketing", "Sales", "Engineering"];
const PRIORITIES = ["High", "Medium", "Low"];
const EMPLOYEES = ["John Doe", "Jane Smith", "Alex Johnson"];

// Define the props interface for Select
interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const Wrapper = styled.div`
  margin-left: 120px;
`;

const SelectsContainer = styled.div`
  display: flex;
  width: 688px;
  height: 44px;
  gap: 45px;
  border-radius: 10px;
  border: 1px solid #dee2e6;
  padding: 0 20px;
  position: relative;
  background-color: white;
`;

const Select = styled.div<SelectProps>`
  display: flex;
  padding: 12px 0;
  gap: 8px;
  font-family: FiraGO, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  flex: 1;
  color: ${({ isOpen }) => (isOpen ? "#8338EC" : "#0D0F10")};

  svg {
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    width: 24px;
    height: 24px;
    fill: currentColor; /* Inherit the color from the parent */
  }

  /* Hover styles only when dropdown is closed */
  &:hover:not([data-is-open="true"]) {
    color: #8338ec;
  }

  /* Reset styles when dropdown is closed */
  &[data-is-open="false"] {
    color: #0d0f10;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  border: 1px solid #8338ec;
  background-color: white;
  width: 688px;
  top: 100%;
  left: 0;
  border-radius: 10px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectedItems = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const SelectedItem = styled.div`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 15px;
`;

const Selects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["დეპარტამენტი", "პრიორიტეტი", "თანამშრომელი"];
  const allData = [...DEPARTMENTS, ...PRIORITIES, ...EMPLOYEES];

  useEffect(() => {
    setCheckedItems(new Array(allData.length).fill(false));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    const selected = allData.filter((_, idx) => updatedCheckedItems[idx]);
    setSelectedItems(selected);
  };

  return (
    <Wrapper>
      <SelectsContainer ref={dropdownRef}>
        {options.map((text, index) => (
          <Select
            key={index}
            onClick={handleClick}
            isOpen={isOpen}
            data-is-open={isOpen}
          >
            <p>{text}</p>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </Select>
        ))}
        {isOpen && (
          <Dropdown>
            {allData.map((item, idx) => (
              <Option key={idx}>
                <input
                  type="checkbox"
                  checked={checkedItems[idx] || false}
                  onChange={() => handleCheckboxChange(idx)}
                />
                <span>{item}</span>
              </Option>
            ))}
          </Dropdown>
        )}
      </SelectsContainer>

      <SelectedItems>
        {selectedItems.map((item) => (
          <SelectedItem key={item}>{item}</SelectedItem>
        ))}
      </SelectedItems>
    </Wrapper>
  );
};

export default Selects;
