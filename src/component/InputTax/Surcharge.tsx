import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import "../Additional/main.css";

type SurchargeProps = {
  surcharge: string;
};

const Surcharge: React.FC<SurchargeProps> = ({ surcharge }) => {
  return (
    <div className="tax__header">
      <div>
        3. Surcharge <FaCircleQuestion />
      </div>
      <div>
        <input
          type="text"
          value={surcharge}
          placeholder="0.00THB"
          className="input__field-read"
          readOnly
        />
      </div>
    </div>
  );
};

export default Surcharge;
