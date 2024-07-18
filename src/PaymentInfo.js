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
    }

    setValidated(true);

    if (validated){
      handleNextStep(); 
    }
  };


  return (
    <div className="donate-subtitle">
      <h2 class = "donation-step">Step 3: Payment Information</h2>


      <div className='donate-box'>

      <Form  donate-info noValidate validated={validated} onSubmit={handleSubmit}>
        
      <Row className="mb-8">
        <Form.Group as={Col} md="8" controlId="validationCustom01">
          <Form.Label>Cardholder name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="cardholder name"
       
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="8" controlId="validationCustom02">
          <Form.Label>Credit Card Numner</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Hint: 1234 5678 8900 0000"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        
        </Form.Group>
     
      </Row>
      <Row className="mb-6">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Security Code / CVC</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid CVC. Hint: 123.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Card Expiration</Form.Label>
          <Form.Control type="text" placeholder="MM / YYYY" required />
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