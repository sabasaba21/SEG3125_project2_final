
import React from 'react';
import './Donate.css';

const Confirm = ({ handleNextStep }) => {
  // Render logic for place order confirmation
  return (
    <div className="donate-subtitle">
      {/* Confirm */}

      <div className='confirm'>
      <h2>Thank You for Your Donation!</h2>
      <p>Your generosity helps us continue our mission and make a difference.</p>

      </div>

      {/* <button className='next-btn' onClick={() => handleNextStep('donationAmount')}>Submit</button> */}
    </div>
  );
}

export default Confirm;
