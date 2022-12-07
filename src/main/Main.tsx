import React from 'react';
import styles from './main.module.scss';

export interface MainProps {
    className?: string;
}

export const Main: React.FC<MainProps> = ({ className }) => {
    return <main className={`${styles.root} ${className}`}>
        <div className={styles.layout__content}>
        <h3 className={styles['secondary-title']}>Learn more about</h3>
        <h1 className={styles['primary-title']}>Our Applications</h1>
        <div className={styles['main-article-content']}>
            <p>We don’t do anything “because everyone else is doing it”. We pick who we work with as much by who they are and what it feels like to enable them as we do by their chances of taking over the world.
            </p></div>
        <div className={styles['buttons-wrapper']}>
            <a href="/" className={styles['navigation-button']}>Portfolio</a>
            <a href="/" className={styles['navigation-button']}>Topics</a>
        </div>
    </div>
    </main>;
};
