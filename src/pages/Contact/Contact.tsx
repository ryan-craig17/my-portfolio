import React from 'react';
import ContactList from '../../components/ContactList/ContactList';
import EmailForm from '../../components/EmailForm/EmailForm';

const Contact: React.FC = () => {
  return (
    <div>
      <EmailForm />
      <ContactList />
    </div>
  );
};

export default Contact;