import React from 'react';
import styles from './projects.module.scss';

export interface ProjectsProps {
    className?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
    return <main className={`${styles.root} ${className}`}>
        <div className={styles.layout__content}>
            <h1 className={styles['primary-title']}>Projects</h1>
            <div className={styles['main-article-content']}>Coming soon</div>
        </div>
    </main>;
};
