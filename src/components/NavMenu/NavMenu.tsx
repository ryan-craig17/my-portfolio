import React, { useState } from 'react';
import styles from './NavMenu.module.scss';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

type NavMenuItem = {
    title: string,
    url: string,
    enabled: boolean,
    topLevel: boolean,
    subMenuItems: NavMenuItem[]
}

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerIcon = "\u2630";

    const Routes = [
        {
            title: 'Home',
            url: '/',
            enabled: true,
            topLevel: true,

        },
        {
            title: 'About',
            url: '/about',
            enabled: true,
            topLevel: true,
        },
        {
            title: 'Portfolio',
            url: '/portfolio',
            enabled: false,
            topLevel: true,
        },
        {
            title: 'Space Station',
            url: '/space-station',
            enabled: false, 
            topLevel: true,
            subMenuItems: [
                {
                    title: '',
                    url: '',
                    enabled: true, 
                    topLevel: false,
                }
            ]
        }
    ] as NavMenuItem[];

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo} />
                </div>

                <div className={styles.title}>Ryan Craig</div>

                <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    {hamburgerIcon}
                </button>

                <ul className={`${styles.navList} ${isOpen ? styles.active : ""}`}>
                    {Routes.filter(item => item.enabled && item.topLevel).map(item => (
                    <li key={item.url} className={styles.navItem}>
                        <Link to={item.url} className={styles.navLink}>
                        {item.title}
                        </Link>
                        {item.subMenuItems && item.subMenuItems.some(sub => sub.enabled) && (
                        <ul className={styles.subMenu}>
                            {item.subMenuItems.filter(sub => sub.enabled).map(sub => (
                            <li key={sub.url}>
                                <Link to={sub.url}>{sub.title}</Link>
                            </li>
                            ))}
                        </ul>
                        )}
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu;