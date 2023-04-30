import "../../assets/styles/Home.css"
import React from "react";
import headerLogo from "../../assets/icons/iopass_header.svg";

function Home() {
    return (
        <>
            <div className="hero">
                <header className="hero-header">
                    <div className="header-logo">
                        <a href="#">
                            <img src={headerLogo} width={"103px"} alt="" />
                        </a>
                    </div>
                    <div className="header-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </header>
                <div className="hero-content">
                    <div className="hero-first-slide">
                        <p className="first-slide__title">
                            digtal bussiness card and video and music now her
                        </p>
                        <a href="#">
                            <img src={headerLogo} alt="" width={724} />
                        </a>
                    </div>
                </div>
                <footer className="hero-footer">
                    <div className="footer-reserved">
                        all copy right | resived 
                    </div>
                    <div className="footer-name">
                        disclaimer | adan alafefe  
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home;