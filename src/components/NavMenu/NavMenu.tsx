import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { AppRoutes as Routes } from '../../routes/AppRoutes';
import styles from './NavMenu.module.scss';

const NavMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerIcon = "\u2630";

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo} />
                </div>
                <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    {hamburgerIcon}
                </button>

                <ul className={`${styles.navList} ${isOpen ? styles.active : ""}`}>
                    {Routes.filter(item => item.enabled && item.topLevel).map(item => (
                        <li key={item.url} className={styles.navItem}>
                            <NavLink to={item.url}
                                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                            >
                                {item.title}
                            </NavLink>
                            {item.subMenuItems && item.subMenuItems.some(sub => sub.enabled) && (
                                <ul className={styles.subMenu}>
                                    {item.subMenuItems.filter(sub => sub.enabled).map(sub => (
                                        <li key={sub.url}>
                                            <NavLink to={sub.url}>{sub.title}</NavLink>
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