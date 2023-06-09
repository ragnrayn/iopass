import React from "react";
import "../../assets/styles/Nfc/index.css";
import headerLogo from "../../assets/icons/iopass_header.png";
import { Link } from "react-router-dom";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function Nfc() {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <>
            <div className="main">
                <section className="nfc">
                    <section className="nfc-first">
                        <div className="line-left"></div>
                        <div className="line-right"></div>
                        <div className="hero-header">
                            <div className="header-logo">
                                <Link to="/">
                                    <img src={headerLogo} width={"103px"} alt="" />
                                </Link>
                            </div>
                            <div className="header-menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="nfc-top">
                            <div className="top-nfc">
                                <img src={require("../../assets/images/car-1.png")} alt="" />
                            </div>
                        </div>
                        <div className="hero-footer">
                            <div className="footer-reserved reserved-index">
                                <span>all copy right |</span> <span>resived</span>
                            </div>
                            <div className="footer-name">
                                <span>disclaimer |</span> <span>adan alafefe</span>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="nfc-second">
                    <img src={require("../../assets/images/card-2.png")} alt="" />
                </section>
                <section className="nfc-third">
                    <div className="third-text">
                        NFC technology is a technology that aims to make communication easier, and the main goal is to protect the environment.
                    </div>
                    <div className="third-image">
                        <img src={require("../../assets/images/card-3.png")} width={"800px"} alt="" />
                    </div>
                </section>
                <section className="nfc-four">
                    <div className="four-text">
                        ...you arrive wherever you are and wherever you are. We also have customer service that connects with us on the hotline wherever you are
                    </div>
                </section>
                <section className="nfc-five">
                    <div className="five-text">
                        ... This technology only works by placing your Emirates ID on the phone for only a second. You will find the data related to each of your work activities, whether you are a doctor, worker, journalist, or whoever is active with the customer on the phone. It is saved only by clicking on the word “Save” on the phone.  It is easier for customers to communicate with you and ensure that they have obtained your data
                    </div>
                    <div className="five-image">
                        <img src={require("../../assets/images/card-5.png")} width={"800px"} alt="" />
                    </div>
                </section>
                <section className="buy-now">
                    <div className="buy-now__text">
                        .. After the Corona crisis and the global epidemic, we have a vision that makes people immune from stomach diseases that are transmitted through papers, especially money and cards circulated between people, so through this card you will be in more  Immunity from infectious diseases ... We also support hospitals and doctors with a 50% discount for the card, and we also have more...
                    </div>
                    <div className="buy-now__btn">
                        <a href="#">buy now</a>
                    </div>
                </section>
                <section className="nfc-six">
                    <div className="six-image">
                        <img src={require("../../assets/images/card-footer.png")} alt="" />
                    </div>
                </section>
                <section className="nfc-footer">
                    <div className="footer-link">
                        <Link to="/">
                            <img src={headerLogo} width={"500px"} alt="" />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Nfc;