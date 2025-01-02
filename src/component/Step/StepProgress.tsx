import React, { useState } from "react";
import "./step.css";
import "../Button/button.css";
import Progress from "../Progress";


const message = ['1','2']

export const StepProgress = () => {
  return <Multi />;
};

function Multi() {

  const [step,setStep] = useState(1);
  const totalSteps:number = 2

  function handlePrev(){
    if(step >1)setStep((step) =>step-1);
  }
  function handleNext(){
    if(step <2)setStep((step) =>step+1);
  }
  return (
    <div className="container">
      <div className="progress__container">
        <Progress totalSteps={totalSteps} step = {step} className='progress active' />
        <div className={`${step >=1 ?"circle active":'circle'}`}>1</div>
        
        <div className={`${step >=2 ?"circle active":'circle'}`}>2</div>
       
      </div>
      <div className="text__circle">
      <div>input Detail</div>
      <div>Review & Confirm</div>
      </div>
      {/* <div className="content">
        <Message step = {step}/>
      </div> */}
      {/* <div className="btns">
        <button className="btn disabled" onClick={handlePrev}>Prev</button>
        <button className="btn" onClick={handleNext}>Next</button>
      </div> */}
    </div>
  );
}

function Message({step} :{step:number}){
  return<h2>{message[step - 1]}</h2>
}

export default StepProgress;
