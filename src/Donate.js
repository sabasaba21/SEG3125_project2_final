import React, { useState } from 'react';
import StepProgressBar from './StepProgressBar';
import DonationAmount from './DonationAmount';
import YourInformation from './YourInformation';
import PaymentInfo from './PaymentInfo';
import Confirm from './Confirm';
import './Donate.css';

const steps = [
  'donationAmount',
  'yourInformation',
  'paymentInfo',
  'confirm',
];

const Donate = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const renderStepComponent = () => {
    switch (steps[currentStepIndex]) {
      case 'donationAmount':
        return <DonationAmount handleNextStep={handleNextStep} />;
      case 'yourInformation':
        return <YourInformation handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />;
      case 'paymentInfo':
        return <PaymentInfo handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />;
      case 'confirm':
        return <Confirm handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <StepProgressBar currentStep={steps[currentStepIndex]} />
      {renderStepComponent()}
    </div>
  );
}

export default Donate;
