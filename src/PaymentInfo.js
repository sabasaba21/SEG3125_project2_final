import React from 'react';
import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import cardHint from './assets/card_hint.png';
import './Donate.css';
import ImageOverlay from './ImageOverlay';

const PaymentInfo = ({ handleNextStep , handlePreviousStep}) => {
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      handleNextStep(); // Proceed to the next step if form is valid
    }
  
    setValidated(true); // Update the state to show validation feedback
  };
  

  return (
    <div className="donate-subtitle">
      <h2 class = "donation-step">Step 3: Payment Information</h2>


      <div className='donate-box'>

      <Form  donate-info noValidate validated={validated} onSubmit={handleSubmit}>
        
      <Row className="mb-8">
        <Form.Group as={Col} md="8" controlId="validationCustom01">
          <Form.Label>Card Holder Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="card holder name"
       
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="8" controlId="validationCustom02">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Hint: 1234 5678 8900 0000"
            pattern="[0-9 ]{16,19}"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid card number. 
          </Form.Control.Feedback>
        
        </Form.Group>
     
      </Row>
      <Row className="mb-6">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Security Code / CVC</Form.Label>
          <Form.Control type="text" placeholder="Hint: 123" required pattern="[0-9]{3,4}" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid CVC. 
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Card Expiration</Form.Label>
          <Form.Control type="text" placeholder="MM / YYYY" required  pattern="(0[1-9]|1[0-2])/[0-9 ]{4|5}"/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid date. 
          </Form.Control.Feedback>
        </Form.Group>
    
      </Row>
     

      <div className="donate-btns">
            <Button variant="secondary" onClick={handlePreviousStep}>
              Previous
            </Button>
            <Button   variant="primary" type="submit">
              Submit
            </Button>
          </div>

    </Form>
    <div className="img">
      <p>Click the image for an example of where to find your credit card information </p>
      <ImageOverlay 
        imageSrc={cardHint} 
        thumbnailSrc={cardHint}
      />
    </div>
   

    </div>

  

    </div>
    
  );
}

export default PaymentInfo;