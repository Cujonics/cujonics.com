import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./about/About";
import "./App.css";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Main } from "./main/Main";
import { Projects } from "./projects/Projects";

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
