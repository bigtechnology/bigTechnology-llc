import React from 'react';

const ContactInfo = (): React.ReactElement => {
  return (
    <div className="contact-info-wrapper">
      <h2>bigTechnology</h2>
      <div className="contact-info">
        <a href="#">San Francisco, CA</a>
        <a
          href="mailto:big-technology@outlook.com?"
          target="_blank"
          rel="noreferrer"
        >
          big-technology@outlook.com
        </a>
        <a href="callto:707-294-8896">707-294-8896</a>
      </div>
    </div>
  );
};

export default ContactInfo;
