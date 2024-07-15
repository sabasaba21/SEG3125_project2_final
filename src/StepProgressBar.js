import React from 'react';
import './Donate.css';

const StepProgressBar = ({ currentStep }) => {
  const steps = ['donationAmount', 'yourInformation', 'paymentInfo', 'confirm'];
  const stepNames = ['Donation Amount', 'Your Information', 'Payment Information', 'Confirm'];

  return (
    <div className="step-progress-bar">
      {steps.map((step, index) => (
        <div key={step} className={`step ${currentStep === step ? 'active' : ''}`}>
          <div className="step-number">{index + 1}</div>
          <div className="step-name">{stepNames[index]}</div>
        </div>
      ))}
      <div className="progress-line">
        <div
          className="progress-line-fill"
          style={{
            width: `${(steps.indexOf(currentStep) / (steps.length - 1)) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default StepProgressBar;
