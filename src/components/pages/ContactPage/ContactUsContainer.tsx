import React from 'react';
import { Header } from '../../common';
import { Footer } from '../../common/Footer';
import RenderContactUs from './RenderContactUs';

const ContactUsContainer = (): React.ReactElement => {
  return (
    <div className="contact-container">
      <Header />
      <RenderContactUs />
      <Footer />
    </div>
  );
};

export default ContactUsContainer;
