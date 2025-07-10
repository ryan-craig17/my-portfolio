import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    return (
        <body className={styles.welcome}>
            <Welcome />
        </body>
    );
}

export default Home;