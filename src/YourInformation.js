import Button from 'react-bootstrap/Button';
import AddressAutocomplete from './AddressAutocomplete';

import { Form, Row, Col } from 'react-bootstrap';

import './Donate.css';

const YourInformation = ({ handleNextStep }) => {
  const handlePlaceSelect = (place) => {
    console.log('Selected place:', place);
    // Handle the selected place data as needed (e.g., store it in state)
  };
  return (


    <div className="donate-subtitle">

      <h2>Step 2: Your Information</h2>
      <div className='donate-box'>

      <Form className='donate-info container-fluid p-0'>



        {/* Name */}
        <Form.Group as={Row} className="mb-2" controlId="formBasicName">
          <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="name" placeholder="First name" />
          </Col>


          <Form.Label column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="name" placeholder="Last name" />
          </Col>
        </Form.Group>

        {/* Address */}
        <Form.Group as={Row} className="mb-2" controlId="formBasicAddress">
          <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="address" placeholder="Address" />
          </Col>


          <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="address" placeholder="Unit" />
          </Col>



        </Form.Group>

        <Form.Group as={Row} className="mb-2" controlId="formBasicName">
        <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="address" placeholder="City" />
          </Col>


          <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="address" placeholder="Country" />
          </Col>


          </Form.Group>

          
          <Form.Group as={Row} className="mb-2" controlId="formBasicName">

          <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="address" placeholder="Postal / ZIP Code " />
          </Col>

          <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="address" placeholder="Province / State" />
          </Col>

          </Form.Group>

        {/* Contact info */}

        <Form.Group as={Row} className="mb-2" controlId="formBasicContact">


        <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="address" placeholder="Email Address" />
          </Col>


          <Form.Label className='form-fields' column sm={1}></Form.Label>
          <Col sm={4} className="align-items-center d-flex">
            <Form.Control type="address" placeholder="Phone Number" />
          </Col>



        </Form.Group>



      </Form>

      </div>

      {/* Your information form */}
      <button className='next-btn' onClick={handleNextStep}>Next</button>

    </div>
  );
}

export default YourInformation;
