import { HomeIcon, ProjectRoadmapIcon, WebhookIcon } from "@primer/octicons-react";
import React from "react";
import { Logo } from "../Logo";
import styles from "./header.module.scss";

export interface HeaderProps {
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({className}) => {
	return <header className={`${styles.root} ${className} ${styles.header}`}>
		<div className={styles.logo}><a className={styles["logo-link"]}>
			<Logo/>
		</a></div>
		<div className={styles["header-middle-area"]}>
			<nav className={styles["main-nav"]}>
				<a href="#"
				   className={styles["main-nav-link"]}>
					<HomeIcon size={16}
					          className={styles["icon"]}
					/>
					Home</a>
				<a href="#"
				   className={styles["main-nav-link"]}>
					<ProjectRoadmapIcon size={16}
					                    className={styles["icon"]}/>
					Projects</a>
				<a href="#"
				   className={styles["main-nav-link"]}>
					<WebhookIcon size={16}
					             className={styles["icon"]}/>
					About Us</a>
			</nav>
		</div>
	</header>;
};
