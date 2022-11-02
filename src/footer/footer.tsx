import React from 'react';
import styles from './footer.module.scss';
import Header_module from '../header/header.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return <footer className={`${className} footer`}>
        <div className={`${Header_module['logo-text']} ${styles['logo-footer']}`}>
            Cujonics</div>
        <nav className={styles['footer-navigation']}><a href="/home" className={styles['secondary-nav']}>Home</a><a href="/projects" className={styles['secondary-nav']}>Projects</a><a href="/about" className={styles['secondary-nav']}>About</a><a href="/contact" className={styles['secondary-nav']}>Contact Us</a></nav></footer>;
};
