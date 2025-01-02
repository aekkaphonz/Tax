import React from "react";
import "./button.css";

type SubmitButtonProps = {
  formData: any;
  onSubmit: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  return (
    <div className="btn__center">
      <button className="btn2" onClick={onSubmit}>
        Confirm and Submit
      </button>
    </div>
  );
};

export default SubmitButton;
