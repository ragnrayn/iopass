import "../../assets/styles/Home.css"
import React, { useRef, useState } from "react";
import headerLogo from "../../assets/icons/iopass_header.svg";

function Home() {

    const [page, setPage] = useState('main');
    const [menuWidth, setMenuWidth] = useState({ first: { width: '' }, second: { width: "" }, third: { width: "" } });
    const topBar = useRef(null);
    const bottomBar = useRef(null);


    const menuAnimation = () => {
        let topAnimation = topBar.current;
        let bottomAnimation = bottomBar.current;

        setTimeout(() => {
            topAnimation.classList.add("black-bar__top");
            bottomAnimation.classList.add("black-bar__bottom");
        }, 0)

        setTimeout(() => {
            topAnimation.classList.remove("black-bar__top");
            bottomAnimation.classList.remove("black-bar__bottom");
        }, 3000)
    }


    const renderPage = (param) => {
        switch (param) {
            case "menu":
                return (
                    <div className="menu">
                        <ul>
                            <li onClick={() => { menuAnimation(); toggleMenu('about-us') }}><a href="#">about us</a></li>
                            <li onClick={() => { menuAnimation(); toggleMenu('vision') }}><a href="#">vision</a></li>
                            <li onClick={() => { menuAnimation(); toggleMenu('digital') }}><a href="#">digital nfc</a></li>
                            <li onClick={() => { menuAnimation(); toggleMenu('sponsers') }}><a href="#">sponsers</a></li>
                            <li onClick={() => { menuAnimation(); toggleMenu('hamues') }}><a href="#">hamues plus</a></li>
                            <li onClick={() => { menuAnimation(); toggleMenu('follow') }}><a href="#">follow</a></li>
                            <li onClick={() => { menuAnimation(); toggleMenu('contact') }}><a href="#">contact</a></li>
                        </ul>
                    </div>
                )
            case "main":
                return (
                    <div className="hero-first-slide">
                        <p className="first-slide__title">
                            digtal bussiness card and video and music now her
                        </p>
                        <a href="#">
                            <img src={headerLogo} alt="" width={724} />
                        </a>
                    </div>
                )
            case "about-us":
                return (
                    <div className="about-us">
                        <div className="first-slide__title">
                            about us
                        </div>
                        We are a team of work affiliated with a company with an independent future vision. We specialize in the field of nft nfc and the field of energy. We work from our studio belonging to a company that develops technology with a special point of view, in a modern way, and with a design commensurate with the era and the next era from time to 10 years. We have our headquarters in  Switzerland, the city of Bern. The team consists of 3 people: Yura, Adam, and Pascal, a Ukrainian-Swiss team that combines the East and its lobby and the simple European style that we represent in the technology and design industry.  Everyone knows it. Make distances to be immune.. and also prepare the corona crisis.
                    </div>
                )
            case "vision":
                return (
                    <div className="vision">
                        <div className="first-slide__title">
                            vision
                        </div>
                        We have a vision of the future, our motto is lack of communication.. It is not from the end of social communication, but rather the technology that we offer that supports social communication. We just want technology to be the element of communication between us in a modern way.. We have a future vision that we are unique in, and it will change our view of the world. We want to be more ignorant of the world.  Contact without touching...
                    </div>
                )
            case "digital":
                return (
                    <div className="digital">
                        Digital
                    </div>
                )
            case "sponsers":
                return (
                    <div className="sponsers">
                        Sponsers
                    </div>
                )
            case "hamues":
                return (
                    <div className="hamues">
                        Hamues
                    </div>
                )
            case "follow":
                return (
                    <div className="follow">
                        Follow
                    </div>
                )
            case "contact":
                return (
                    <div className="contact">
                        Contact
                    </div>
                )
        }
    }

    const toggleMenu = (getPage) => {
        if (getPage === "menu") {
            setPage(getPage);
            setMenuWidth({ first: { width: '30px', transition: "width .3s ease" }, second: { width: "50px", transition: "width .3s ease" }, third: { width: "70px", transition: "width .3s ease" } })
        } else {
            setMenuWidth({ first: { width: '' }, second: { width: "" }, third: { width: "" } })
            setTimeout(() => {
                setPage(getPage);
            }, 1500)
        }
    }

    return (
        <>
            <div className="hero">
                <div className="animation-scene-top" ref={topBar}></div>
                <div className="animation-scene-bottom" ref={bottomBar}></div>
                <header className="hero-header">
                    <div className="header-logo">
                        <a href="" onClick={() => toggleMenu('main')}>
                            <img src={headerLogo} width={"103px"} alt="" />
                        </a>
                    </div>
                    <div className="header-menu" onClick={() => { toggleMenu('menu') }}>
                        <span style={menuWidth.first}></span>
                        <span style={menuWidth.second}></span>
                        <span style={menuWidth.third}></span>
                    </div>
                </header>
                <div className="hero-content">
                    {renderPage(page)}
                </div>
                <footer className="hero-footer">
                    <div className="footer-reserved">
                        <span>all copy right |</span> resived
                    </div>
                    <div className="footer-name">
                        <span>disclaimer |</span> adan alafefe
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home;