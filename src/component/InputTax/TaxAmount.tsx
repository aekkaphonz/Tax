import React from "react";
import "../CssFile/main.css";

interface TaxAmountProps {
  totalVat: string;
  setTotalVat: (value: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlurVat: () => void;
  removeComma: (value: string) => string;
}

const TaxAmount: React.FC<TaxAmountProps> = ({
  totalVat,
  onChange,
  setTotalVat,
  handleBlurVat,
  removeComma,
}) => {
  return (
    <div className="tax__header">
      <div>2. Total VAT to be remitted (7% of 1.)</div>
      <div>
        <input
          id="totalVat"
          type="text"
          value={totalVat}
          onChange={onChange}
          className="input__field"
          placeholder="THB"
          onFocus={() => setTotalVat(removeComma(totalVat))}
          onBlur={handleBlurVat}
        />
      </div>
    </div>
  );
};

export default TaxAmount;
