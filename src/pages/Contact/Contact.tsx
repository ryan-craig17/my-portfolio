import React, { useState } from 'react';
import styles from '../Contact/Contact.module.scss';
import ContactList from '../../components/ContactList/ContactList';

const Contact: React.FC = () => {
  const encodedEmail = 'cndjNDEzQHByb3Rvbi5tZQ=='; //TODO Fetch encrypted from DB and set up EmailJS
  const decodedEmail = atob(encodedEmail);

  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Message from ${name}`;
    const body = `Hi,\n\nMy name is ${name} (${senderEmail}).\n\n${message}`;
    const mailto = `mailto:${decodedEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <div>
        <div className={styles.contactContainer}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
      <ContactList />
    </div>
  );
};

export default Contact;
