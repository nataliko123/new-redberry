"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

type Color = "yellow" | "orange" | "pink" | "blue";

type Status = {
  id: number;
  name: string;
};

type Props = {
  color: Color;
  statusList: Status[];
};

const ProgressButton: React.FC<Props> = ({ color, statusList }) => {
  const getColorText = (color: Color) => {
    switch (color) {
      case "yellow":
        return (
          statusList.find((status) => status.name === "დასაწყები")?.name ||
          "დასაწყები"
        );
      case "orange":
        return (
          statusList.find((status) => status.name === "პროგრესში")?.name ||
          "პროგრესში"
        );
      case "pink":
        return (
          statusList.find((status) => status.name === "მზად ტესტირებისთვის")
            ?.name || "მზად ტესტირებისთვის"
        );
      case "blue":
        return (
          statusList.find((status) => status.name === "დასრულებული")?.name ||
          "დასრულებული"
        );
      default:
        return "დასაწყები";
    }
  };

  const text = getColorText(color);

  return <Button color={color}>{text}</Button>;
};

const ProgressButtonList: React.FC = () => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const response = await fetch("https://momentum.redberryinternship.ge/api/statuses", {
          headers: {
            Authorization: `Bearer 9ef99feb-6ef7-4cf6-b963-bc569b3435b3`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Status[] = await response.json();
        setStatuses(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch statuses");
        setLoading(false);
      }
    };

    fetchStatuses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Map status names to colors
  const statusColorMap: { [key: string]: Color } = {
    "დასაწყები": "yellow",
    "პროგრესში": "orange",
    "მზად ტესტირებისთვის": "pink",
    "დასრულებული": "blue",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {statuses.map((status) => (
        <ProgressButton
          key={status.id}
          color={statusColorMap[status.name] || "yellow"}
          statusList={statuses}
        />
      ))}
    </div>
  );
};

const Button = styled.div<{ color: Color }>`
  border: none;
  width: 381px;
  height: 54px;
  border-radius: 10px;
  gap: 10px;
  padding-top: 15px;
  padding-bottom: 15px;

  font-family: "FiraGO", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => {
    switch (color) {
      case "yellow":
        return "#f7bc30";
      case "orange":
        return "#fb5607";
      case "pink":
        return "#ff006e";
      case "blue":
        return "#3a86ff";
      default:
        return "#f7bc30";
    }
  }};
`;

export default ProgressButtonList;