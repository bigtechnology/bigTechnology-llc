import React from 'react';

const RenderContactUs = (): React.ReactElement => {
  return (
    <div className="contact-us">
      <h1>CCONTACT</h1>

      <h2>Get in Touch with us</h2>
      <h3>Please fill in the form to contact us.</h3>

      <form action="">
        <div className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="name">Email</label>
          <input type="text" />
          <label htmlFor="name">Sunject</label>
          <input type="text" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RenderContactUs;
