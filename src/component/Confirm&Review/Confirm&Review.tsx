import { useLocation } from "react-router-dom";
import "../CssFile/main.css";

function TaxFilDetail() {
  const location = useLocation();
  const {
    filingType,
    vatMonth,
    vatYear,
    taxableValue,
    vatValue,
    surcharge,
    penalty,
  } = location.state || {};

  const parseValue = (value: string): number => {
    if (!value) return 0;

    return parseFloat(value.replace(/,|THB/g, "").trim());
  };

  console.log("filingType received:", filingType);
  const filingTypeText =
    filingType === "Ordinary Filing"
      ? "Ordinary Filing"
      : filingType === "Additional Filing"
      ? "Additional Filing"
      : "Unknown Filing Type";

  const totalAmountPayable =
    filingType === "0"
      ? parseValue(vatValue)
      : parseValue(vatValue) + parseValue(surcharge) + parseValue(penalty);

  const formattedTotalAmountPayable =
    new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(totalAmountPayable) + " THB";
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const monthName =
    months.find((month) => month.label === vatMonth)?.label || "Unknown Month";
  console.log("vatMonth received:", vatMonth);
  console.log("monthName found:", monthName);

  return (
    <div>
      <form className="form__page filing__page">
        <div className="title__head">Tax Filing Detail</div>
        <hr className="line__hr" />

        <div className="detailTax__row">
          <span className="detail-label">Type of filing</span>
          <span className="detail-value">{filingTypeText}</span>
        </div>

        <div className="detailTax__row">
          <span className="detail-label">VAT Month</span>
          <span className="detail-value">
            {monthName} {vatYear}
          </span>
        </div>

        <div className="title__head mt-4">Tax Computation</div>
        <hr className="line__hr" />

        <div className="detail__row">
          <span className="detail-label">
            Total value of taxable electronic service exclusive of VAT
          </span>
          <span className="detail-value">{taxableValue}</span>
        </div>

        <div className="detail__row">
          <span className="detail-label">
            Total VAT to be remitted
            <div className="text-sm text-gray-500">
              (7% of Total value of taxable electronic service exclusive of VAT)
            </div>
          </span>
          <span className="detail-value">{vatValue}</span>
        </div>

        <div className="detail__row">
          <span className="detail-label">Total Amount Payable</span>
          <span className="detail-value Tax__value">
            {formattedTotalAmountPayable}
          </span>
        </div>

        <div className="title__head mt-8">Declaration</div>
        <hr className="line__hr" />
        <div>
          I hereby certify that information given above are true and correct and
          agree to be bound by such information.
        </div>
      </form>
    </div>
  );
}

export default TaxFilDetail;
