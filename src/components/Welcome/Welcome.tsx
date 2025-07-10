import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.scss';

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.overlay}>
                <h1>Exploring the web & the cosmos.</h1>
                <h2>Hi, I'm Ryan Craig—a developer who builds scalable software with a passion for all things space.</h2>
                <button className="about-button" onClick={() => navigate('/about')}>
                    More About Me →
                </button>
            </div>
        </div>
    );
}

export default Welcome;