import React from 'react';
import styles from './About.module.scss';

export interface AboutProps {
	className?: string;
}

export const About: React.FC<AboutProps> = ({className}) => {
	return <main className={`${styles.root} ${className}`}>
		<div className={styles.layout__content}>
			<h1 className={styles['primary-title']}>About</h1>
			<div className={styles['main-article-content']}>
				Well be soon..
			</div>
		</div>
	</main>;
};
