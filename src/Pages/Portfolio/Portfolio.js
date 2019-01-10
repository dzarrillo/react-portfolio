import React from "react";
import SideBar from "../../components/SideBar";
import SkillSet from "../../components/SkillSet";

const Portfolio = () => {
    return (
        <div className="bodyContent">
            {/* <NavBar></NavBar> */}
            <section className="mainContent">
                <h1>Portfolio</h1>
                <div className="picSection">
                    <div className="thumbnail left">
                        <img src={require("../../assets/images/burger-logo.png")} alt="Burger"></img>
                        <a href="https://dzarrillo.github.io/clickygame/"><span className="label">Burger</span></a>
                    </div>
                    <div className="thumbnail right">
                        <img src={require("../../assets/images/boocamp.gif")} alt="boocamp"></img>
                        <a href="https://boocamp-spot.herokuapp.com/"><span className="label">Boo!camp spot</span></a>
                    </div>
                </div>
                <div className="picSection">
                    <div className="thumbnail left">
                        <img src={require("../../assets/images/sheperdpuppiestwo.jpg")} alt="Giphy"></img>
                        <a href="https://dzarrillo.github.io/Giphy/"><span className="label">Giphy</span></a>
                    </div>
                    <div className="thumbnail right">
                        <img src={require("../../assets/images/nordwood.jpg")} alt="laptop"></img>
                        <a href="https://dzarrillo.github.io/clickygame/"><span className="label">ClickyGame</span></a>
                    </div>
                </div>

            </section>
            <section>
                <SideBar></SideBar>
                <SkillSet></SkillSet>
            </section>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Portfolio;