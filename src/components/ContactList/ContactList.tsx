import React from 'react';
import styles from './ContactList.module.scss';
import { SocialLinks } from '../../data/SocialLinks';

const ContactIcons: React.FC = () => {
  return (
    <div className={styles.iconContainer}>
      <h3>Find Me On</h3>
      <ul>
        {SocialLinks.map(({ href, Icon }, index) => (
          <li key={index}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="icon" style={{ width: '5rem', height: '5rem' }} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactIcons;