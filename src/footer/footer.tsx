import React from "react";
import { NavigationBar } from "../navigations/NavigationBar";
import Header_module from "../header/header.module.scss";
import styles from "./footer.module.scss";


export interface FooterProps {
	className?: string;
}

export const Footer: React.FC<FooterProps> = ({className}) => {
	return <footer className={`${className} footer`}>
		<div className={`${Header_module["logo-text"]} ${styles["logo-footer"]}`}>
			Cujonics &copy; 2023
		</div>
		<div className={styles["footer-navigation"]}>
		<NavigationBar visibility={"icon-none"}/>
		</div>
	</footer>;
};
