import { useState } from "react";


import TaxCalculator from "../TaxCal/TaxCalculator";
import { FaCircleQuestion } from "react-icons/fa6";

function additional() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedType, setSelectedType] = useState("0");
  const years = [2021, 2022, 2023, 2024];
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
  } = TaxCalculator({ selectedType });


  return (
    <div className="border-2 rounded-md border-black filing__page">
      <div className="title__head">1. Tax Filing Detail</div>
      <hr className="line__hr" />
      <div className="subhead__title">
        Type of filing <span className="last-letter">*</span>
      </div>
      <div className="flex space-x-6 mt-4 gap-8">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filing"
            value="0"
            id="ordinary"
            className="radio-input"
          />
          <label htmlFor="ordinary" className="form__label">
            Ordinary Filing
          </label>
          <FaCircleQuestion />
        </div>
        <div className="flex items-center space-x-2 ">
          <input
            type="radio"
            name="filing"
            value="1"
            id="additional"
            className="radio-input"
          />
          <label htmlFor="additional" className="form__label">
            Additional Filing
          </label>
          <FaCircleQuestion />
        </div>
      </div>

      <div className="vat__selectors">
        <div>
          <div className="subhead__title">
            Tax Month <span className="last-letter">*</span>
          </div>
          <select className="custom__select mr-4">
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select className="custom__select">
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
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
      <div className="tax__header">
        <div className="title__head">2. Tax Computer</div>
        <div className="view__link">View Exchange Rate</div>
      </div>

      <hr className="line__hr" />
      <div className="sub__title">
        Provider total value taxable electronic service{" "}
        <span className="last-letter">*</span>
      </div>
      <div className="tax__header">
        <div>1. Under declared Thai taxable electronic service</div>
        <div>
          <input
            id="saleAmount"
            type="text"
            value={amountTax}
            onChange={handleChangeTax}
            className="input__field"
            placeholder="THB"
            onFocus={() => setAmountTax(removeComma(amountTax))}
            onBlur={handleBlurTax}
            style={{
              textAlign: "right",
            }}
          />
        </div>
      </div>
      <div className="tax__header">
        <div className=""> 2. Total VAT to be remitted (7% of 1.)</div>
        <div className="">
          <input
            id="totalVat"
            type="text"
            value={totalVat}
            onChange={handleChangeVat}
            className="input__field"
            placeholder="THB"
            onFocus={() => setTotalVat(removeComma(totalVat))}
            onBlur={handleBlurVat}
          />
        </div>
      </div>
      <div className="sub__title">
        In case of late filing and payment, or addition filing
      </div>
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

      <div className="tax__header">
        <div>5.Total amount of VAT, surcharge, and Penalty to be remitted </div>

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
    </div>
  );
}

export default additional;
