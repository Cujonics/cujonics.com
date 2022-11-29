import React from 'react';
import './App.css';
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Header } from './header/header';
import { Main } from './main/Main';
import { Footer } from './footer/footer';
import {Route,  Routes} from "react-router-dom";

function App() {
  let page
  switch (window.location.pathname) {
    case"/":
      page = <Main className="content"/>
      break
    case"/projects":
      page = <Projects />
      break
    case"/about":
      page = <About/>
      break
  }
    return (
        <div className="App">
            <div className="wrapper">
                <div className="layout">
                    <Header />
                  {page}
                    <Footer className="footer" />
                </div>
            </div></div>
    );
}

export default App;
