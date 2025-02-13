import React from "react";
import "../CssFile/main.css";



interface SaleAmountProps {
    amountTax: string;
    setAmountTax: (value: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlurTax: () => void;
    removeComma: (value: string) => string;
  }
  

const SaleAmount: React.FC<SaleAmountProps> = ({
  amountTax,
  onChange,
  setAmountTax,
  handleBlurTax,
  removeComma,
}) => {
    return (
        <div className="tax__header">
          <div>1. Under declared Thai taxable electronic service</div>
          <div>
            <input
              id="saleAmount"
              type="text"
              value={amountTax}
              onChange={onChange}
              className="input__field"
              placeholder="THB"
              onFocus={() => setAmountTax(removeComma(amountTax))}
              onBlur={handleBlurTax}
              style={{ textAlign: "right" }}
            />
          </div>
        </div>
  );
};

export default SaleAmount;
