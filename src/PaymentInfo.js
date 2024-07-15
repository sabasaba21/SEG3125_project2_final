import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './Donate.css';

const PaymentInfo = ({ handleNextStep }) => {
  return (
    <div className="donate-subtitle">
      <h2>Step 3: Payment Information</h2>


      <div className='donate-box'>

        <Form className='donate-info container-fluid p-0'>



          {/* Name */}
          <Form.Group as={Row} className="mb-2" controlId="formBasicName">
            <Form.Label className='form-fields' column sm={1}></Form.Label>
            <Col sm={4} className="align-items-center d-flex">
              <Form.Control type="name" placeholder="Cardholder Name" />
            </Col>


            <Form.Label column sm={1}></Form.Label>
            <Col sm={4} className="align-items-center d-flex">
              <Form.Control type="name" placeholder="Credit Card Number" />
            </Col>
          </Form.Group>

          {/* Address */}
          <Form.Group as={Row} className="mb-2" controlId="formBasicAddress">
            <Form.Label className='form-fields' column sm={1}></Form.Label>
            <Col sm={4} className="align-items-center d-flex">
              <Form.Control type="address" placeholder="Security Code / CVC " />
            </Col>

            <Form.Label className='form-fields' column sm={1}></Form.Label>
            <Col sm={4} className="flex-column">
              <Form.Control type="address" placeholder="Card Expiration MM / YYYY" />
             
              
            </Col>


          </Form.Group>



        </Form>

      </div>



      {/* Payment information form */}
      <button className="next-btn" onClick={handleNextStep}>Submit</button>
    </div>
  );
}

export default PaymentInfo;
