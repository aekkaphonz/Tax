import React from "react";

interface YearSelectorProps {
  year: string;
  onYearChange: (year: string) => void; 
}

const YearSelector: React.FC<YearSelectorProps> = ({ year, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = [];
for (let i = 2020; i <= currentYear; i++) {
  years.push(i);
}


  return (
    <select
    className="custom__select"
    value={year}
    onChange={(e) => onYearChange(e.target.value)}
  >
    <option value="">Select Year</option>
    {years.map((y) => (
      <option key={y} value={y}>
        {y}
      </option>
    ))}
  </select>
  );
};

export default YearSelector;
