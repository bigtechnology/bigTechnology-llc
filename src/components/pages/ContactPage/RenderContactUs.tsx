import React from 'react';
import ContactInfo from './ContactInfo';
import ContactUsForm from './ContactUsForm';

const RenderContactUs = (): React.ReactElement => {
  return (
    <div className="contact-us">
      <div className="headers">
        <h2>Get in Touch with us</h2>
        <h3>Please fill in the form to contact us.</h3>
      </div>
      <ContactUsForm />
      <ContactInfo />
    </div>
  );
};

export default RenderContactUs;
