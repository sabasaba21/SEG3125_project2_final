import React, { useState } from 'react';
import './Donate.css';
import Button from 'react-bootstrap/Button';

const DonationAmount = ({ handleNextStep }) => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [errors, setErrors] = useState({});

  const handleAmount = (amountValue) => {
    setAmount(amountValue);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    setAmount('');
  };

  const validateForm = (value) => {
    if (!value.trim()) {
      return "Donation amount is required";
    }
    if (isNaN(value)) {
      return "Donation amount must be a number";
    }
    if (Number(value) <= 0) {
      return "Donation amount must be greater than zero";
    }
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amountError = validateForm(amount || customAmount);
    if (amountError) {
      setErrors({ amount: amountError });
    } else {


      // Reset 
      setAmount('');
      setCustomAmount('');
      setErrors({});
      handleNextStep();
    }
  };

  return (
    <div className="donate-subtitle">
      <h2 className="donation-step">Step 1: Donation Amount</h2>
      <div >


        <div className='donate-box'>
          <h4>Choose Donation Amount</h4>
          <div className='donate-info'>
            {/* Preset amount buttons */}
            <button
              type="button"
              className={`donation-amount-button ${amount === '10' ? 'amount' : ''}`}
              onClick={() => handleAmount('10')}
            >
              $10
            </button>
            <button
              type="button"
              className={`donation-amount-button ${amount === '25' ? 'amount' : ''}`}
              onClick={() => handleAmount('25')}
            >
              $25
            </button>
            <button
              type="button"
              className={`donation-amount-button ${amount === '50' ? 'amount' : ''}`}
              onClick={() => handleAmount('50')}
            >
              $50
            </button>
            <button
              type="button"
              className={`donation-amount-button ${amount === '100' ? 'amount' : ''}`}
              onClick={() => handleAmount('100')}
            >
              $100
            </button>
          </div>

          {/* Custom amount input */}
          <div className='donate-info'>
          <div className="custom-amount">
            <label>
              Custom Amount: $
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </label>
            </div>
          </div>

          {/* error message */}
          {errors.amount && (
            <div className="error-message">
              <img
                src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
                alt="Error icon"
                className="error-icon"
              />
              <span>{errors.amount}</span>
            </div>
          )}


          <div className="donate-btns">


            <Button onClick={handleSubmit} disabled={!amount && !customAmount} variant="primary" type="submit" >Next</Button>

          </div>

        </div>

      </div>


    </div>
  );
};

export default DonationAmount;
