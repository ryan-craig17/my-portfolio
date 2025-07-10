import { useState } from "react";
import styles from './EmailForm.module.scss';


const EmailForm: React.FC = () => {
    const encodedEmail = 'cndjNDEzQHByb3Rvbi5tZQ=='; //TODO Fetch encrypted from DB and set up EmailJS
    const decodedEmail = atob(encodedEmail);

    const [name, setName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        var subject = `Message from ${name}`;
        var body = `Hi,\n\nMy name is ${name} (${senderEmail}).\n\n${message}`;
        var mailto = `mailto:${decodedEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    };
    return (
        <div className={styles.formContainer}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" value={name} required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" value={senderEmail} required
                        onChange={(e) => setSenderEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} required
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default EmailForm;