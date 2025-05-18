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
  border: 1px solid #DEE2E6;
  padding: 0 20px;
  position: relative;
  background-color: white;
`;

const Select = styled.div<SelectProps>`
  display: flex;
  padding: 12px 0;
  gap: 8px;
  color: ${({ isOpen }) => (isOpen ? "#8338EC" : "#0D0F10")};
  font-family: FiraGO, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  flex: 1;

  &:hover {
    color: #8338EC;

    img {
      filter: invert(33%) sepia(97%) saturate(2000%) hue-rotate(260deg) brightness(90%) contrast(90%);
    }
  }

  img {
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    filter: ${({ isOpen }) =>
      isOpen ? "invert(33%) sepia(97%) saturate(2000%) hue-rotate(260deg) brightness(90%) contrast(90%)" : "none"};
    width: 24px;
    height: 24px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  border: 1px solid #8338EC;
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
          <Select key={index} onClick={handleClick} isOpen={isOpen}>
            <p>{text}</p>
            <img src="icon.svg" alt="Dropdown arrow" width="24" height="24" />
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