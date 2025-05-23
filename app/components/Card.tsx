"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import PriorityButton from "../components/Buttons/PriorityButton";
import CustomButton from "../components/Buttons/CustomButton";
import Image from "next/image";

type Border = "pink" | "red" | "blue" | "yellow";
type Color = "pink" | "orange" | "blue" | "yellow";
type Employee = {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  department: {
    name: string;
  };
};

type Priority = {
  name: "high" | "medium" | "low";
};
type TaskType = {
  id: number;
  name: string;
  description: string;
  due_date: string;
  priority: Priority;
  employee: Employee;
  total_comments: number;
  department: {
    name: "დიზაინი" | "მარკეტინგი" | "ლოგისტიკა" | "ინფ.ტექ.";
  };
};

// Styled components for individual card
const CardContainer = styled(Link)<{ border: Border }>`
  width: 381px;
  height: 217px;
  border-radius: 15px;
  gap: 28px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid
    ${({ border }) => {
      switch (border) {
        case "pink":
          return "rgba(255, 0, 110, 1)";
        case "red":
          return "rgba(251, 86, 7, 1)";
        case "blue":
          return "rgba(58, 134, 255, 1)";
        case "yellow":
          return "rgba(247, 188, 48, 1)";
        default:
          return "rgba(206, 212, 218, 1)";
      }
    }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Date = styled.div`
  font-family: FiraGO;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  color: black;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-family: FiraGO;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(25, 25, 25, 1);
`;

const Description = styled.p`
  color: rgba(25, 25, 25, 1);
  font-family: FiraGO;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled(Image)`
  height: 24px;
  width: 24px;
  border-radius: 50%;
`;

const EmployeeName = styled.p`
  color: rgba(13, 15, 16, 1);
  font-family: FiraGO;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: FiraGO;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(25, 25, 25, 1);
  margin-left: auto;
`;

const Fallback = styled.div`
  width: 381px;
  height: 217px;
  border-radius: 15px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(206, 212, 218, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(25, 25, 25, 1);
  font-family: FiraGO;
  font-weight: 400;
  font-size: 14px;
`;

// Styled component for the grid
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-inline: 120px;
  padding-top: 79px;
  justify-content: space-between;
`;

// Sample data for rendering multiple cards
const sampleTasks: TaskType[] = [
  {
    id: 1,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "high" },
    employee: {
      id: 1,
      name: "John",
      surname: "Doe",
      avatar: "/images/avatar.png",
      department: { name: "Design" },
    },
    total_comments: 8,
    department: { name: "დიზაინი" },
  },
  {
    id: 2,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "medium" },
    employee: {
      id: 2,
      name: "Jane",
      surname: "Smith",
      avatar: "/images/avatar.png",
      department: { name: "Marketing" },
    },
    total_comments: 5,
    department: { name: "მარკეტინგი" },
  },
  {
    id: 3,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "low" },
    employee: {
      id: 3,
      name: "Alex",
      surname: "Johnson",
      avatar: "/images/avatar.png",
      department: { name: "Logistics" },
    },
    total_comments: 3,
    department: { name: "ლოგისტიკა" },
  },
  {
    id: 4,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "high" },
    employee: {
      id: 4,
      name: "Emily",
      surname: "Brown",
      avatar: "/images/avatar.png",
      department: { name: "IT" },
    },
    total_comments: 8,
    department: { name: "ინფ.ტექ." },
  },
  {
    id: 5,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "medium" },
    employee: {
      id: 5,
      name: "Michael",
      surname: "Lee",
      avatar: "/images/avatar.png",
      department: { name: "Design" },
    },
    total_comments: 5,
    department: { name: "დიზაინი" },
  },
  {
    id: 6,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "low" },
    employee: {
      id: 6,
      name: "Sarah",
      surname: "Wilson",
      avatar: "/images/avatar.png",
      department: { name: "Marketing" },
    },
    total_comments: 3,
    department: { name: "მარკეტინგი" },
  },
  {
    id: 7,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "high" },
    employee: {
      id: 7,
      name: "David",
      surname: "Clark",
      avatar: "/images/avatar.png",
      department: { name: "Logistics" },
    },
    total_comments: 8,
    department: { name: "ლოგისტიკა" },
  },
  {
    id: 8,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "medium" },
    employee: {
      id: 8,
      name: "Laura",
      surname: "Martinez",
      avatar: "/images/avatar.png",
      department: { name: "IT" },
    },
    total_comments: 5,
    department: { name: "ინფ.ტექ." },
  },
  {
    id: 9,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "low" },
    employee: {
      id: 9,
      name: "Chris",
      surname: "Taylor",
      avatar: "/images/avatar.png",
      department: { name: "Design" },
    },
    total_comments: 3,
    department: { name: "დიზაინი" },
  },
  {
    id: 10,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "high" },
    employee: {
      id: 10,
      name: "Emma",
      surname: "White",
      avatar: "/images/avatar.png",
      department: { name: "Marketing" },
    },
    total_comments: 8,
    department: { name: "მარკეტინგი" },
  },
  {
    id: 11,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "medium" },
    employee: {
      id: 11,
      name: "James",
      surname: "Harris",
      avatar: "/images/avatar.png",
      department: { name: "Logistics" },
    },
    total_comments: 5,
    department: { name: "ლოგისტიკა" },
  },
  {
    id: 12,
    name: "Redberry-ში ყველაზე მაგარი გუნდი",
    description:
      "მთავარი ამოცანაა გავაკეთოთ ისეთი დიზაინი, რომელიც მაქსიმალურად მოერგება Redberry-ს",
    due_date: "2022-07-22",
    priority: { name: "low" },
    employee: {
      id: 12,
      name: "Olivia",
      surname: "Lewis",
      avatar: "/images/avatar.png",
      department: { name: "IT" },
    },
    total_comments: 3,
    department: { name: "ინფ.ტექ." },
  },
];

// Component to render a single card
const SingleCard = ({
  color,
  border,
  task,
}: {
  color: Color;
  border: Border;
  task: TaskType;
}) => {
  const {
    id,
    name,
    description,
    due_date,
    priority,
    employee,
    total_comments,
  } = task;

  return (
    <CardContainer href={`/taskpage/${id}`} border={border}>
      <Head>
        <Buttons>
          <PriorityButton priority={priority.name} size="small" />
          <CustomButton color={color} text={task.department.name} />
        </Buttons>
      </Head>
      <Middle>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Middle>
      <Bottom>
        <Avatar
          src={employee.avatar}
          alt={`${employee.name} ${employee.surname}`}
          width={24}
          height={24}
        />
        <EmployeeName>
          {employee.name} {employee.surname}
        </EmployeeName>
        <Comments>
          <Image src="Comments.svg" alt="" width={16} height={16} />
          <p>{total_comments}</p>
        </Comments>
      </Bottom>
    </CardContainer>
  );
};

// Main Card component that renders either a single card or a grid of cards
const Card = ({
  color,
  border,
  task,
}: {
  color?: Color;
  border?: Border;
  task?: TaskType;
}) => {
  // If a specific task is provided, render only that card
  if (task && color && border) {
    return <SingleCard color={color} border={border} task={task} />;
  }

  // Otherwise, render the grid of sample tasks
  if (!sampleTasks || sampleTasks.length === 0) {
    return <div>No tasks available to display</div>;
  }

  return (
    <GridContainer>
      {sampleTasks.map((task) => {
        const colorMap: { [key: number]: Color } = {
          1: "pink",
          2: "orange",
          3: "blue",
          4: "yellow",
          5: "pink",
          6: "orange",
          7: "blue",
          8: "yellow",
          9: "pink",
          10: "orange",
          11: "blue",
          12: "yellow",
        };
        const borderMap: { [key: number]: Border } = {
          1: "pink",
          2: "red",
          3: "blue",
          4: "yellow",
          5: "pink",
          6: "red",
          7: "blue",
          8: "yellow",
          9: "pink",
          10: "red",
          11: "blue",
          12: "yellow",
        };
        return (
          <SingleCard
            key={task.id}
            color={colorMap[task.id] || "pink"}
            border={borderMap[task.id] || "pink"}
            task={task}
          />
        );
      })}
    </GridContainer>
  );
};

export default Card;
