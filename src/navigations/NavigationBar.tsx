import { HomeIcon, ProjectRoadmapIcon, WebhookIcon } from "@primer/octicons-react";
import React, { FC, ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "../navigations/NavigationBar.module.scss";

interface Props {
	children?: ReactNode,
	to?: any,
}

export const NavigationBar = () => {
	return (
		<nav className={styles["main-nav"]}>
				<CustomeLink to="/">
					<HomeIcon size={16}
					                    className={styles["icon"]}/>
					Home</CustomeLink>
				<CustomeLink to="/projects">
					<ProjectRoadmapIcon size={16}
					                    className={styles["icon"]}/>
					Projects</CustomeLink>
				<CustomeLink to="/about">
					<WebhookIcon size={16}
					             className={styles["icon"]}/>
					About Us</CustomeLink>
		</nav>
	);
};

const CustomeLink: FC<Props> = ({to, children, ...props}) => {
	const resolvePath = useResolvedPath(to);
	const isActive = useMatch({path: resolvePath.pathname, end: true}); //end for to be sure that it's not only partial matching
	return (
		<span className={isActive
		               ? styles["active"]
		               : ""}>
			
			<Link to={to}{...props}
			      className={styles["main-nav-link"]}>
				{children}
			</Link>
		</span>
	);
};
