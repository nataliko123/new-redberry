"use client";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Interfaces
interface Department {
  id: number;
  name: string;
}

interface Priority {
  id: number;
  name: string;
  icon: string;
}

interface Employee {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  department_id: number;
  department: {
    id: number;
    name: string;
  };
}

// Styled components
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

const Select = styled.div<{ $isOpen: boolean }>`
  display: flex;
  padding: 12px 0;
  gap: 8px;
  font-family: FiraGO, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
  flex: 1;
  color: ${({ $isOpen }) => ($isOpen ? "#8338EC" : "#0D0F10")};

  svg {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  &:hover:not([data-is-open="true"]) {
    color: #8338ec;
  }

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
  margin-top: 10px;
`;

const SelectedItem = styled.div`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 15px;
`;

// Main component
const Selects = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<{
    departments: string[];
    priorities: string[];
    employees: string[];
  }>({ departments: [], priorities: [], employees: [] });

  const [checkedItems, setCheckedItems] = useState<{
    departments: boolean[];
    priorities: boolean[];
    employees: boolean[];
  }>({
    departments: [],
    priorities: [],
    employees: [],
  });

  const [departments, setDepartments] = useState<Department[]>([]);
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["დეპარტამენტი", "პრიორიტეტი", "თანამშრომელი"];

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch(
          "https://momentum.redberryinternship.ge/api/departments",
          {
            headers: {
              Authorization: "Bearer 9ef99feb-6ef7-4cf6-b963-bc569b3435b3",
            },
          }
        );
        const data: Department[] = await res.json();
        setDepartments(data);
      } catch (error) {
        console.error("Departments fetch error:", error);
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchPriorities = async () => {
      try {
        const res = await fetch(
          "https://momentum.redberryinternship.ge/api/priorities",
          {
            headers: {
              Authorization: "Bearer 9ef99feb-6ef7-4cf6-b963-bc569b3435b3",
            },
          }
        );
        const data: Priority[] = await res.json();
        setPriorities(data);
      } catch (error) {
        console.error("Priorities fetch error:", error);
      }
    };
    fetchPriorities();
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch(
          "https://momentum.redberryinternship.ge/api/employees",
          {
            headers: {
              Authorization: "Bearer 9ef99feb-6ef7-4cf6-b963-bc569b3435b3",
            },
          }
        );
        const data: Employee[] = await res.json();
        setEmployees(data);
      } catch (error) {
        console.error("Employees fetch error:", error);
      }
    };
    fetchEmployees();
  }, []);

  useEffect(() => {
    setCheckedItems({
      departments: new Array(departments.length).fill(false),
      priorities: new Array(priorities.length).fill(false),
      employees: new Array(employees.length).fill(false),
    });
  }, [departments.length, priorities.length, employees.length]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (option: string) => {
    setOpenDropdown(openDropdown === option ? null : option);
  };

  const handleCheckboxChange = (index: number, category: string) => {
    const updatedChecked = { ...checkedItems };
    const updatedSelected = { ...selectedItems };

    if (category === "departments") {
      updatedChecked.departments[index] = !updatedChecked.departments[index];
      updatedSelected.departments = departments
        .filter((_, i) => updatedChecked.departments[i])
        .map((d) => d.name);
    } else if (category === "priorities") {
      updatedChecked.priorities[index] = !updatedChecked.priorities[index];
      updatedSelected.priorities = priorities
        .filter((_, i) => updatedChecked.priorities[i])
        .map((p) => p.name);
    } else if (category === "employees") {
      updatedChecked.employees[index] = !updatedChecked.employees[index];
      updatedSelected.employees = employees
        .filter((_, i) => updatedChecked.employees[i])
        .map((e) => `${e.name} ${e.surname}`);
    }

    setCheckedItems(updatedChecked);
    setSelectedItems(updatedSelected);
  };

  const getCurrentData = () => {
    if (openDropdown === "დეპარტამენტი") {
      return {
        data: departments.map((d) => d.name),
        category: "departments",
        checks: checkedItems.departments,
      };
    } else if (openDropdown === "პრიორიტეტი") {
      return {
        data: priorities.map((p) => p.name),
        category: "priorities",
        checks: checkedItems.priorities,
      };
    } else if (openDropdown === "თანამშრომელი") {
      return {
        data: employees.map((e) => `${e.name} ${e.surname}`),
        category: "employees",
        checks: checkedItems.employees,
      };
    }
    return { data: [], category: "", checks: [] };
  };

  const { data: currentData, category, checks } = getCurrentData();

  return (
    <Wrapper>
      <SelectsContainer ref={dropdownRef}>
        {options.map((text, index) => (
          <Select
            key={index}
            onClick={() => handleClick(text)}
            $isOpen={openDropdown === text}
            data-is-open={openDropdown === text}
          >
            <p>{text}</p>
            <svg viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </Select>
        ))}
        {openDropdown && (
          <Dropdown>
            {currentData.map((item, idx) => (
              <Option key={idx}>
                <input
                  type="checkbox"
                  checked={checks[idx] || false}
                  onChange={() => handleCheckboxChange(idx, category)}
                />
                <span>{item}</span>
              </Option>
            ))}
          </Dropdown>
        )}
      </SelectsContainer>

      <SelectedItems>
        {[
          ...selectedItems.departments,
          ...selectedItems.priorities,
          ...selectedItems.employees,
        ].map((item) => (
          <SelectedItem key={item}>{item}</SelectedItem>
        ))}
      </SelectedItems>
    </Wrapper>
  );
};

export default Selects;
