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
      <input type="text" name="name" />
      <label>Name</label>

      <input type="text" name="email" />
      <label>Email</label>

      <input type="email" name="subject" />
      <label>Subject</label>

      <label>Message</label>
      <textarea name="message" />

      <input type="submit" value="Send" />
    </form>
  );
};

interface IFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default ContactUsForm;
