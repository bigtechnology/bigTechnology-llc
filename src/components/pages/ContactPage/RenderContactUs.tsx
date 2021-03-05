import React from 'react';
import ContactInfo from './ContactInfo';
import ContactUsForm from './ContactUsForm';

const RenderContactUs = (): React.ReactElement => {
  return (
    <div className="contact-us">
      <h1>CONTACT</h1>

      <h2>Get in Touch with us</h2>
      <h3>Please fill in the form to contact us.</h3>
      <ContactUsForm />
      <ContactInfo />
    </div>
  );
};

export default RenderContactUs;
