import React from 'react';
import styles from './ContactList.module.scss';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as IndeedIcon } from '../../assets/indeed.svg';
import { ReactComponent as FiverrIcon } from '../../assets/fiverr.svg';
import { ReactComponent as UpworkIcon } from '../../assets/upwork.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';

const ContactIcons: React.FC = () => {
  return (
    <div className={styles.iconContainer}>
      <h3>Find Me On</h3>
      <ul>
        <li>
          <a href="https://profile.indeed.com/p/ryanc-tr4m3c7" target="_blank" rel="noopener noreferrer">
            <IndeedIcon className="icon" style={{ width: '5rem', height: '5rem' }} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ryan-craig-678072370" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="icon" style={{ width: '5rem', height: '5rem' }} />
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/~01de7ada731960a022" target="_blank" rel="noopener noreferrer">
            <UpworkIcon className="icon" style={{ width: '5rem', height: '5rem' }} />
          </a>
        </li>
        
        <li>
          <a href="https://www.fiverr.com/s/jjEXvg9" target="_blank" rel="noopener noreferrer">
            <FiverrIcon className="icon" style={{ width: '5rem', height: '5rem' }} />
          </a>
        </li>
        <li>
          <a href="https://github.com/ryan-craig17" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="icon" style={{ width: '5rem', height: '5rem' }}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactIcons;