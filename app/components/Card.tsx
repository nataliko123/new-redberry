"use client";
import React from "react";
import styled from "styled-components";
import CustomButton from "./Buttons/CustomButton";
import PriorityButtons from "./Buttons/PriorityButton";
import Image from "next/image";

type Props = {
  priority: "high" | "medium" | "low";
  color: "pink" | "orange" | "blue" | "yellow";
  border: "pink" | "orange" | "blue" | "yellow";
  taskName: string;
  description: string;
  dueDate: string;
  employee?: {
    name: string;
    surname: string;
    avatar: string;
  };
  totalComments: number;
  departmentName: string;
};

// Styled Components
const Card = styled.div<{ border: string }>`
  width: 381px;
  height: 217px;
  border-radius: 15px;
  gap: 28px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid
    ${({ border }) =>
      border === "yellow"
        ? "rgba(247, 188, 48, 1)"
        : border === "orange"
        ? "rgba(251, 86, 7, 1)"
        : border === "pink"
        ? "rgba(255, 0, 110, 1)"
        : "rgba(58, 134, 255, 1)"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
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
  color: #212529;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-family: FiraGO;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #191919;
  }

  p {
    font-family: FiraGO;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #212529;
  }
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: FiraGO;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: rgba(25, 25, 25, 1);
`;

const AvatarPlaceholder = styled.div`
  width: 32px;
  height: 32px;
`;

const formatDate = (dateStr: string) => {
  if (!dateStr) return ""; // Fallback
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return ""; // Invalid date
  const months = [
    "იანვ",
    "თებ",
    "მარ",
    "აპრ",
    "მაი",
    "ივნ",
    "ივლ",
    "აგვ",
    "სექ",
    "ოქტ",
    "ნოემ",
    "დეკ",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

const TaskCard = ({
  priority,
  color,
  border,
  taskName,
  description,
  dueDate,
  employee,
  totalComments,
  departmentName,
}: Props) => {
  return (
    <Card border={border}>
      <Head>
        <Buttons>
          <PriorityButtons priority={priority} size="small" />
          <CustomButton color={color} text={departmentName} />
        </Buttons>
        <Date>{formatDate(dueDate)}</Date>
      </Head>

      <Middle>
        <h2>{taskName}</h2>
        <p>{description}</p>
      </Middle>

      <Bottom>
        {employee?.avatar ? (
          <Image
            src={employee.avatar}
            alt={`${employee.name} ${employee.surname}`}
            width={32}
            height={32}
          />
        ) : (
          <AvatarPlaceholder />
        )}

        <Comments>
          <Image src="/Comments.png" alt="comments" width={16} height={16} />
          <p>{totalComments}</p>
        </Comments>
      </Bottom>
    </Card>
  );
};

export default TaskCard;
