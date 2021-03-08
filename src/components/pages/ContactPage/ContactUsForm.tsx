import emailjs from 'emailjs-com';
import React from 'react';

const ContactUsForm = (): React.ReactElement => {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    emailjs
      .sendForm(
        'service_ippst38',
        'contact_form',
        e.target as HTMLFormElement,
        'user_iHKbBGEc2ruGFHITfjH3o',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />

      <label>Email</label>
      <input type="text" name="email" />

      <label>Subject</label>
      <input type="email" name="subject" />

      <label>Message</label>
      <textarea name="message" />

      <button type="submit" value="Send">
        send
      </button>
    </form>
  );
};
export default ContactUsForm;
