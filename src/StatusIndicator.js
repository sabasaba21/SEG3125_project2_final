import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StatusIndicator = ({ currentStep }) => {
  // Calculate the progress percentage based on the current step
  const stepPercentages = {
    donationAmount: 33,
    yourInformation: 66,
    paymentInfo: 100
  };

  return (
    <ProgressBar
      percent={stepPercentages[currentStep]}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <div style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}>
            Donation Amount
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}>
            Your Information
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}>
            Payment Info
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default StatusIndicator;
