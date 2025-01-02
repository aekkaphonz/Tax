import React from "react";
import "../Additional/main.css";

type TotalAmountProps = {
  totalAmount: string;
};

const TotalAmount: React.FC<TotalAmountProps> = ({ totalAmount }) => {
  return (
    <>
      <div className="tax__header">
        <div>
          5. Total amount of VAT, surcharge, and Penalty to be remitted
        </div>
        <div>
          <input
            type="text"
            value={totalAmount}
            placeholder="0.00THB"
            className="input__field-read"
          />
        </div>
      </div>
      <div>(2+3+4)</div>
    </>
  );
};

export default TotalAmount;
