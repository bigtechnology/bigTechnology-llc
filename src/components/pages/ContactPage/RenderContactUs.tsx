import React from 'react';
import ContactUsForm from './ContactUsForm';

const RenderContactUs = (): React.ReactElement => {
  return (
    <div className="contact-us">
      <h1>CCONTACT</h1>

      <h2>Get in Touch with us</h2>
      <h3>Please fill in the form to contact us.</h3>
      <ContactUsForm />
    </div>
  );
};

export default RenderContactUs;
