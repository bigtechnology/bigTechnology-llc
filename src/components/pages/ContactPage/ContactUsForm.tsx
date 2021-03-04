import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

const ContactUsForm = (): React.ReactElement => {
  const { register, handleSubmit } = useForm<ContactFormData>();
  const onSubmit = useCallback((formValues: ContactFormData) => {
    console.log('formValues: ', formValues);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Name</label>
      <input type="text" ref={register} name="name" />

      <label htmlFor="">Email</label>
      <input type="text" ref={register} name="email" />

      <label htmlFor="">Subject</label>

      <input type="text" ref={register} name="subject" />

      <label htmlFor="">Message</label>

      <input type="text" ref={register} name="message" />
      <button type="submit">send</button>
    </form>
  );
};

interface ContactFormData {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export default ContactUsForm;
