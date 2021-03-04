import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProspectiveClientBody } from '../../../ProspectiveClients';
import { Input } from '../../common';

const ContactUsForm = (): React.ReactElement => {
  // UseForm tools
  const { errors, handleSubmit, clearErrors, setError } = useForm();
  // Track submission form data
  const [formData, setFormData] = useState<IProspectiveClientBody>();
  /**
   * When a user submits a Contact Us form we will use EmailJS to route the email to bigTechnology & send the user to Home or About??
   *
   */
  const onSubmit: SubmitHandler<IProspectiveClientBody> = async (
    data,
  ): Promise<void> => {
    try {
      setFormData(data);
      clearErrors();
      console.log('Clearing Errors');
      console.log('Pushing the user home');
    } catch (err) {
      console.log({ err });
      let message: string;
      if (err.response?.data) {
        message = err.response.data.error;
      } else {
        message = 'An unknown error occured. Please press send again.';
      }
      setError('form', { type: 'manual', message });
    }
    console.log('This is the data you submitted: ', formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        name="name"
        id="prospect-client-name"
        errors={errors}
        placeholder=""
        rules={{
          required: 'Name is required',
        }}
      />

      <Input
        label="Email"
        name="email"
        id="prospect-client-email"
        errors={errors}
        placeholder=""
        type="email"
        rules={{
          required: 'Email is required',
        }}
      />

      <Input
        label="Subject"
        name="subject"
        id="prospect-client-subject"
        errors={errors}
        placeholder=""
        rules={{
          required: 'Subject is required',
        }}
      />

      <Input
        label="Your Message"
        name="message"
        id="prospect-client-message"
        errors={errors}
        placeholder=""
        rules={{
          required: 'Message is required',
        }}
      />
      <input type="submit" />
    </form>
  );
};

export default ContactUsForm;
