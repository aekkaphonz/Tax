import React from "react";

interface MonthSelectorProps {
  month: string;
  onMonthChange: (month: string) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  month,
  onMonthChange,
}) => {
  const currentMonth = new Date().getMonth() + 1;

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  return (
    <select
      className="custom__select"
      value={month}
      onChange={(e) => onMonthChange(e.target.value)}
    >
      <option value="">Select Month</option>
      {months.map(({ value, label }) => (
        <option
          key={value}
          value={value}
          disabled={parseInt(value) > currentMonth}
        >
          {label}
        </option>
      ))}
    </select>
  );
};

export default MonthSelector;
