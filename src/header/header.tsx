import React from "react";
import { Logo } from "../logo";
import styles from "./header.module.scss";
import { NavigationBar } from "../navigations/navigation-bar";

export interface HeaderProps {
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({className}) => {

	return <header className={`${styles.root} ${className} ${styles.header}`}>
		<div className={styles.logo}><a href="/"
		                                className={styles["logo-link"]}>
			<Logo/>
		</a></div>
		<div className={styles["header-middle-area"]}>
			<NavigationBar/>
		</div>
	</header>;
};
