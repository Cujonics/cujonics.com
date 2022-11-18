import React from 'react';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return <header className={`${styles.root} ${className} ${styles.header}`}><div className={styles.logo}>
        <a className={styles['logo-link']}>
            <div className={styles['screen-reader-text']}>
                <h3 className={styles['logo-text']}>Cujonics</h3>
            </div>
        </a></div>
        <div className={styles['header-middle-area']}>
            <nav className={styles['main-nav']}><a href="#" className={styles['main-nav-link']}>Home</a><a href="#" className={styles['main-nav-link']}>Projects</a><a href="#" className={styles['main-nav-link']}>About Us</a></nav>
        </div>
    </header>;
};
