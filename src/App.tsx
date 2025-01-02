import "./App.css";
import Filing from "./component/FilingForm/FilingForm";
import StepProgress from "./component/Step/StepProgress";
import ButtonClick from "./component/Button/buttonClick";
import Additional from "./component/Additional/additionalFiling";
import InputDetail from "./component/Radio/RadioGroup";
import TaxFilDetail from "./component/Confirm&Review/Confirm&Review";
import SubmitButton from "./component/Button/Submitbotton";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState<any>({}); 

  const handleSubmit = () => {
    console.log("Submitted Tax Data:", formData);
    alert("Data Submitted Successfully!");
  };

  return (
    <div>
      <BrowserRouter>
        <div>
          <h1 className="text-3xl font-bold mt-10 text-center">
            Submit Tax Filing
          </h1>
          <StepProgress />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Filing onValidationCheck={setIsValid}
                  taxData={setFormData} />
                  <ButtonClick isValid={isValid} formData={formData} />
                </div>
              }
            />
            <Route
              path="/tax-fil-detail"
              element={
                <div>
                  <TaxFilDetail />
                  <SubmitButton formData={formData} onSubmit={handleSubmit} />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
