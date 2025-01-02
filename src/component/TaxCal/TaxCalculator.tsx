import { useState } from "react";
const TaxCalculator = ({ selectedType }: { selectedType: string }) => {
  const [amountTax, setAmountTax] = useState<string>("");
  const [totalVat, setTotalVat] = useState<string>("");
  const [surcharge, setSurcharge] = useState<string>("");
  const [penalty, setPenalty] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState<string>("");

  const formatCurrency = (value: number): string => {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const removeComma = (value: string): string =>
    value.replace(/,/g, "").replace(/ THB$/, "");

  const validateNumber = (value: string): string => {
    const validValue = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1");
    const decimalCheck = validValue.match(/^\d+(\.\d{0,2})?/);
    return decimalCheck ? decimalCheck[0] : "";
  };

  const handleChangeTax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = validateNumber(e.target.value);
    setAmountTax(rawValue);
  };

  const handleBlurTax = () => {
    const rawValue = parseFloat(removeComma(amountTax));
    if (rawValue) {
      const vatValue = Math.round(rawValue * 0.07 * 1000) / 1000;

      setAmountTax(`${formatCurrency(rawValue)} THB`);
      setTotalVat(`${formatCurrency(vatValue)} THB`);

      // แยกการแสดงผลตาม selectedType
      if (selectedType === "0") {
        // หน้า Ordinary
        console.log("Amount Tax:", rawValue);
        console.log("VAT:", vatValue);
      } else if (selectedType === "1") {
        // หน้า Additional
        const surchargeValue = Math.round(rawValue * 0.1 * 1000) / 1000;
        const penaltyValue = 200.0;
        const total = vatValue + surchargeValue + penaltyValue;

        setSurcharge(`${formatCurrency(surchargeValue)} THB`);
        setPenalty(`${formatCurrency(penaltyValue)} THB`);
        setTotalAmount(`${formatCurrency(total)} THB`);

        console.log("Amount Tax:", rawValue);
        console.log("VAT:", vatValue);
        console.log("Surcharge:", surchargeValue);
        console.log("Penalty:", penaltyValue);
        console.log("Total Amount:", total);
      }
    }
  };

  const handleChangeVat = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = validateNumber(e.target.value);
    setTotalVat(rawValue);
  };

  const handleBlurVat = () => {
    const rawTax = parseFloat(removeComma(amountTax));
    const rawVat = parseFloat(removeComma(totalVat));
    const calculatedVat = Math.round(rawTax * 0.07 * 1000) / 1000;
    if (!isNaN(rawVat)) {
      if (Math.abs(rawVat - calculatedVat) > 20.0) {
        alert("Invalid Tax");
        setTotalVat(`${formatCurrency(calculatedVat)} THB`);
      } else {
        setTotalVat(`${formatCurrency(rawVat)} THB`);
      }
    }
  };

  return {
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
  };
};

export default TaxCalculator;
