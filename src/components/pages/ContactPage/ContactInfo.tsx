import React from 'react';

const ContactInfo = (): React.ReactElement => {
  return (
    <div className="contact-info">
      <h2>bigTechnology</h2>
      <a href="#">San Francisco, CA</a>
      <br />
      <a
        href="mailto:big-technology@outlook.com?"
        target="_blank"
        rel="noreferrer"
      >
        Contact Us
      </a>
      <br />
      <a href="callto:707-294-8896">707-294-8896</a>
      <br />
    </div>
  );
};

export default ContactInfo;
