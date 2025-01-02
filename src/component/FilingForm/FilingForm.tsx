import { useEffect, useState } from "react";
import "../Additional/main.css";

import TaxCalculator from "../TaxCal/TaxCalculator";
import VATMonthSelector from "../Dropdown/VATMonthSelector";
import VATYearSelector from "../Dropdown/VATYearSelector";
import SaleAmount from "../InputTax/SaleAmount";
import TaxAmount from "../InputTax/TaxAmount";
import Surcharge from "../InputTax/Surcharge";
import Penalty from "../InputTax/Penalty";
import TotalAmount from "../InputTax/TotalAmount";
import { useNavigate } from "react-router-dom";
import RadioGroup from "../Radio/RadioGroup";
import SaleAmountA from "../InputTax/SaleAmountA";

type FilingForms = {
  onValidationCheck: (isValid: boolean) => void;
  taxData: (data: any) => void;
};
function FilingForm({ onValidationCheck , taxData}: FilingForms) {
 

  const [selectedType, setSelectedType] = useState("0");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const {
    amountTax,
    totalVat,
    surcharge,
    penalty,
    totalAmount,
    handleChangeTax,
    handleBlurTax,
    handleChangeVat,
    handleBlurVat,
    setAmountTax,
    setTotalVat,
    removeComma,
    setSurcharge,
    setPenalty,
    setTotalAmount,
  } = TaxCalculator({ selectedType });

  useEffect(() => {
    setAmountTax("");
    setTotalVat("");
    setSurcharge("");
    setPenalty("");
    setTotalAmount("");
  }, [selectedType]);

  useEffect(() => {
    taxData({
      filingType: selectedType,
      vatMonth: selectedMonth,
      vatYear: selectedYear,
      taxableValue: amountTax,
      vatValue: totalVat,
      surcharge: surcharge,
      penalty: penalty,
      totalAmount: totalAmount
    });
    
  }, [selectedType, selectedMonth, selectedYear, amountTax, totalVat, surcharge, penalty, totalAmount]);

  const validateForm = () => {
    if (!selectedMonth || !selectedYear || !amountTax || !totalVat) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (onValidationCheck) {
      onValidationCheck(validateForm());
    }
  }, [selectedMonth, selectedYear, amountTax, totalVat, onValidationCheck]);

  return (
    <div className="border-2 rounded-md border-black filing__page">
      <div className="title__head">1. Tax Filing Detail</div>
      <hr className="line__hr" />
      <div className="subhead__title">
        Type of filing <span className="last-letter">*</span>
      </div>
      <RadioGroup selectedType={selectedType} onRadioChange={setSelectedType} />

      {selectedType === "0" && (
        <div className="filing__content">
          <div className="vat__selectors">
            <div>
              <div className="subhead__title">
                VAT Month <span className="last-letter">*</span>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <VATMonthSelector
                  month={selectedMonth}
                  onMonthChange={setSelectedMonth}
                />
                <VATYearSelector
                  year={selectedYear}
                  onYearChange={setSelectedYear}
                />
              </div>
            </div>
          </div>

          <div className="tax__header pt-7">
            <div className="title__head">2. Tax Computer</div>
            <div className="view__link">View Exchange Rate</div>
          </div>
          <hr className="line__hr" />
          <div className="sub__title">
            Provider total value taxable electronic service
            <span className="last-letter">*</span>
          </div>
          <div>
            <SaleAmount
              amountTax={amountTax}
              onChange={handleChangeTax}
              setAmountTax={setAmountTax}
              handleBlurTax={handleBlurTax}
              removeComma={removeComma}
            />
            <TaxAmount
              totalVat={totalVat}
              onChange={handleChangeVat}
              setTotalVat={setTotalVat}
              handleBlurVat={handleBlurVat}
              removeComma={removeComma}
            />
          </div>
        </div>
      )}

      {selectedType === "1" && (
        <div className="filing__content">
          <div className="vat__selectors">
            <div>
              <div className="subhead__title">
                VAT Month <span className="last-letter">*</span>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <VATMonthSelector
                  month={selectedMonth}
                  onMonthChange={setSelectedMonth}
                />
                <VATYearSelector
                  year={selectedYear}
                  onYearChange={setSelectedYear}
                />
              </div>
            </div>
            <div className="type__section ml-8">
              <div className="subhead__title">
                Type <span className="last-letter">*</span>
              </div>
              <select className="custom__select">
                <option>On-Time</option>
              </select>
            </div>
          </div>

          <div className="tax__header pt-7">
            <div className="title__head">2. Tax Computer</div>
            <div className="view__link">View Exchange Rate</div>
          </div>

          <hr className="line__hr" />
          <div className="sub__title">
            Provider total value taxable electronic service
            <span className="last-letter">*</span>
          </div>

          <div>
            <SaleAmountA
              amountTax={amountTax}
              onChange={handleChangeTax}
              setAmountTax={setAmountTax}
              handleBlurTax={handleBlurTax}
              removeComma={removeComma}
            />
            <TaxAmount
              totalVat={totalVat}
              onChange={handleChangeVat}
              setTotalVat={setTotalVat}
              handleBlurVat={handleBlurVat}
              removeComma={removeComma}
            />
          </div>

          <div className="sub__title">
            In case of late filing and payment, or additional filing
          </div>

          <div>
            <Surcharge surcharge={surcharge} />
            <Penalty penalty={penalty} />
            <TotalAmount totalAmount={totalAmount} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FilingForm;
