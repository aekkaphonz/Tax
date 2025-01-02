import React from "react";
import "./step.css";
import "../Button/button.css";
import Progress from "./Progress";

interface StepProgressProps {
  step: number;
  totalSteps: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ step, totalSteps }) => {
  return (
    <div className="container">
      <div className="progress__container">
        <Progress totalSteps={totalSteps} step={step} className="progress active" />
        <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
        <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
      </div>
      <div className="text__circle">
        <div>Input Detail</div>
        <div>Review & Confirm</div>
      </div>
    </div>
  );
};

export default StepProgress;
