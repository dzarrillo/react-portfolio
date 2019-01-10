import React from "react";

const NavBar = () => (
    <header>
        <section>
            <div className="myName">
                Don Zarrillo Jr.
            </div>
            <nav>
                <div className="aboutButton navButton" >
                    <a href="/about">About</a>

                    {/* <link to="/about">About</link> */}
                </div>
                <div className="portButton navButton" >
                    <a href="/portfolio">Portfolio</a>
                </div>
                <div className="contactButton navButton" >
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </section>
    </header>
);

export default NavBar;