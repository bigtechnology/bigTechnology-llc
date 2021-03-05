import React from 'react';
import { Header } from '../../common';
import RenderContactUs from './RenderContactUs';

const ContactUsContainer = (): React.ReactElement => {
  return (
    <div className="contact-container">
      <Header />
      <RenderContactUs />
    </div>
  );
};

export default ContactUsContainer;
