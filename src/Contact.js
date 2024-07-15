import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div>
   <div className="text-center-container">
  <p>Get In Touch</p>
  <h2>Contact Us</h2>
</div>


    <Form className='container contact-container col-md-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="Subject" placeholder="Enter Subject" />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>


      
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  );
}

export default Contact;