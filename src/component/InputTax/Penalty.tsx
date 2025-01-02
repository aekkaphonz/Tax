import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import "../CssFile/main.css";


type PenaltyProps = {
  penalty: string;
};

const Penalty: React.FC<PenaltyProps> = ({ penalty }) => {
  return (
    <div className="tax__header">
      <div>
        4. Penalty <FaCircleQuestion />
      </div>
      <div>
        <input
          type="text"
          value={penalty}
          placeholder="0.00THB"
          className="input__field-read"
          readOnly
        />
      </div>
    </div>
  );
};

export default Penalty;
