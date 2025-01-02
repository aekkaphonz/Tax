import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";

type RadioGroupProps = {
  selectedType: string;
  onRadioChange: (value: string) => void;
};


const RadioGroup: React.FC<RadioGroupProps> = ({ selectedType, onRadioChange }) => (
  
  <div className="flex space-x-6 mt-4 gap-8">
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        name="filing"
        value="0"
        id="ordinary"
        className="radio-input"
        checked={selectedType === "0"}
        onChange={(e) => onRadioChange(e.target.value)}
      />
      <label className="form__label">Ordinary Filing</label>
      <FaCircleQuestion />
    </div>
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        name="filing"
        value="1"
        id="additional"
        className="radio-input"
        checked={selectedType === "1"}
        onChange={(e) => onRadioChange(e.target.value)}
      />
      <label htmlFor="additional" className="form__label">
        Additional Filing
      </label>
      <FaCircleQuestion />
    </div>
  </div>
);

export default RadioGroup;
