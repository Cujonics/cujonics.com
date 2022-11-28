import { HomeIcon, ProjectRoadmapIcon, WebhookIcon } from "@primer/octicons-react";
import React from "react";
import styles from './header.module.scss';


export const NavigationBar = () => {
	return (
		<nav className={styles["main-nav"]}>
			<a href="/"
			   className={styles["main-nav-link"]}>
				<HomeIcon size={16}
				          className={styles["icon"]}
				/>
				Home</a>
			<a href="/projects"
			   className={styles["main-nav-link"]}>
				<ProjectRoadmapIcon size={16}
				                    className={styles["icon"]}/>
				Projects</a>
			<a href="/about"
			   className={styles["main-nav-link"]}>
				<WebhookIcon size={16}
				             className={styles["icon"]}/>
				About Us</a>
		</nav>
	);
};
