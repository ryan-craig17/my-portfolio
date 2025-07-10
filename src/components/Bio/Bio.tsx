import { Link } from "react-router-dom";
import styles from './Bio.module.scss';

const Bio: React.FC = () => {
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.aboutContainer}>
                <h1>Hey there, I'm Ryan Craig</h1>
                <h2>Full-Stack Developer · API Explorer · Space Nerd</h2>
                <p>
                    I design and engineer thoughtful web experiences using modern technologies—from frontend aesthetics to backend logic. I enjoy crafting apps that solve problems and spark discovery.
                </p>
                <p>
                    My current project, <strong>Space Station</strong>, is a digital observatory powered by NASA and James Webb APIs. Come back for updates!
                </p>
                <p>
                    Interested in teaming up or chatting about space-tech and software?{" "}
                    <Link to="/contact" className="contact-link">Contact Me →</Link>
                </p>
            </div>
        </div>

    );
}

export default Bio;