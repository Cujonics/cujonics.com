import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./about/about";
import "./app.css";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Main } from "./main/main";
import { Projects } from "./projects/projects";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<div className="layout">
					<Header/>
					<Routes>
						<Route path="/"
						       element={<Main/>}/>
						<Route path="/projects"
						       element={<Projects/>}/>
						<Route path="/about"
						       element={<About/>}/>
					</Routes>
					<Footer className="footer"/>
				</div>
			</div>
		</div>
	);
}

export default App;
