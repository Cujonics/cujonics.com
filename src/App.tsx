import React from 'react';
import './App.css';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="layout">
                    <Header /><Main className="content" />
                    <Footer className="footer" />
                </div>
            </div></div>
    );
}

export default App;
