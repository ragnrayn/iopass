import "../../assets/styles/Home/index.css"
import React, { useEffect, useRef, useState } from "react";
import headerLogo from "../../assets/icons/iopass_header.svg";
import { Link } from "react-router-dom";

import backgroundVideo from '../../assets/videos/background.mp4';

function Home() {

    const [page, setPage] = useState('main');
    const [prevPage, setPrevPage] = useState('main');
    const [menuWidth, setMenuWidth] = useState({ first: { width: '' }, second: { width: "" }, third: { width: "" } });
    const [isRouteEnabled, setIsRouteEnabled] = useState(false);
    const topBar = useRef(null);
    const bottomBar = useRef(null);
    const lineLeft = useRef(null);
    const lineRight = useRef(null);
    const loaderRef = useRef(null);
    const menuRef = useRef(null);
    const [wobble, setWobble] = useState(0);

    const menuAnimation = () => {
        setIsRouteEnabled(false);

        let topAnimation = topBar.current;
        let bottomAnimation = bottomBar.current;
        let leftAnimation = lineLeft.current;
        let rightAnimation = lineRight.current;

        topAnimation.classList.add("black-bar__top");
        bottomAnimation.classList.add("black-bar__bottom");

        leftAnimation.classList.add("animation-line-first-animation-reverse");
        rightAnimation.classList.add("animation-line-second-animation-reverse");

        if (page === "main") {
            setTimeout(() => {
                leftAnimation.classList.add("animation-scene-left-line");
                rightAnimation.classList.add("animation-scene-right-line");
            }, 2000)
        }

        setTimeout(() => {
            loaderRef.current.classList.add("animation-loader-scene");
        }, 500);

        setTimeout(() => {
            topAnimation.classList.add("black-bar__top");
            bottomAnimation.classList.add("black-bar__bottom");
        }, 1500)

        lineLeft.current.classList.remove("animation-line-first-animation");
        lineRight.current.classList.remove("animation-line-second-animation");

        setTimeout(() => {
            topAnimation.classList.remove("black-bar__top");
            bottomAnimation.classList.remove("black-bar__bottom");

            leftAnimation.classList.remove("animation-line-first-animation-reverse");
            rightAnimation.classList.remove("animation-line-second-animation-reverse");

            lineLeft.current.classList.add("animation-line-first-animation");
            lineRight.current.classList.add("animation-line-second-animation");
        }, 6500)

        setTimeout(() => {
            setIsRouteEnabled(true);

            loaderRef.current.classList.remove("animation-loader-scene");
            rightAnimation.classList.remove("animation-scene-right-line");
            leftAnimation.classList.remove("animation-scene-left-line");
        }, 5000)
    }


    useEffect(() => {
        lineLeft.current.classList.add("animation-line-first-animation");
        lineRight.current.classList.add("animation-line-second-animation");

        topBar.current.classList.add("loadTopStart");
        bottomBar.current.classList.add("loadBottomStart");

        setTimeout(() => {
            topBar.current.classList.remove("loadTopStart");
            bottomBar.current.classList.remove("loadBottomStart");

            setPage('menu');
            setIsRouteEnabled(true);
        }, 2900)
    }, [])

    const renderPage = (param) => {
        switch (param) {
            case "menu":
                return (
                    <div className="menu" wobble={wobble}>
                        <ul>
                            <li onClick={() => { menuAnimation(); routeTo('about-us') }}><a href="#">about us</a></li>
                            <li onClick={() => { menuAnimation(); routeTo('vision') }}><a href="#">vision</a></li>
                            <li onClick={() => { menuAnimation(); routeTo('digital') }}><Link to="/nfc">digital nfc</Link></li>
                            <li onClick={() => { menuAnimation(); routeTo('sponsers') }}><a href="#">sponsers</a></li>
                            <li onClick={() => { menuAnimation(); routeTo('hamues') }}><a href="#">hamues plus</a></li>
                            <li onClick={() => { menuAnimation(); routeTo('follow') }}><a href="#">follow</a></li>
                            <li onClick={() => { menuAnimation(); routeTo('contact') }}><a href="#">contact</a></li>
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
                            <img src={headerLogo} alt="" />
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

    const routeTo = (page) => {
        setTimeout(() => {
            setPage(page);
        }, 3000);
    }

    const toggleMenu = (getPage) => {
        if (!isRouteEnabled) return;

        if (getPage === "menu" && page !== "menu") {
            setPrevPage(page);

            setPage(getPage);
            // setMenuWidth({ first: { width: '30px' }, second: { width: "50px" }, third: { width: "70px" } })

            menuRef.current.classList.add('active');
        } else {
            setIsRouteEnabled(false);

            // setMenuWidth({ first: { width: '' }, second: { width: "" }, third: { width: "" } })
            menuRef.current.classList.remove('active');
            setTimeout(() => {
                setIsRouteEnabled(true);

                setPage(prevPage);
            }, 1500)
        }
    }

    return (
        <>
            <div className="hero">
                <video src={backgroundVideo} autoPlay muted loop className="bg_video"></video>

                <div className="animation-loader" ref={loaderRef}>
                    <div className="spinner"></div>
                    <img src={headerLogo} alt="" />
                </div>
                <div className="animation-scene-top" ref={topBar}></div>
                <div className="animation-scene-bottom" ref={bottomBar}></div>
                <div className="animation-line-first" ref={lineLeft}></div>
                <div className="animation-line-second" ref={lineRight}></div>
                <header className="hero-header">
                    <div className="header-logo">
                        <a href="" onClick={() => toggleMenu('main')}>
                            <img src={headerLogo} width={"103px"} alt="" />
                        </a>
                    </div>
                    <div className="header-menu" onClick={() => { toggleMenu('menu'); wobble === 0 ? setWobble(1) : setWobble(0) }} ref={menuRef}>
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
                        <span>all copy right |</span> <span>resived</span>
                    </div>
                    <div className="footer-name">
                        <span>disclaimer |</span> <span>adan alafefe</span>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home;