import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    return (
        <div className={styles.welcome}>
            <Welcome />
        </div>
    );
}

export default Home;