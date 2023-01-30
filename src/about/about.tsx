import React from 'react';
import styles from './about.module.scss';

export interface AboutProps {
    className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
    return <main className={`${styles.root} ${className}`}>
        <div className={styles.layout__content}>
            <h1 className={styles['primary-title']}>About</h1>
            <div className={styles['main-article-content']}>Coming soon</div>
        </div>
    </main>;
};
