import React from 'react';
import Button from 'react-bootstrap/Button';

function NotFound() {
  return (
    <div className='not-found'>
      <h2>Sorry, this page isn't available.</h2>
      <p>The link you followed may be broken, or the page may have been removed.</p>


      <Button className = "help-buttons" variant="primary" type="button" href ="/SEG3125_project2_final" style={{ backgroundColor: ' #427FB5' }}>
          Go to homepage
        </Button>
    </div>
  );
}

export default NotFound;
