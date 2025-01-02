import "./App.css";
import Filing from "./component/FilingForm/FilingForm";
import StepProgress from "./component/Step/StepProgress";
import ButtonClick from "./component/Button/buttonClick";

import TaxFilDetail from "./component/Confirm&Review/Confirm&Review";
import SubmitButton from "./component/Button/Submitbotton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };
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
          <StepProgress step={step} totalSteps={totalSteps} />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Filing
                    onValidationCheck={setIsValid}
                    taxData={setFormData}
                  />
                  <ButtonClick
                    isValid={isValid}
                    formData={formData}
                    onNext={handleNext}
                    onPrev={handlePrev}
                  />
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
