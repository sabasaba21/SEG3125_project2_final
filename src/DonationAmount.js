// import React from 'react';
import React, { useState } from 'react';
import './Donate.css';





const DonationAmount = ({ handleNextStep }) => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleAmount = (amount) => {
    setAmount(amount);

  };
  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };


  return (
    <div className="donate-subtitle">
      <h2>Step 1: Donation Amount</h2>

      {/* Donation amount input */}


      <div className="donation-amount">
        <h4>Choose Donation Amount</h4>
        <div >

          {/* Amount options */}
          <button className={`donation-amount-button ${amount === '10' ? 'amount' : ''}`} onClick={() => handleAmount('10')}>$10</button>
          <button className={`donation-amount-button ${amount === '25' ? 'amount' : ''}`} onClick={() => handleAmount('25')}>$25</button>
          <button className={`donation-amount-button ${amount === '50' ? 'amount' : ''}`} onClick={() => handleAmount('50')}>$50</button>
          <button className={`donation-amount-button ${amount === '100' ? 'amount' : ''}`} onClick={() => handleAmount('100')}>$100</button>

          
        </div>
        {/* Custom amount */}
        <div className="custom-amount">
            <label>
              Custom Amount: $
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                min="1"
              />
            </label>
          </div>
      </div>



      {/* Donation amount form */}
      <button className='next-btn' onClick={handleNextStep}
        disabled={!amount && !customAmount}
      >Next</button>
    </div>


  );
}

export default DonationAmount;
