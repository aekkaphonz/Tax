import React from "react";
import { useNavigate } from "react-router-dom";

type ButtonClickProps = {
  isValid: boolean;
  formData: any;
  onNext: () => void;
  onPrev: () => void;
};

const ButtonClick: React.FC<ButtonClickProps> = ({ isValid, formData, onNext, onPrev }) => {
  const navigate = useNavigate();

  const goBack = () => {
    onPrev(); // ย้อนกลับไป Step ก่อนหน้า
    const currentPath = "/tax-fil-detail";

    if (currentPath === "/tax-fil-detail") {
      return;
    }

    navigate(-1);
  };

  const goNext = () => {
    if (!isValid) {
      alert("Invalid Data");
      return;
    }
    onNext(); // ไปยัง Step ถัดไป
    navigate("/tax-fil-detail", { state: formData });
  };

  return (
    <div className="btns">
      <button className="btn1" onClick={goBack}>
        Back
      </button>
      <button className="btn2" onClick={goNext}>
        Next
      </button>
    </div>
  );
};

export default ButtonClick;
